module.exports = {
  description: 'Generates new React component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: "What's the name of the Component?",
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
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: './generate/component/templates/component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: './generate/component/templates/story.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: './generate/component/templates/test.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: './generate/component/templates/index.hbs',
      },
      {
        // Adds an index.js file if it does not already exist
        type: 'add',
        path: 'src/components/index.ts',
        templateFile: './generate/component/templates/injectable-index.hbs',
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: 'append',
        path: 'src/components/index.ts',
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ];
  },
};
