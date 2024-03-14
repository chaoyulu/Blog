export function androidSystemSidebar() {
  return [
    {
      text: "基础知识",
      collapsed: true,
      items: [
        {
          text: "Activity基本认识",
          link: "/android/system/basic/Activity基本认识",
        },
        {
          text: "Service基本认识",
          link: "/android/system/basic/Service基本认识",
        },
        { text: "IntentService", link: "/android/system/basic/IntentService" },
        { text: "HandlerThread", link: "/android/system/basic/HandlerThread" },
        { text: "Context", link: "/android/system/basic/Context基本认识" },
      ],
    },
    {
      text: "View & 动画",
      collapsed: true,
      items: [
        {
          text: "旋转的指针",
          link: "/android/system/view/旋转的指针",
        },
      ],
    },
  ];
}
