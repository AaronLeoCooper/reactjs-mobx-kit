/**
 * Component styleguide config
 */


module.exports = {
  ignore: [
    '**/*.spec.*',
    '**/App.*'
  ],
  sections: [
    {
      name: 'Intro',
      content: 'styleguide/Intro.md'
    },
    {
      name: 'Components',
      content: 'styleguide/Components.md',
      components: 'src/components/**/*.jsx'
    },
    {
      name: 'Containers',
      content: 'styleguide/Containers.md',
      components: 'src/containers/**/*.jsx'
    }
  ]
};
