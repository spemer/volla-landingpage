// TosEntries
import TosEntries from "@/statics/data/tos.json";

const tosRoutes = Object.keys(TosEntries).map(section => {
  const children = TosEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () =>
      import(
        /* webpackChunkName: 'router-TosDetails-markdown' */ `@/markdowns/tos/${section}/${child.id}.md`
      )
  }));
  return {
    path: "/tos",
    name: section,
    component: () =>
      import(
        /* webpackChunkName: 'router-TosDetails' */ "@/pages/tos/TosDetails"
      ),
    children
  };
});

export default tosRoutes;
