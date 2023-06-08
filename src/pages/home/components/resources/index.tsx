/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-04 17:37:52
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-08 23:42:09
 * @FilePath: /xm/WebWizard/umi/src/pages/home/index.tsx
 * @Description: 资料页
 */
import { BaseTitle } from '@/components/home/baseComponent';
import { Row } from 'antd';
import Col from 'antd/lib/grid/col';
import styles from './index.less';

interface TResourcesContent {
  data: {
    title: string;
    description: string;
  }[];
}

const ResourcesContent: React.FC<TResourcesContent> = (props) => {
  const { data } = props;
  return (
    <Row
      justify={'space-between'}
      className={styles['resourcesBody-resourcesContent']}
    >
      {data.map((item, index) => (
        <Col
          key={index}
          className={styles['resourcesBody-resourcesContent-item']}
        >
          <div className={styles['resourcesBody-resourcesContent-item-id']}>
            0{index + 1}
          </div>
          <h3>{item.title}</h3>
          <span>{item.description}</span>
        </Col>
      ))}
    </Row>
  );
};
const Mock = [
  {
    title: '如何学习React',
    description:
      '先了解React的基本工作流程，再了解主要API，接着就是组件传值。之后就是进阶...。',
  },
  {
    title: '如何编写一个自己的node cli工具',
    description:
      '先调研node cli相关的工具。比如commder、美化命令行输出、交互等。',
  },
  {
    title: '如何开始写TS类型体操',
    description: '先学会TS基本语法、交叉类型、联合类型、keyof、typeof等',
  },
  {
    title: '如何部署前端',
    description: '从pnm build开始...然后了解一点nginx+docker。',
  },
  {
    title: '如何书写后端API',
    description:
      '先调研node cli相关的工具。比如commder、美化命令行输出、交互等。',
  },
  { title: '如何将代码写的更好', description: '先了解设计模式....。' },
  {
    title: '如何有逻辑和条理的去分析一个问题',
    description:
      '先调研node cli相关的工具。比如commder、美化命令行输出、交互等。',
  },
  {
    title: '如何有逻辑和条理的去分析一个问题',
    description:
      '先调研node cli相关的工具。比如commder、美化命令行输出、交互等。',
  },
  {
    title: '如何进行高质量的生活，保持学习，且不失精力',
    description:
      '先调研node cli相关的工具。比如commder、美化命令行输出、交互等。',
  },
];
export default () => {
  return (
    <BaseTitle
      id="resources"
      title="进入学习状态"
      intro={'进入学习资料页面'}
      description={
        '这里的资料都是大家智慧的结晶，里面有大家踩过的坑，帮助新人少走弯路， 里面有精华般的总结，省去查阅资料的繁琐'
      }
    >
      <section className={styles.resourcesBody}>
        <ResourcesContent data={Mock} />
      </section>
    </BaseTitle>
  );
};
