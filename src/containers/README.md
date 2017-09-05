# Containers

This directory contains special _container components_. These
are a type of component that are specifically designed to
connect to the MobX store and usually render **components**,
passing down props that generally come from the MobX store.
The props can either be MobX state or action creator methods.

The optimal structure for components is to place files relevant
to a container inside its own subdirectory, e.g.:

```
containers/
└── HeaderContainer/
    ├── index.js
    ├── HeaderContainer.jsx
    └── HeaderContainer.spec.jsx
```


## Do:

- Keep all files immediately relevant to a container inside the
  given container directory
- Add a basic `index.js` to import the container and export it
  to make it dead simple to import the container from elsewhere
- Keep container render methods as straightforward as possible,
  generally only rendering one or two components
- **Be consistent**— however you choose to lay things out


## Don't:

- Mix concerns (files, modules) that should really belong to
  other components
- Complicate container render methods— ideally returning only
  1 component with relevant state (props) and methods passed
- Create unnecessary "proxy" methods on the container that only
  call MobX action creators— just pass action creator methods
  that were injected as props into the container
- Forget to write tests... ;)
