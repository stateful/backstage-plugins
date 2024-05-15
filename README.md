# Stateful Backstage Plugins

## Plugins

- [Stateful](plugins/stateful/README.md)
- [Stateful Backend](plugins/stateful-backend/README.md)

# Getting Started

First install the frontend plugin into your app:

```sh {"id":"01HXYGSDS7TVH8EGWQS9QP9C5G"}
# From your Backstage root directory
yarn --cwd packages/app add @statefulhq/backstage-plugin-stateful
```

Modify your app routes in packages/app/src/App.tsx to include the Stateful component exported from the plugin, for example:

```sh {"id":"01HXYGWX7BKS5K8DMHJKAJQTGK"}
+  import { StatefulPage } from '@statefulhq/backstage-plugin-stateful';

const routes = (

  <FlatRoutes>
    ...
+   <Route path="/stateful" element={<StatefulPage />} />
    {/* other routes... */}
```

Now you should install the backend plugin:

```sh {"id":"01HXYHKZ2KTPJ5YGCDVT13S5XZ"}
# From your Backstage root directory
yarn --cwd packages/backend add @statefulhq/backstage-plugin-stateful-backend
```

Modify your index fine in packages/backend/src/index.ts to import the Stateful backend plugin, for example:

```sh {"id":"01HXYJ5582YV1FJF0ADBG17X62"}
+   backend.add(import('@statefulhq/backstage-plugin-stateful-backend'));
backend.start();
```

Now you should configure a proxy and the stateful param so the plugin can call correctly our platform API. inside your `app-config.yaml` you should add this.

```sh {"id":"01HXYHQF8BSN02M018ZNFKABF4"}
proxy:
  endpoints:
    '/stateful':
      target: https://api.us-central1.stateful.com
      allowedHeaders:
        - "Authorization"
        - "Auth-Provider"
        - "Content-Type"

stateful:
  appUrl: https://us-central1.stateful.com


```

## Publish plugins to NPM

Once you have determined the changes you want to apply to a new version of a plugin, you must run changeset to initiate the deployment process.

```sh {"id":"01HXFA2X9Y008Y4K323EXFZE9C","name":"run-cs"}
yarn changeset
```

Chagenset will ask you which plugins you want to update and if the change is a major, minor or patch change. Once you have answered the questions, changeset will create a .md file in the `changesets` folder with the changes you want to apply.

Merge these changes into the main branch. Afterward, a GitHub Action (GA) will invoke Changeset to create a new Pull Request that cleans up the changeset .md files and allows you to review the new version of the plugins before publishing.

Once this Pull Request is merged, another GA will take over, responsible for generating the GitHub Release and deploying the updated plugin version to NPM.
