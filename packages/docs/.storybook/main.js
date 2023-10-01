// import { join, dirname } from "path";

// /**
//  * This function is used to resolve the absolute path of a package.
//  * It is needed in projects that use Yarn PnP or are set up within a monorepo.
//  */
// function getAbsolutePath(value) {
//   return dirname(require.resolve(join(value, "package.json")));
// }

// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
//   stories: [
//     "../stories/**/*.mdx",
//     "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
//   ],
//   addons: [
//     getAbsolutePath("@storybook/addon-links"),
//     getAbsolutePath("@storybook/addon-essentials"),
//     getAbsolutePath("@storybook/addon-onboarding"),
//     getAbsolutePath("@storybook/addon-interactions"),
//   ],
//   framework: {
//     name: getAbsolutePath("@storybook/react-vite"),
//     options: {},
//   },
//   docs: {
//     autodocs: "tag",
//   },
// };
// export default config;
module.exports = {
  'stories': [
    '../src/pages/**/*.storie.mdx',
    '../src/stories/**/*.storie.tsx'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-vite'
  },
  'features': {
    'storyStoreV7': true
  }
}