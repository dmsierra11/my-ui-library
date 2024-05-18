# @dmsierra11/ui-library

This project is a reusable component library designed for React applications. It provides styled components that can be easily integrated into any React project.

## Features

- **Reusable React Components**: Includes components like [Button](file:///Users/danielsierra/Projects/ui-library/dist/bundle.js#169%2C229-169%2C229) which are customizable and reusable across projects.
- **TypeScript Support**: Fully supports TypeScript for type-safe code.
- **Customizable Styling**: Uses CSS modules for component styling, allowing easy theming and customization.

## Installation

To install the library, you can use npm or yarn:

```bash
npm install @dmsierra11/ui-library
# or
yarn add @dmsierra11/ui-library
```

## Usage

Here's a quick example to get you started with using the `Button` component from the library:

```javascript
import React from 'react';
import { Button } from '@dmsierra11/ui-library';

const App = () => {
  return (
    <Button label="Click Me" onClick={() => alert("Button Clicked!")} />
  );
};

export default App;
```

## Development

This project uses Webpack for bundling modules and Babel for transpiling JavaScript. The main entry point is `src/index.ts`.

### Building the Project

To build the project, run:

```bash
npm run build
```

This command uses Webpack to bundle the components into `dist/bundle.js`.

### Configuration Files

- **Webpack Configuration**: `webpack.config.js`
- **Babel Configuration**: `.babelrc`
- **TypeScript Configuration**: `tsconfig.json`

## Publishing a New Version

To publish a new version of the library, follow these steps:

1. **Update the version**: Update the version number in `package.json` according to semantic versioning.
2. **Build the project**: Run `npm run build` to ensure the latest changes are compiled.
3. **Publish**: Run `npm publish` to publish the package to npm. Ensure you are logged in to npm with the account that has access to the `@dmsierra11` scope.
4. **Tag the release**: After publishing, tag the commit with the new version number and push the tags to the repository.

   ```bash
   git tag v1.0.1
   git push --tags
   ```

5. **Update documentation**: Ensure the README and any other relevant documentation are updated to reflect the changes in the new version.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


