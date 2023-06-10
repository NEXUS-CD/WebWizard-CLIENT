/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-04 17:37:52
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-10 13:53:04
 * @FilePath: /xm/WebWizard/umi/src/pages/home/index.tsx
 * @Description: 首页
 */
import wechatIMG1 from '@/assets/images/home/WechatIMG1.jpeg';
import wechatIMG2 from '@/assets/images/home/WechatIMG2.jpeg';
import wechatIMG3 from '@/assets/images/home/WechatIMG3.jpg';
import wechatIMG4 from '@/assets/images/home/WechatIMG4.jpeg';
import wechatIMG5 from '@/assets/images/home/WechatIMG5.jpeg';
import wechatIMG6 from '@/assets/images/home/WechatIMG6.jpeg';
import wechatIMG7 from '@/assets/images/home/WechatIMG7.jpeg';
import { BaseTitle } from '@/components/home/baseComponent';
import { LikeTwoTone, StarTwoTone } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { useState } from 'react';
import styles from './index.less';

interface IExploitInfo {
  imgSrc: string;
  name: string;
}
const IconColorStyle = {
  backgroundColor: '#009933',
  twoToneColor: '#fff',
};
const icons = [
  {
    icon: LikeTwoTone,
  },
  {
    icon: StarTwoTone,
  },
];
const IconBaseStyle = { fontSize: '25rem' };
const ExploitInfo: React.FC<IExploitInfo> = (props) => {
  const [iconStatus, setIconStatus] = useState<null | number>();

  const iconC = icons.map((item, index) => (
    <Col
      className={
        styles['aboutUsBody-exploitInfo-imgBox-overlay-iconList-iconBox']
      }
      onMouseEnter={() => setIconStatus(index)}
      onMouseLeave={() => setIconStatus(null)}
      style={
        iconStatus === index
          ? { background: IconColorStyle.backgroundColor }
          : {}
      }
      key={index}
    >
      <item.icon
        twoToneColor={
          iconStatus === index
            ? IconColorStyle.twoToneColor
            : 'rgb(39, 174, 96)'
        }
        style={
          iconStatus === index
            ? { ...IconBaseStyle, background: IconColorStyle.backgroundColor }
            : IconBaseStyle
        }
      />
    </Col>
  ));

  return (
    <div className={styles['aboutUsBody-exploitInfo']}>
      <div className={styles['aboutUsBody-exploitInfo-imgBox']}>
        <div className={styles['aboutUsBody-exploitInfo-imgBox-overlay']}>
          <Row
            className={
              styles['aboutUsBody-exploitInfo-imgBox-overlay-iconList']
            }
          >
            {iconC}
          </Row>
        </div>
        <img src={props.imgSrc} alt="" />
      </div>
      <div className={styles['aboutUsBody-exploitInfo-title']}>
        {props.name}
      </div>
    </div>
  );
};
const ExploitInfoData = [
  { name: '九千七', imgSrc: wechatIMG1 },
  { name: '满心欢喜', imgSrc: wechatIMG2 },
  { name: '一人一', imgSrc: wechatIMG3 },
  { name: '猫。', imgSrc: wechatIMG4 },
  { name: 'ABCD', imgSrc: wechatIMG5 },
  { name: '苏河', imgSrc: wechatIMG6 },
  { name: 'L-Ryland', imgSrc: wechatIMG7 },
];
export default () => {
  return (
    <BaseTitle
      id="aboutUs"
      intro={'卷卷团队'}
      title={'学无止境 努力奋进'}
      description={'如果你对开发我们这个产品有兴趣，非常欢迎你的加入！'}
    >
      <div className={styles['aboutUsBody']}>
        {ExploitInfoData.map((item, index) => (
          <ExploitInfo imgSrc={item.imgSrc} name={item.name} key={index} />
        ))}
      </div>
    </BaseTitle>
  );
};
