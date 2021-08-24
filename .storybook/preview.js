import "antd/dist/antd.css"
import "../src/antd-react-v4.16.11-stories/antd-react-v4.16.11.css"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
