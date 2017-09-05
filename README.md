# Webpack ReactJS Starter Kit

> A TDD-focused ReactJS, MobX, React Router starter kit

This is (what I consider) an optimial starting point for ReactJS & MobX projects, using the latest versions of Webpack, Babel, ReactJS, MobX and React Router v4.


## Key Features

- ReactJS v15.5+ (and v16 once released!)
- MobX
- React Router v4
- Webpack v3
- Babel v6 (using Babel Env to target any browsers required for your project)
- Mocha unit testing suite with util functions
- ESLint (Airbnb coding style, plus tweaks to keep you sane)


## Commands

These are the key commands you'll need:

`npm start` — Run a local development server with Hot Module Reloading

`npm run build` — Compile your app into static, production-ready, optimised files

`npm run lint` — Run all linting scripts (ESLint, Stylelint coming soon!)

`npm test` — Run tests with coverage output shown

`npm run test:watch` — Run tests continuously as files inside `src` directory change


## Best Practices

Since there are many practices to be learned about and many of them pretty specific
to various areas of app development, relevant READMEs are present throughout this
starter kit.

[Components](src/components/README.md)

[Containers](src/containers/README.md)

[Stores](src/stores/README.md)

These will be added to over time, and can be freely deleted once you're comfortable
with the practices if you don't like them hanging around in your project. If you
notice any corrections or improvements that can be made to these, feel free to open
a pull request!


## To-do Goals

- [ ] Add better MobX examples with some proper component integration
- [ ] Write more best practices guides for optimum project setup
- [ ] Add component generator CLI


## Suggestions?

Suggestions are **absolutely welcome!**

Whilst I consider myself pretty well-aquainted currently with ReactJS at scale,
I'm forever on the lookout for ways to improve on the practices I follow when I
architect a React-based web app. And ultimately this isn't just for me, this is
for anyone out there starting on a React project in need of the basic skeleton and
structure already in place for them.

If you think there's any improvements to be made here or any missing modules you feel
are downright _essencial_ for building effective ReactJS apps, please don't hesitate
to raise an issue or a pull request.


## About

ReactJS is easy to start with (assuming you have a starting boilerplate or if you're
using `create-react-app` CLI tool), but difficult to master, and will require a _lot_
of iterative decision-making as you build your app.

After working with some small and some very large-scale ReactJS web apps over the past
couple of years, this is the starter kit that _I really wanted_ when I first needed to
build something big using ReactJS.

This little boilerplate project was created to provide an _opinionated_, _structured_
starting point for ReactJS apps of all sizes, with the hope that it will somewhat ease
the burdens placed upon you — the engineer — of building scaleable, unit-tested and
performant web apps.

This project will likely remain under constant development and undergo many changes
to stay up to date with the crazy-fast evolution of the JavaScript scene to remain
relevant.

**Developed by [Aaron Leo Cooper](http://webdevdiaries.com) @
[2359Media](https://2359media.com)**

