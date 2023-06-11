/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-11 13:33:36
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-11 15:05:56
 * @FilePath: /WebWizard/umi/src/pages/home/components/footerContact/index.tsx
 * @Description: 联系方式
 */
import icon from '@/assets/logo-fff.png';
import { EnvironmentFilled, QqCircleFilled } from '@ant-design/icons';
import { Col, Row } from 'antd';
import styles from './index.less';
export default () => {
  return (
    <main className={styles.footerContactBody}>
      <Row
        className={styles['footerContactBody-head']}
        justify={'space-between'}
      >
        <Col span={5} className={styles['footerContactBody-head-introduce']}>
          <div className={styles['footerContactBody-head-introduce-icon']}>
            <img src={icon} alt="" />
          </div>
          <p className={styles['footerContactBody-hover']}>
            非常欢迎你加入我们一起卷，在你的闲余时间，和一群志同道合的朋友，
            去做一件有意义的事情，并可以看到你的付出。
          </p>
        </Col>
        <Col span={5} className={styles['footerContactBody-head-feature']}>
          <h2
            className={`${styles['footerContactBody-head-feature-title']} ${styles['footerContactBody-hover']}`}
          >
            学习建设
          </h2>
          <div className={styles['footerContactBody-head-feature-content']}>
            <p className={styles['footerContactBody-hover']}>立FLAG</p>
            <p className={styles['footerContactBody-hover']}>学习资料</p>
            <p className={styles['footerContactBody-hover']}>
              疑惑、建议和意见
            </p>
          </div>
        </Col>

        <Col span={5} className={styles['footerContactBody-head-technology']}>
          <h2
            className={`${styles['footerContactBody-head-technology-title']} ${styles['footerContactBody-hover']}`}
          >
            开发
          </h2>
          <div className={styles['footerContactBody-head-technology-content']}>
            <p className={styles['footerContactBody-hover']}>React</p>
            <p className={styles['footerContactBody-hover']}>Vue</p>
            <p className={styles['footerContactBody-hover']}>Node,js</p>
            <p className={styles['footerContactBody-hover']}>golang</p>
            <p className={styles['footerContactBody-hover']}>docker</p>
            <p className={styles['footerContactBody-hover']}>typescript</p>
          </div>
        </Col>
        <Col span={5} className={styles['footerContactBody-head-connection']}>
          <h2
            className={`${styles['footerContactBody-head-connection-title']} ${styles['footerContactBody-hover']}`}
          >
            联系我们
          </h2>
          <div className={styles['footerContactBody-head-connection-content']}>
            <p>
              <span
                className={
                  styles['footerContactBody-head-connection-content-icon']
                }
              >
                <EnvironmentFilled />
              </span>
              <span className={styles['footerContactBody-hover']}>
                四川省成都市武侯区
              </span>
            </p>
            <p>
              <span
                className={
                  styles['footerContactBody-head-connection-content-icon']
                }
              >
                <QqCircleFilled />
              </span>
              <span className={styles['footerContactBody-hover']}>
                +q群:700469654
              </span>
            </p>
          </div>
        </Col>
      </Row>
      <div className={styles['footerContactBody-footer']}></div>
    </main>
  );
};
