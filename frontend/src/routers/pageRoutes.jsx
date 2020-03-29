// Layout Types
import { PublicLayout } from "./../layouts";

import {permissionConstants} from "../constants";

import HomePage from './../screens/HomePage';
import LinksPage from './../screens/LinksPage';
import ContactsPage from './../screens/ContactsPage';
import NewsPage from './../screens/NewsPage';
export default [
  {
    path: "/",
    plublic: true,
    exact: true,
    layout: PublicLayout,
    component: HomePage,
    allowRoles: permissionConstants.normalPermission,
  },
  {
    path: "/news",
    plublic: true,
    exact: true,
    layout: PublicLayout,
    component: NewsPage,
    allowRoles: permissionConstants.normalPermission,
  },
  {
    path: "/links",
    plublic: true,
    exact: true,
    layout: PublicLayout,
    component: LinksPage,
    allowRoles: permissionConstants.normalPermission,
  },
  {
    path: "/contacts",
    plublic: true,
    exact: true,
    layout: PublicLayout,
    component: ContactsPage,
    allowRoles: permissionConstants.normalPermission,
  },
];
