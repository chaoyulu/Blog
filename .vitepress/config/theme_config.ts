import { DefaultTheme } from "vitepress";
import { androidSystemSidebar } from "./sidebar/android_system_sidebar";
import { androidNoteSidebar } from "./sidebar/android_note_sidebar";
import { localSearchOptions } from "./search/local_search";

const ksystem = "知识体系";
const note = "开发小记";
export const themeConfig: DefaultTheme.Config = {
  lastUpdated: {
    text: "最近更新时间：",
    formatOptions: {
      dateStyle: "full",
      timeStyle: "medium",
    },
  },

  darkModeSwitchTitle: "切换到深色模式",
  lightModeSwitchTitle: "切换到浅色模式",
  externalLinkIcon: true, // 外链右侧是否显示小箭头图标

  logo: "/logo.svg", // 存放到public目录下
  outline: {
    level: "deep",
    label: "目录",
  },

  sidebarMenuLabel: "文章",
  returnToTopLabel: "回到顶部",
  lastUpdatedText: "最近更新时间",
  docFooter: {
    prev: "上一篇",
    next: "下一篇",
  },
  nav: [
    {
      text: "Android",
      activeMatch: "/android/*",
      items: [
        {
          text: ksystem,
          activeMatch: "/android/system/*",
          link: "/android/system/basic/Activity基本认识",
        },
        {
          text: note,
          activeMatch: "/android/note/*",
          link: "/android/note/BuildConfigField不生效",
        },
      ],
    },
    // {
    //   text: "Jetpack Compose",
    //   link: "/compose/",
    // },
    // {
    //   text: "Flutter",
    //   activeMatch: "/flutter/*",
    //   link: "/flutter/",
    // },
    // {
    //   text: "HarmonyOS",
    //   activeMatch: "/harmonyos/*",
    //   link: "/harmonyos/",
    // },
  ],

  sidebar: {
    "/android/system/": androidSystemSidebar(),
    "/android/note/": androidNoteSidebar(),
  },

  search: {
    provider: "local",
    options: localSearchOptions,
  },
};
