/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-04 17:37:52
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-05 23:42:44
 * @FilePath: /xm/WebWizard/umi/src/pages/home/index.tsx
 * @Description: 首页
 */
import index_img from '@/assets/images/home/index.png';
import { Col, Row } from 'antd';
import styles from './index.less';
export default () => {
  return (
    <main className={styles.indexBody} id="index">
      <Row>
        <Col span={13} className={styles['indexBody-leftBox']}>
          <section className={styles['indexBody-leftBox-greeting']}>
            <p>-欢迎来到网络巫师</p>
            <h2>这是富有创造力、团结的组织。你可以在这找到属于 IT 的归属感.</h2>
            <p>网站建设技术栈: umi4、vue3、typeScript、node、go、docker</p>
            <p>网站技术扩展项: vscode插件开发、代码生成工具等</p>
          </section>
          <section className={styles['indexBody-leftBox-meaning']}>
            <h2>我们建立此组织的目的</h2>
            <p>1.建立有深度和广度的学习网站</p>
            <p>2.力求打造国内拥有浓烈学习氛围的网站。</p>
            <p>
              3.督促没有自制力的，但是又很想学习的人，进行定制目标，定向学习
            </p>
            <p>4.希望大家能结交到一群志同道合的朋友</p>
          </section>
          <section className={styles['indexBody-leftBox-toolsBox']}>
            <h2>代码自动生成工具集合</h2>
            <dl>
              <dt>
                <a href="">1.自动生成前端请求文件</a>
              </dt>
              <dd>根据后端提供的swagger，自动生成request+response ts类型</dd>
              <dt>
                <a href="">2.node-cli工具</a>
              </dt>
              <dd>
                使用commder+inquirer书写的cli工具，一键生成node
                api中，router-model中的所有基础模版文件。
              </dd>
            </dl>
          </section>
        </Col>
        <Col className={styles['indexBody-rightBox']} span={10}>
          <img src={index_img} alt="" />
        </Col>
      </Row>
    </main>
  );
};
