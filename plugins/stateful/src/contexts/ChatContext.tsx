import React, {
  FC,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ApolloError, useQuery, useSubscription } from '@apollo/client';
import useLocalStorageState from 'use-local-storage-state';
import {
  Chat,
  ChatMessage,
  GetChatResponseQuery,
  GetChatResponseQueryVariables,
  GetMeQuery,
  GetMeQueryVariables,
  SubscriptionChatSubscription,
  SubscriptionChatSubscriptionVariables,
  User,
} from '../__generated__/graphql';
import { GET_CHAT_RESPONSE, GET_ME } from '../graphql/queries';
import { SUBSCRIPTION_CHAT } from '../graphql/subscriptions';

interface ChatContextProps {
  chatHistory: Chat[];
  currentQuestion: string | null;
  currentMessage: ChatMessage | null;
  submitQuestion: (question: string) => void;
  clearHistories: () => void;
  resetTypingKey: number;
  sessionId: string | null;
  useSession: boolean;
  toggleUseSession: () => void;
  resetSessionId: () => void;
  subscriptionError: ApolloError | undefined;
  currentUser: User;
}

export const ChatContext = createContext<ChatContextProps | undefined>(
  undefined,
);

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: FC<ChatProviderProps> = ({ children }) => {
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [storedChatHistory, setStoredChatHistory] =
    useLocalStorageState<string>('chatHistory', { defaultValue: '[]' });

  const [resetTypingKey, setResetTypingKey] = useState(0);
  const [useSession, setUseSession] = useState(true);
  const [sessionId, setSessionId] = useState<string | null>(null);

  // Load chat history from local storage when the component mounts
  useEffect(() => {
    try {
      const parsedHistory: Chat[] = JSON.parse(storedChatHistory);
      setChatHistory(parsedHistory);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error parsing stored chat history:', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Save chat history to local storage whenever it changes
  useEffect(() => {
    try {
      const simpleChatHistory = chatHistory.map(chat => {
        return {
          question: chat.question,
          response: chat.response,
          commands: chat.commands,
          hits: chat.hits,
        };
      });

      const historyJson = JSON.stringify(simpleChatHistory);
      setStoredChatHistory(historyJson);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error stringifying chat history:', error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatHistory]);

  const resetSessionId = () => {
    setSessionId(null);
  };

  const clearHistories = () => {
    resetSessionId();
    setChatHistory([]);
    setStoredChatHistory('[]'); // Clear stored chat history in local storage
    setResetTypingKey(prev => prev + 1);
  };

  const toggleUseSession = () => {
    setUseSession(prev => !prev);
  };

  const [currentQuestion, setCurrentQuestion] = useState<string | null>(null);
  const [currentMessage, setCurrentMessage] = useState<ChatMessage | null>(
    null,
  );

  const { data: userData } = useQuery<GetMeQuery, GetMeQueryVariables>(GET_ME);

  const currentUser =  userData?.me
  const { data: chatData } = useQuery<
    GetChatResponseQuery,
    GetChatResponseQueryVariables
  >(GET_CHAT_RESPONSE, {
    variables: {
      input: {
        question: currentQuestion ?? '',
        ...(useSession && sessionId ? { session: { id: sessionId } } : {}),
      },
    },
    skip: currentQuestion === null,
  });

  useEffect(() => {
    if (chatData?.assistant?.chat) {
      setCurrentQuestion(null);
      setCurrentMessage(null);
      setChatHistory(prevHistory => [
        ...prevHistory,
        chatData.assistant!.chat!,
      ]);
      if (chatData?.assistant?.chat.session) {
        setSessionId(chatData.assistant.chat.session.id);
      }
    }
  }, [chatData]);

  const { data: subscriptionData, error: subscriptionError } = useSubscription<
    SubscriptionChatSubscription,
    SubscriptionChatSubscriptionVariables
  >(SUBSCRIPTION_CHAT);
  if (subscriptionError) {
    // eslint-disable-next-line no-console
    console.error(subscriptionError);
  }

  useEffect(() => {
    if (subscriptionData?.chat?.done === false) {
      if (currentQuestion) {
        setCurrentMessage(subscriptionData?.chat || null);
      }
    }
  }, [subscriptionData, currentQuestion]);

  const submitQuestion = (question: string) => {
    setCurrentQuestion(question);
  };

  const value = {
    chatHistory,
    currentQuestion,
    currentMessage,
    submitQuestion,
    clearHistories,
    resetTypingKey,
    sessionId,
    useSession,
    toggleUseSession,
    resetSessionId,
    subscriptionError,
    currentUser,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

export default useChat;
