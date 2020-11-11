---
id: 16-CustomHooks
title: Custom Hooks
sidebar_label: Custom Hooks
slug: /custom-hooks
---

> Custom Hooks allow you to easily reuse stateful logic between components.

> Image being able to write a function with just your component logic code but without the UI (JSX) and then reuse that in several components...that is what a custom hook enables.

**Hooks** are a **new** addition in `React 16.8`

## Background

- Before hooks, React had patterns to reuse stateful logic but none of the approaches worked well
  - First, Higher-Order Components
  - Then, Render Props
- After hooks, creating custom hooks is an ideal solution to reuse stateful logic

## Why Hooks?

It’s hard to reuse stateful logic between components.

- reusable behavior
- current patterns: render props and higher-order components
- both patterns create "wrapper hell" where components are surrounded by providers, consumers, higher-order components, render props etc...
- **Hooks allow you to reuse stateful logic without changing your component hierarchy**

## Best Practice

**Custom hooks** are now considered a best practice in the React community.

**Prefer** creating a `hook` for reuseable logic **over** the `render props` pattern or `high-order components` where possible.

## Where to Use

Building your own Hooks lets you extract component logic into reusable functions.

| In Classes                            | With Hooks   |
| ------------------------------------- | ------------ |
| Higher-Order Components, Render Props | Custom Hooks |

<br/>
Traditionally in React, we’ve had two popular ways to share stateful logic between components: render props and higher-order components. Hooks solve many of the same problems without forcing you to add more components to the tree.

<!-- ## Demo
https://usehooks.com/useTheme/ -->

## Rules of Hooks

- Only call hooks at the top level (of your function component)
  - don't call them inside loops (for), conditions (if), or nested functions (only inside your main function component body)
- Only call hooks from React Functions
  - call hooks from React function components
  - call hooks from other custom hooks

## Reference

- [Custom Hooks Documentation](https://reactjs.org/docs/hooks-custom.html)
- [Custom Hook Examples/Recipes](https://usehooks.com/)
