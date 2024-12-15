import { MangaDexConstants } from "./mangadex";
import { NettruyenConstants } from "./nettruyen";

export class Constants {
  static readonly CORS_URL = process.env.NEXT_PUBLIC_CORS_URL!;
  static readonly GA_MEASUREMENT_ID =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;
  static readonly APP_URL = process.env.NEXT_PUBLIC_APP_URL!;
  static readonly BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;
  static readonly APP_NAME = "nettruyen";
  static readonly APP_VERSION = "1.0.0";
  static readonly Mangadex = new MangaDexConstants();
  static readonly Nettruyen = new NettruyenConstants();
  static readonly Routes = {
    nettruyen: {
      index: "/",
      manga: (id: string) => `/manga/${id}`,
      chapter: (id: string) => `/chapter/${id}`,
      search: `/advanced-search`,
      history: "/history",
      scanlationGroup: (id: string) => `/translation-team/${id}`,
      following: "/following",
    },
    scanlationGroup: (id: string) => `/translation-team/${id}`,
    report: ``,
    login: "/login",
    loginWithRedirect: (redirectUrl: string) =>
      `/login?redirectUrl=${encodeURIComponent(redirectUrl)}`,
    signup: "/register",
    verifyEmail: "/verify",
  };
}
