# Stateful Backstage Plugins

## Plugins

- [Stateful](plugins/stateful/README.md)
- [Stateful Backend](plugins/stateful-backend/README.md)

## Publish plugins to NPM

Once you have determined the changes you want to apply to a new version of a plugin, you must run changeset to initiate the deployment process.

```sh {"id":"01HXFA2X9Y008Y4K323EXFZE9C"}
yarn changeset
```

Chagenset will ask you which plugins you want to update and if the change is a major, minor or patch change. Once you have answered the questions, changeset will create a .md file in the `changesets` folder with the changes you want to apply.

Merge these changes into the main branch. Afterward, a GitHub Action (GA) will invoke Changeset to create a new Pull Request that cleans up the changeset .md files and allows you to review the new version of the plugins before publishing.

Once this Pull Request is merged, another GA will take over, responsible for generating the GitHub Release and deploying the updated plugin version to NPM.
