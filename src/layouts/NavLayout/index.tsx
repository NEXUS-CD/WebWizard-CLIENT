/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-04 18:14:21
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-05 23:55:14
 * @FilePath: /xm/WebWizard/umi/src/layouts/NavLayout/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import logo from '@/assets/images/logo-green.png';
import { DownOutlined } from '@ant-design/icons';
import { useDebounceFn } from 'ahooks';
import { Col, Dropdown, Row, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'umi';
import { Nav } from './constants';
import { TNav } from './data';
import styles from './index.less';

const NavComponent = () => {
  const [scrollStatus, setscrollStatus] = useState(false);
  const isScrollStart = useRef(true);
  //  结合ahook->useDebounceFn防抖函数实现滚动条开始和结束各执行函数
  const { startFlush, endRun } = (() => ({
    // eslint-disable-next-line react-hooks/rules-of-hooks
    startFlush: useDebounceFn(
      () => {
        // 保证只在初次滑动时设置状态
        if (isScrollStart.current) setscrollStatus(true);
        isScrollStart.current = false;
      },
      { wait: 500, leading: true, trailing: false },
    ).run,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    endRun: useDebounceFn(
      () => {
        // 当滑动至顶部时，重置状态
        if (document.documentElement.scrollTop === 0) {
          isScrollStart.current = true;
          setscrollStatus(false);
        }

        console.log(document.documentElement.scrollTop, 'end');
      },
      { wait: 100, trailing: true },
    ).run,
  }))();
  const NavItem = () => {
    const isChild = (item: TNav[number]) => {
      const { child, name } = item;
      if (child) {
        return (
          <Dropdown
            menu={{
              items: child.map((item, index) => ({
                key: index,
                label: <a href={`#${item.target}`}>{item.name}</a>,
              })),
            }}
          >
            <Space>
              {item.name}
              <DownOutlined />
            </Space>
          </Dropdown>
        );
      }
      return name;
    };
    return (
      <Row justify={'center'}>
        {Nav.map((item, index) => (
          <Col
            key={index}
            span={3}
            className={styles['navBody-navBox-navList-item']}
          >
            {isChild(item)}
          </Col>
        ))}
      </Row>
    );
  };
  useEffect(() => {
    window.addEventListener('scroll', startFlush);
    window.addEventListener('scroll', endRun);
    return () => {
      window.removeEventListener('scroll', startFlush);
      window.removeEventListener('scroll', endRun);
    };
  }, []);
  return (
    <Row className={styles.navBody}>
      <Col className={styles['navBody-navBox']} span={24}>
        <Row justify={'space-between'} align={'middle'}>
          <Col className={styles['navBody-navBox-imgbox']} span={3}>
            <img src={logo} alt="logo" />
          </Col>
          <Col span={18} className={styles['navBody-navBox-navList']}>
            <NavItem />
          </Col>
          <Col
            span={2}
            className={styles['navBody-navBox-loginAndRegistrationEntry']}
          >
            <div>
              <span>登录</span>|<span>注册</span>
            </div>
          </Col>
        </Row>
      </Col>
      <Col
        className={`${styles['navBody-backGround']} ${
          scrollStatus
            ? styles['navBody-showBackGround']
            : styles['navBody-hideBackGround']
        }`}
      ></Col>
    </Row>
  );
};
export default () => {
  return (
    <>
      <NavComponent />
      {/* <strong style={{ height: "3000px", background: "#F2F3F5" }}></strong> */}
      <Outlet />
    </>
  );
};
