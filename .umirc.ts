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
      path: '/mica-app/*',
      microApp: 'mica-app',
    },
  ],
  npmClient: 'pnpm',
  qiankun: {
    master: {
      apps: [
        {
          name: 'mica-app',
          entry: '//localhost:8888',
          // container: "#app",
          // activeRule: "/vue",
        },
      ],
    },
  },
});

