import loadable from "@loadable/component";

export default [
  {
    path: "/cv/",
    component: loadable(() => import(/* webpackPrefetch: true */ "./pages/Cv"))
  },
  {
    path: "/portfolio/",
    component: loadable(() =>
      import(/* webpackPrefetch: true */ "./pages/Portfolio")
    )
  },
  {
    path: "/",
    component: loadable(() =>
      import(/* webpackPrefetch: true */ "./pages/Root")
    )
  },
  {
    component: loadable(() =>
      import(/* webpackPrefetch: true */ "./pages/NotFound")
    )
  }
];
