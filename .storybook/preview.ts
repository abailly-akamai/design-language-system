import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      story: {
        inline: true,
      },
    },
    options: {
      storySort: {
        order: ['Documentation', 'Tokens', 'Components'],
      },
    },
  },
};

export default preview;
