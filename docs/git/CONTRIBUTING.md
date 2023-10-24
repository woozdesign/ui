# Contributing

The following is a set of guidelines for contributing to WoozDesign. Please spend several minutes reading these guidelines before you create an issue or pull request.

## Code of Conduct

We have adopted a [Code of Conduct](./COC.md) that we expect project participants to adhere to. Please read the full text so that you can understand what actions will and will not be tolerated.

## Open Development

All work on WoozDesign happens directly on GitHub. Both core team members and external contributors send pull requests which go through the same review process.

## Branch Organization

According to our release schedule, we maintain two branches, `main` and `develop`. If you send a bugfix pull request, please do it against the `main` branch, if it's a `develop` pull request, please do it against the `develop` branch.

If you are planning to implement a new feature, please use a branch name as `feature/your_feature`.

## Bugs

We are using [Github Issues](https://github.com/woozlabs/woozdesign-ui/issues) for bug tracking.
Before you report a bug, please make sure you've searched existing [issues](https://github.com/woozlabs/woozdesign-ui/issues).

## Proposing a Change

If you intend to change the public API or introduce new feature, we also recommend you use [Github Issues](https://github.com/woozlabs/woozdesign-ui/issues) to create a feature request issue.

If you want to help on new API, please reference API Naming Rules to name it.

## Sending a Pull Request

The team is monitoring for pull requests. We will review your pull request and either merge it, request changes to it, or close it with an explanation.

Before submitting a pull request, please make sure the following is done:

1. Fork the repository and create your branch from the correct branch.
2. Run `npm install` in the repository root.
3. If you've fixed a bug or added code that should be tested, add tests!
4. Ensure the test suite passes (npm run test). Tip: `npm test -- --watch TestName` is helpful in development.
5. Run `npm test -- -u` to update the jest snapshots and commit these changes as well (if there are any updates).
6. Make sure your code lints (npm run lint). Tip: Lint runs automatically when you git commit (Use Git Hooks).
7. Finally, please make sure that all GitHub CI checks pass, if they fail, you can click detail to enter the details to view the reason.

## Development Workflow

npm or yarn are recommended as package management tools.

After you clone the antd code and use following commands to install dependencies:

```
$ yarn
```

You can also run the following common commands:

### Run Storybook

```
$ yarn storybook
```

### Run Test

```
$ yarn test
```

### Run Build

```
$ yarn build
```

## Being a collaborator

If you are an active contributor and are willing to work with WoozDesign Team in our opensource workflow, you can apply to be a outside collaborator.
