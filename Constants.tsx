import { ILanguage } from "./app/interfaces/ILanguages";
import { IRoutes } from "./app/interfaces/IRoutes";
import { ILateralNavbar } from "./app/interfaces/ILateralNavbar";

export const apiURL = "";

export const languages: ILanguage[] = [
  { value: "en", label: "🇺🇸 English" },
  { value: "es", label: "🇲🇽 Español" },
];

export const routes: IRoutes = {
  login: "/",
  register: "/register",
  forgotPassword: "/forgotPassword",
  resetPassword: "/reset-password",
  dashboard: "/dashboard",
  profile: "/profile",
  settings: "/settings",
  logout: "/logout",
};

export const lateralNavbarItems: ILateralNavbar = {
  Home: {
    Dashboard: routes.dashboard,
  },
  Preferences: {
    Settings: routes.settings,
  },
};
