---
id: 16-Hooks
title: Hooks
sidebar_label: Hooks
slug: /hooks
---

break into hooks (intro)
custom hooks

## Defined

> Hooks are a new addition in React 16.8. They let you use `state` and other React features including `Lifecycle Methods` without writing a class.

## Background

- React has always had two types of components: class and function.
- Before hooks, class and function components were not interchangeable.
- Before hooks, function components had two feature limitations:
  - couldn't have state
  - couldn't have lifecycle events
- After hooks, function components became feature equivalent to class components
  - can have state (useState hook)
  - can handle lifecycle events (useEffect hook)
- Before hooks, React had patterns to reuse stateful logic but none of the approaches worked well
  - First, Higher-Order Components
  - Then, Render Props
- After hooks, creating custom hooks is an ideal solution to reuse stateful logic

## Why Hooks?

- It’s hard to reuse stateful logic between components
  - reusable behavior
  - current patterns: render props and higher-order components
    - both patterns create "wrapper hell" where components are surrounded by providers, consumers, higher-order components, render props etc...
    - **Hooks allow you to reuse stateful logic without changing your component hierarchy**
- Complex components become hard to understand
  - lifecycle events like `componentDidMount` and `componentDidUpdate` contain code to address mixed concerns
    - data fetching
    - setting up event listeners
    - etc...
    - leads to bugs and inconsistencies
- Classes confuse both people and machines
  - class can be a large barrier to learning React
    - understanding `this` in JavaScript
    - code is verbose without unstable syntax proposals
    - when to use class vs function components
  - classes don't work well with today's tools
    - don't minify well
    - don't tree shake well
    - make hot reloading flaky and unreliable

## No Breaking Changes

Before we continue, note that Hooks are:

- Completely opt-in.
  - You can try Hooks in a few components without rewriting any existing code. But you don’t have to learn or use Hooks right now if you don’t want to.
- 100% backwards-compatible.
  - Hooks don’t contain any breaking changes.
- Available now.
  - Hooks are now available with the release of v16.8.0.
- There are no plans to remove classes from React.
- Hooks don’t replace your knowledge of React concepts.

## Best Practice

**Function components with hooks** are now considered a best practice in the React community.

If you are starting a new project I would recommend using all function components with hooks and avoid writing class components.

## Should I rewrite my class components?

After learning that function components with hooks have become a best practice, the question becomes: should you should rewrite your existing class components (if you have them) to be function components?

- As I mentioned previously, there are no plans to remove class components from React.
- If your class components are working and you only need to make small bug fixes and find them easy to make I don't think it is worth the effort.
- If you are finding it difficult for your team to grasp React and JavaScript (for example: the nuances of the this keyword) then it might be worth it to rewrite the components as functions.

## Hooks API

Hooks provide a more direct API to the React concepts you already know: props, **state**, context, refs, and **lifecycle**.

| In Classes                            | With Hooks   |
| ------------------------------------- | ------------ |
| this.setState                         | useState     |
| Lifecycle Methods                     | useEffect    |
| Higher-Order Components, Render Props | Custom Hooks |

## useState

The `useState` hook was covered earlier in the course in the **State** chapter. The examples below are just to review the concepts if needed.

To understand the useState hook let's start at a class component that renders a counter.

### Simple Class Component

```js
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
```

### Simple Function Component

To take the class component above and translate it into a function component it would look as follows

```js
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));
```

## useEffect

The `useEffect` hook was covered earlier in the course in the **Lifecycle & Side Effects** chapter. The examples below are just to review the concepts if needed.

This Hook should be used for any side-effects you’re executing in your render cycle.

`useEffect()` _takes_ a `function` as an input and _returns_ `nothing`.

The function it takes will be executed for you:

- after the render cycle
- after _every_ render cycle

| Lifecycle Methods     | Hook                                                                       | Renders                                                                      |
| --------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| componentDidMount     | `useEffect(()=>{ ... }`, [ ])                                              | after first render only                                                      |
| componentDidUpdate    | `useEffect(()=>{... }, [dependency1, dependency2])`                        | after first render AND subsequent renders caused by a change in a dependency |
| componentWillUnmount  | `useEffect(() => { ... return ()=> {...cleanup}})`                         |
| shouldComponentUpdate | no comparable hook, instead, wrap function component in `React.memo(List)` | renders only if a prop changes                                               |
| componentWillMount    | deprecated so no comparable hook                                           |
| componentWillUpdate   | deprecated so no comparable hook                                           |

### useEffect Simple Demo

```js
//class component
// class Post extends React.Component {
//   state = {
//     now: new Date()
//   };

//   componentWillMount() {
//     setInterval(() => {
//       this.setState({ now: new Date() });
//     }, 1000);
//   }

//   render() {
//     return (
//       <div className="post">
//         <h1>My First Blog Post</h1>
//         <div>Author: Mark Twain</div>
//         <div>Published: {this.state.now.toLocaleTimeString()}</div>
//         <p>
//           I am new to blogging and this is my first post. You should expect a
//           lot of great things from me.
//         </p>
//       </div>
//     );
//   }
// }

//function component
function Post() {
  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="post">
      <h1>My First Blog Post</h1>
      <div>Author: Mark Twain</div>
      <div>Published: {now.toLocaleTimeString()}</div>
      <p>
        I am new to blogging and this is my first post. You should expect a lot
        of great things from me.
      </p>
    </div>
  );
}

ReactDOM.render(<Post />, document.getElementById('root'));
```

## Custom Hooks

Building your own Hooks lets you extract component logic into reusable functions.

| In Classes                            | With Hooks   |
| ------------------------------------- | ------------ |
| Higher-Order Components, Render Props | Custom Hooks |

Traditionally in React, we’ve had two popular ways to share stateful logic between components: render props and higher-order components. Hooks solve many of the same problems without forcing you to add more components to the tree.

<!-- https://usehooks.com/useTheme/ -->

## Rules of Hooks

- Only call hooks at the top level (of your function component)
  - don't call them inside loops (for), conditions (if), or nested functions (only inside your main function component body)
- Only call hooks from React Functions
  - call hooks from React function components
  - call hooks from other custom hooks

## Labs

The labs in this course use all **function components with hooks** which are now considered a best practice in the React community.

## Reference

- [Hooks Documentation](https://reactjs.org/docs/hooks-overview.html)
- [Hooks Introduction](https://academind.com/learn/react/react-hooks-introduction/)
- [Hooks Reference](https://reactjs.org/docs/hooks-reference.html)
- [Custom Hooks Documentation](https://reactjs.org/docs/hooks-custom.html)
- [Custom Hook Examples/Recipes](https://usehooks.com/)
