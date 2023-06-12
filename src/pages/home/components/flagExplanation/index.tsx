/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-04 17:37:52
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-05 21:52:53
 * @FilePath: /xm/WebWizard/umi/src/pages/home/index.tsx
 * @Description: 首页
 */
import docker_img from '@/assets/images/home/docker.png';
import go_img from '@/assets/images/home/go.png';
import node_img from '@/assets/images/home/node.png';
import react_img from '@/assets/images/home/react.png';
import ts_img from '@/assets/images/home/ts.png';
import vue_img from '@/assets/images/home/vue.png';
import { cyan, green } from '@ant-design/colors';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Row, Space, Typography } from 'antd';
import { CSSProperties, FC, PropsWithChildren } from 'react';
import { Title } from '../title';
import styles from './index.less';

const { Text, Paragraph } = Typography;
interface TileProps {
  imgUrl: string;
}
const Tile: FC<PropsWithChildren<TileProps>> = ({ imgUrl, children }) => {
  return (
    <div className={styles.flagTile}>
      <div className={styles.image}>
        <img src={imgUrl} />
      </div>
      <div className={styles.tileContent}>{children}</div>
    </div>
  );
};
const FLAGS = [
  {
    user: 'React',
    description:
      '通过一个Virtual DOM去更新真实的DOM，由这个Virtual DOM管理真实DOM的更新。',
    img: react_img,
  },
  {
    user: 'Vue',
    description:
      'vue是双向数据绑定，通过框架提供的指令，前端只需要关注业务逻辑，不再关心dom如何渲染。',
    img: vue_img,
  },
  {
    user: 'typeScript',
    description:
      'TypeScript是JavaScript的超集，具有可选的类型并可以编译为纯JavaScript。 从技术上讲TypeScript就是具有静态类型的 JavaScript 。',
    img: ts_img,
  },
  {
    user: 'Node.js',
    description:
      'nodejs是JavaScript语言的服务器运行环境，可以脱离浏览器直接运行',
    img: node_img,
  },
  {
    user: 'GoLang',
    description:
      'go语言使用足够简单的语法，消除各种缓慢和笨重、改进各种低效和扩展性。',
    img: go_img,
  },
  {
    user: 'Docker',
    description:
      'docker 是用 Go 语言实现的开源项目，可以让我们方便的创建和使用容器，docker 将程序以及程序所有的依赖都打包到 docker 容器。',
    img: docker_img,
  },
];
const authorTextStyle = {
  color: green.primary,
  fontSize: 16,
} satisfies CSSProperties;
const containerStyle = {
  backgroundColor: cyan[0],
  padding: '40rem 2rem',
} satisfies CSSProperties;
const titleTextStyle = { fontSize: 25, lineHeight: 1 } satisfies CSSProperties;
export default () => {
  return (
    <div style={containerStyle}>
      <Title hint="不完成 誓不罢休">立FLAG</Title>
      <Row justify="center">
        <Space size="large">
          {FLAGS.map(({ user, description, img }, index) => (
            <Tile imgUrl={img} key={index}>
              <Text style={authorTextStyle}>{user}</Text>
              <Paragraph style={titleTextStyle} ellipsis={{ rows: 4 }}>
                {description}
              </Paragraph>
              <Text className={styles.linkTextStyle}>
                详细flag
                <ArrowRightOutlined />
              </Text>
            </Tile>
          ))}
        </Space>
      </Row>
    </div>
  );
};
