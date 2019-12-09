// NoticeEntries
import NoticesEntries from "@/statics/data/notices.json";

const noticesRoutes = Object.keys(NoticesEntries).map(section => {
  const children = NoticesEntries[section].map(child => ({
    path: `notices/${child.ymd}/${child.id}`,
    name: `${child.id}`,
    component: () =>
      import(
        /* webpackChunkName: 'router-Details-markdown' */ `@/markdowns/notices/${child.id}.md`
      )
  }));
  return {
    path: `/`,
    name: `noticeDetails`,
    component: () =>
      import(/* webpackChunkName: 'router-Details' */ "@/pages/boards/Details"),
    children
  };
});

export default noticesRoutes;
