---
id: 01-Overview
title: Overview
sidebar_label: Overview
slug: /
---

import UnlockVideo from '../src/components/unlockvideo';

There are so many JavaScript libraries and frameworks it is difficult to keep up and understand which are worth learning and how they might be valuable to your organization.

React is one of the most popular JavaScript libraries currently so in this overview we are going to step back and take a look at the big picture and examine:

- Why you might want to consider adopting it as part of your technology stack
- What problem React is solving
- Compare React to similar technologies
- Understand evolving web application architectures

## Why React?

### Adoption

StackOverflow.com 2020 Survey of 65,000 developers:

- [Most Popular Web Frameworks](https://insights.stackoverflow.com/survey/2020#technology-web-frameworks)
- [Most Loved/Dreaded/Wanted Web Frameworks](https://insights.stackoverflow.com/survey/2020#technology-most-loved-dreaded-and-wanted-web-frameworks)

StackOverflow.com 2019 Survey of 90,000 developers:

- [Most Popular Web Frameworks](https://insights.stackoverflow.com/survey/2019#technology-_-web-frameworks)
- [Most Loved/Dreaded/Wanted Web Frameworks](https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-web-frameworks)

Looking at this chart from npm trends (npm is the most popular package manager for JavaScript) it becomes clear that both React has extremely strong adoption.

![npm trends chart of javascript frameworks](https://user-images.githubusercontent.com/1474579/94379000-6f5ba380-00fb-11eb-848a-91f012b33232.png)

[View interactive chart online](https://www.npmtrends.com/@angular/core-vs-react-vs-vue)

In addition, lots of companies are using React in their technology stack including:

- Facebook
- Netflix
- Uber
- Twitter
- Pinterest
- Airbnb
- Instagram
- reddit
- Instacart
- and more...

<!-- Exercise:

1. Install the [React DevTools for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en).
1. Visit some of the sites above and see how they are using React. -->

### Easy to Learn

The React library itself has a _very low concept count_ and is subsequently easy to learn.

### Ecosystem & Community

> Not to worry though as React has an entire ecosystem of other tools and libraries...

After you begin building applications with the React library you quickly learn that it does one thing and does it well but you need a lot of other things to create a web application using it.

Not to worry though as React has an entire ecosystem of other tools and libraries to fill those gaps. Think of building a React app as being similar to buying best-of-breed software and integrating it. You integrate React with other best-of-breed libraries and tools to build an application. Here is a quick list of some of the more popular libraries and tools often used with React.

- Babel: a JavaScript compiler that allows you to use the latest JavaScript language features today
- TypeScript: TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Either the Babel or TypeScript compiler are used to get the features of a modern programming language today
- webpack: efficiently bundles your JavaScript, CSS, HTML, and images for deployment
- Create-React App: Creates a React project with best practices by running only one command
- State Management Libraries including Redux and MobX to architect and manage the data in your application
- GraphQL: a query language for your data APIs
- React Native: Create native apps for Android and iOS using React
- Gatsby: framework based on React that helps developers build blazing fast websites and apps

### Timeless Technology

React is built on top of timeless web standard technology including JavaScript, HTML, CSS, and the browser's Document Object Model (DOM).

Subsequently, learning and getting better at React is really just becoming better at web development. This includes deeply understanding web standards which are technologies that seem to never go out of style.

## What is React?

### Understanding

> React is SQL for HTML or more specifically the Document Object Model (DOM)

React is a JavaScript library for building user interfaces.
More specifically, React provides a declarative library that keeps the DOM in sync with your data.

A declarative language that most developers are familiar with is SQL. SQL is declarative because you declare what data you want and the database figures out how to efficiently return you that data. React is SQL for HTML or more specifically the Document Object Model (DOM). You declare what HTML and data you want and React figures out how to efficently (with the least amount of changes to the DOM) render your data to HTML.

The architecture is component-based and allows you that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.

### Why is it useful?

> React makes it painless to create interactive UIs on top of web standards.

React makes it painless to create interactive UIs on top of web standards. Because it based on web standards, your application is easy to deploy to thousands of users simultaneously.

## React, Angular, Vue Compared

<!-- <iframe width="388" height="218" src="https://www.youtube.com/embed/4mTo57a9QRw?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> -->

### React

- Facebook
- Components
- Library
- Just the View in MVC
- Need to include other libraries
  - React Router (Routing)
  - HTTP: Axios or fetch API
- ES6 (Babel compiler) or TypeScript (tsc compiler)
- Create React App
- Uses Webpack
- Redux

### Angular

- Google
- Components
- Framework
- Modular
- Component Router
- HttpClient
- Forms
- Usually TypeScript (tsc compiler)
- Angular CLI
- Uses Webpack
- Reactive Extensions for Angular (ngrx)

### Vue

- Community
  - Started by former Google Technologist and Meteor core team member Evan You
- Components
- Framework
- Modular
- Vue Router (official Router)
- Need to include other libraries
  - HTTP: Axios or fetch API
  - Forms
- ES6 (Babel compiler) or TypeScript (tsc compiler)
- Vue CLI
- Vuex (State Management)

### React, Angular, Vue: Key Insights

> **Angular** continues to put **“JS”** **into HTML**. **React** puts **“HTML” into JS**. – Cory House

- Vue and Angular have templates which are often favored by developers without as much JavaScript experience
- React does not have templates because it just relies on JavaScript combined with JSX so it is often favored by developers who are fluent in JavaScript
- Angular is a more comprehensive framework while React is more of a targeted micro library. Vue can starts as a micro library and scales to a comprehensive framework.
- Because React and Vue are smaller they can be:
  - Easier to understand
    - Vue even more than React because of its use of templates and excellent documentation
  - Easier to include in a project
- React is much more popular (but has existed longer)
- React and Vue is used more by design/digital/interactive agencies to build interactive websites as well as in the applications in an enterprise
- Angular is used more for building applications in the enterprise, particularly at larger organizations, and is getting better for website use cases

## Web application architectures

<!-- <iframe width="388" height="218" src="https://www.youtube.com/embed/LUsT3SoILYg?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> -->

### Server-side web application architecture

- Java Spring
- ASP.NET
- Ruby on Rails
- PHP (Laravel, CodeIgniter)

![Server-side web app architecture](https://user-images.githubusercontent.com/1474579/65373190-30715300-dc48-11e9-8343-84fa96372e1b.png)

### Single-page web application architecture

- React
- Angular
- Vue
- AngularJS
- Ember
- Backbone

![SPA Architecture](https://user-images.githubusercontent.com/1474579/101680131-3f4f4b80-3a2e-11eb-9e03-78e325ebdea4.png)

### Why a Single-page web application architecture?

So why are single-page web application architectures so popular? I think it can be summed up in the following statement.

> JavaScript libraries and frameworks provide an interactive user experience similar to a destop or native application that is as easy to update as a web application.

In the past, developers have commonly used technologies from Microsoft (Windows Forms, WPF, Silverlight), Oracle (Java Swing), Adobe (Flash, Flex ) and/or mobile solutions such as iOS or Android development to provide rich interactive user experiences. These technologies were never easy to deploy or update for a large number of users. Which is why the business applications are built as web applications today.

These JavaScript libraries and frameworks allow developers to "have their cake and eat it to" by enabling an interactive user experience while remaining a web application.

## React Architecture

<!-- <iframe width="388" height="218" src="https://www.youtube.com/embed/iTwyWYFcbWM?rel=0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> -->

---

![React Architecture](https://user-images.githubusercontent.com/1474579/65395139-5daf2580-dd5c-11e9-88bd-489848766507.png)
