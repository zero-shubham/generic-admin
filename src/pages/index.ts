import { lazy } from "react";

const Home = lazy(() => import("pages/Home"));
const Advertisers = lazy(() => import("pages/Advertisers"));
const Banners = lazy(() => import("pages/Banners"));
const Login = lazy(() => import("pages/Login"));

export {
  Home as HomePage,
  Advertisers as AdvertisersPage,
  Banners as BannersPage,
  Login as LoginPage,
};
