import loadable from "@loadable/component";

export default [
  {
    path: "/cv/",
    component: loadable(() => import("./pages/Cv"))
  },
  {
    path: "/portfolio/",
    component: loadable(() => import("./pages/Portfolio"))
  },
  {
    path: "/",
    component: loadable(() => import("./pages/Root"))
  },
  {
    component: loadable(() => import("./pages/NotFound"))
  }
];
