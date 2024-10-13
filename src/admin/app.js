// @ts-ignore
import AuthLogo from "./logo/logo-sm.png";
import { darkTheme, lightTheme } from "./extensions/theme.js";
// @ts-ignore
import th from "./extensions/th.lang.json";

const config = {
  theme: {
    dark: {
      colors: darkTheme,
    },
    light: {
      colors: lightTheme,
    },
  },
  auth: {
    logo: AuthLogo,
  },
  tutorials: false,
  notifications: { releases: false },
  locales: ["th"],
  translations: {
    th: th,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
