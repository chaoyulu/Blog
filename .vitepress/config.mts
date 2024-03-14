import { defineConfig } from "vitepress";
import { themeConfig } from "./config/theme_config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "朝雨露",
  description: "cyl's blogs",
  // logo设置图标
  themeConfig: themeConfig,
  // outDir: "../public",
  // base: "/",
});
