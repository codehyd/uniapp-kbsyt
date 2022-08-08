import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      dts: "src/auto-imports.d.ts", // 可以自定义文件生成的位置，默认是根目录下
      imports: ["vue"],
    }),
  ],
});
