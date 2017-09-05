# Stores

This directory contains everything that directly relates to MobX
stores, with each store having its own class definition.

The optimal structure for stores is to place files relevant
to a store inside its own subdirectory, e.g.:

```
stores/
└── Text/
    ├── index.js
    ├── Text.jsx
    └── Text.spec.jsx
```


## Do:

- Keep all files immediately relevant to a store inside the
  given store directory
- Add a basic `index.js` to import the store and export it
  to make it dead simple to import the store from elsewhere
- Use MobX's `@action` for action methods, rather than implicit
  `set` methods for clarity
- **Be consistent**— however you choose to lay things out


## Don't:

- Place anything React-y inside stores— MobX is not reliant
  on React and uses no JSX, only basic ES6 classes and
  `@` decorators
- Instantiate stores (i.e. use `new` keyword) inside store
  definition files— stores are instantiated in the
  createStore module to avoid stores becoming singletons
- Be afraid to use side-effects in actions, such as API calls
- Forget to write tests... ;)
