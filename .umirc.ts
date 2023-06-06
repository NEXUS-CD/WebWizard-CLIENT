/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-04 17:24:00
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-05 23:44:07
 * @FilePath: /WebWizard/umi/.umirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
    title: '网络巫师',
  },
  npmClient: 'pnpm',
  qiankun: {
    master: {},
  },
  routes: [
    {
      path: '/',
      component: 'home',
      wrappers: [
        '@/layouts/NavLayout', // 引入导航
      ],
    },
  ],
});
