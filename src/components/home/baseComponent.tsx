/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-07 22:28:27
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-08 23:44:04
 * @FilePath: /WebWizard/umi/src/components/home/hocBaseComponent.tsx
 * @Description: 封装首页title插槽
 */
import { Col, Row } from 'antd';
import styles from './base.less';

interface IBaseTitle {
  id: string;
  intro: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}
// 使用插槽
export const BaseTitle = (props: IBaseTitle) => {
  const { id, intro, title, description } = props;
  return (
    <main className={styles.baseTitleBody} id={id}>
      <section className={styles['baseTitleBody-contentBox']}>
        <Row
          className={styles['baseTitleBody-contentBox-descriptionBox']}
          justify={'center'}
        >
          <Col
            span={24}
            className={styles['baseTitleBody-contentBox-descriptionBox-text1']}
          >
            -{intro}-
          </Col>
          <Col
            span={24}
            className={styles['baseTitleBody-contentBox-descriptionBox-text2']}
          >
            {title}
          </Col>
          <Col
            className={styles['baseTitleBody-contentBox-descriptionBox-text3']}
          >
            {description}
          </Col>
        </Row>
        <Row className={styles['baseTitleBody-contentBox-childrenBox']}>
          {props.children}
        </Row>
      </section>
    </main>
  );
};
