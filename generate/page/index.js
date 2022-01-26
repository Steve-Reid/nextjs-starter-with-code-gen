module.exports = {
  description: 'Generates new React page',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the Page?",
      validate: function (value) {
        let message = true;
        if (!/.+/.test(value)) {
          message = console.error(
            'Missing',
            'you must define a component name'
          );
        } else if (value.length < 3) {
          message = console.error(
            'Too Short',
            `"${value}" is not descriptive enough`
          );
        }
        return message;
      },
    },
  ],
  actions: function () {
    return [
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}.tsx',
        templateFile: './generate/page/templates/page.hbs',
      },
      {
        type: 'add',
        path: 'src/stories/pages/{{pascalCase name}}.stories.tsx',
        templateFile: './generate/page/templates/story.hbs',
      },
      {
        type: 'add',
        path: 'src/__tests__/pages/{{pascalCase name}}.test.tsx',
        templateFile: './generate/page/templates/test.hbs',
      },
    ];
  },
};
