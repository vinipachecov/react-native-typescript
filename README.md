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

- Typescript
- Tslint
- React-Navigation
  - Using Hooks useNavigation
  - Navigation Service to navigate outside components
- Styled Components
- Prettier Configuration
- Yarn
- Storybook
- Redux
  - Folder Structure
  - Duck pattern
- React-native-config for .env configurations and multiple environments
- Detox E2E testing

## Goals

- React Native Paper
- Jest integration
- Redux Saga
- Context API
- i18n

## Env variables

I'm using react-native-dotenv because I think it is easier to use than react-native-config, although to use it we need a hack to use it with typescript.

To add new variables and have intellisense help we need to add it to the env.ts file.
