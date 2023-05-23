/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-05-19 23:03:04
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-05-23 21:13:45
 * @FilePath: /WebWizard/umi/src/app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// 运行时配置
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return { name: '@umijs/max' };
}
// (window as any).__POWERED_BY_QIANKUN__ = true;
export const layout = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
      // 不展示顶栏
      headerRender: false,
      // 不展示页脚
      footerRender: false,
      // 不展示菜单
      menuRender: false,
      // 不展示菜单顶栏
      menuHeaderRender: false,
      // 权限配置，需要与 plugin-access 插件配合使用
      access: 'canRead',
      // 隐藏子菜单
      hideChildrenInMenu: true,
      // 隐藏自己和子菜单
      hideInMenu: true,
      // 在面包屑中隐藏
      hideInBreadcrumb: true,
      // 子项往上提，仍旧展示,
      flatMenu: true,
      routes: [{
        // component: 'IndexPage',
        name: '欢迎', // 兼容此写法
        // icon: 'testicon',
        // // 更多功能查看
        // // https://beta-pro.ant.design/docs/advanced-menu
        // // ---
        // // 新页面打开
        // target: '_blank',
        // // 不展示顶栏
        headerRender: false,
        // // 不展示页脚
        footerRender: false,
        // // 不展示菜单
        menuRender: false,
        // // 不展示菜单顶栏
        menuHeaderRender: false,
      },]
      
  };
};