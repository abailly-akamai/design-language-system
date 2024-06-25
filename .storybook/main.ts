import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  staticDirs: ['../public', '../static'],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
