# About this repo

This repo is a seed for helping people (and myself) on starting new project with React native with typescript.

It's goals is to make typescript patterns explainable and more intuitive. The idea is to give a hint on how a react native project can be structured.

## Screen props and AppProps

- ScreenProps is what I call as the props of a specific screen
- AppProps are props of the redux store combined with other middlewares like react-navigation

## Containers

I pattern I like is to centralize actions into a component and use it as a HOC for screens where they will need some actions.

### Pros

- Easier refactor
- Code Splitting

### Cons

- Maybe performance can suffer from this.

## Current State

What is already in:

- [Typescript](https://facebook.github.io/react-native/docs/typescript)
- Tslint
- [React-Navigation](https://www.npmjs.com/package/react-navigation)
  - Using Hooks useNavigation
  - Navigation Service to navigate outside components
- [Styled Components](npmjs.com/package/styled-components)
- Prettier Configuration
- Yarn
- [Storybook](https://storybook.js.org/docs/guides/guide-react-native/)
- [Redux](redux)
  - Folder Structure
  - [Duck pattern](https://blog.rocketseat.com.br/estrutura-redux-escalavel-com-ducks/)
- [React-native-dotenv](https://github.com/zetachang/react-native-dotenv) for .env configurations and multiple environments
- [Detox E2E testing](https://github.com/wix/Detox)
- [React Native Testing library](https://github.com/callstack/react-native-testing-library) (Unit Testing)
- [Jest integration](https://jestjs.io/docs/en/tutorial-react-native)

## Goals

- Theming
- offline status checker
- offline saga queue
- Redux Saga
- Context API
- i18n
- Semver

## Env variables

I'm using react-native-dotenv because I think it is easier to use than react-native-config, although to use it we need a hack to use it with typescript.

To add new variables and have intellisense help we need to add it to the env.ts file.
