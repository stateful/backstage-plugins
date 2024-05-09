import React, { ReactNode } from 'react';

interface BlinkWrapperProps {
  children: ReactNode;
}

const BlinkWrapper: React.FC<BlinkWrapperProps> = ({ children }) => {
  return (
    <>
      <style>
        {`
          @keyframes blink {
            0%, 49% {
              opacity: 1;
            }
            50%, 100% {
              opacity: 0;
            }
          }
          .animate-blink {
            animation: blink 1s infinite;
          }
        `}
      </style>
      <span className="animate-blink">{children}</span>
    </>
  );
};

export default BlinkWrapper;
