import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env.MICRO_APP_PORT': process.env.MICRO_APP_PORT,
    'process.env.HOST': process.env.HOST,
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  npmClient: 'pnpm',
  qiankun: {
    master: {},
  },
});
