import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), svgr()],
    // resolve: {
    //   alias: {
    //     // keep same alias as jsconfig.json if you have one:
    //     // e.g. import X from 'src/components/X' -> resolve to ./src
    //     '@/': `${__dirname}/src/`
    //   }
    // },
    server: {
      port: 3000,
    },
  };
});
