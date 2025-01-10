import type { Preview } from "@storybook/react";
import { background } from "storybook/internal/theming";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    background:{
      default: 'dark'
    }
  },
};

export default preview;
