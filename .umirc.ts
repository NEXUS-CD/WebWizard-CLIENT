import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/micro-app/*',
      microApp: 'micro-app',
    },
  ],
  npmClient: 'pnpm',
  qiankun: {
    master: {
      apps: [
        {
          name: 'micro-app',
          entry: '//localhost:8888',
          // container: "#app",
          // activeRule: "/vue",
        },
      ],
    },
  },
});
