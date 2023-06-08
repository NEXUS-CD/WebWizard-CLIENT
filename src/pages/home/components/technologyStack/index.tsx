/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-06 00:02:40
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-06 23:52:12
 * @FilePath: /WebWizard/umi/src/pages/home/components/technologyStack/index.tsx
 * @Description: 技术栈页说明
 */
import docker_img from '@/assets/images/home/docker.png';
import go_img from '@/assets/images/home/go.png';
import node_img from '@/assets/images/home/node.png';
import react_img from '@/assets/images/home/react.png';
import ts_img from '@/assets/images/home/ts.png';
import vue_img from '@/assets/images/home/vue.png';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import styles from './index.less';
const TECHNOLOGY = [
  {
    name: 'React',
    description:
      '通过一个Virtual DOM去更新真实的DOM，由这个Virtual DOM管理真实DOM的更新。',
    img: react_img,
  },
  {
    name: 'Vue',
    description:
      'vue是双向数据绑定，通过框架提供的指令，前端只需要关注业务逻辑，不再关心dom如何渲染。',
    img: vue_img,
  },
  {
    name: 'typeScript',
    description:
      'TypeScript是JavaScript的超集，具有可选的类型并可以编译为纯JavaScript。 从技术上讲TypeScript就是具有静态类型的 JavaScript 。',
    img: ts_img,
  },
  {
    name: 'Node.js',
    description:
      'nodejs是JavaScript语言的服务器运行环境，可以脱离浏览器直接运行',
    img: node_img,
  },
  {
    name: 'GoLang',
    description:
      'go语言使用足够简单的语法，消除各种缓慢和笨重、改进各种低效和扩展性。',
    img: go_img,
  },
  {
    name: 'Docker',
    description:
      'docker 是用 Go 语言实现的开源项目，可以让我们方便的创建和使用容器，docker 将程序以及程序所有的依赖都打包到 docker 容器。',
    img: docker_img,
  },
];

export default () => {
  const imgs = TECHNOLOGY.map((item, index) => (
    <Col key={index}>
      <img src={item.img} alt="" />
    </Col>
  ));
  const technologyView = TECHNOLOGY.map((item, index) => (
    <Col
      className={styles['technologyStackBody-contentBox-technologyBox-content']}
      key={index}
    >
      <div>
        <img src={item.img} alt="" />
      </div>
      <div
        className={
          styles['technologyStackBody-contentBox-technologyBox-content-text']
        }
      >
        <span>{item.name}</span>
        <p>{item.description}</p>
        <span>
          学习更多 <ArrowRightOutlined />
        </span>
      </div>
    </Col>
  ));
  return (
    <main className={styles.technologyStackBody} id="technologyStack">
      <Row
        className={styles['technologyStackBody-iconBox']}
        justify={'space-between'}
        align={'middle'}
      >
        {imgs}
      </Row>
      <section className={styles['technologyStackBody-contentBox']}>
        <Row
          className={styles['technologyStackBody-contentBox-descriptionBox']}
          justify={'center'}
        >
          <Col
            span={24}
            className={
              styles['technologyStackBody-contentBox-descriptionBox-text1']
            }
          >
            -磨刀不误砍柴工-
          </Col>
          <Col
            span={24}
            className={
              styles['technologyStackBody-contentBox-descriptionBox-text2']
            }
          >
            技术栈
          </Col>
          <Col
            className={
              styles['technologyStackBody-contentBox-descriptionBox-text3']
            }
          >
            前端采用微前端，将react作为主应用，集成vue到微前端中，通过一个nodejs编写的中间层，
            去访问底层的go后端和node后端，全项目贯穿使用ts.
          </Col>
        </Row>
        <Row className={styles['technologyStackBody-contentBox-technologyBox']}>
          {technologyView}
        </Row>
      </section>
    </main>
  );
};
