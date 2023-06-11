/*
 * @Author: zhangwc zhangwc@knownsec.com
 * @Date: 2023-06-10 15:27:39
 * @LastEditors: zhangwc zhangwc@knownsec.com
 * @LastEditTime: 2023-06-11 13:50:18
 * @FilePath: /WebWizard/umi/src/components/collapse/index.tsx
 * @Description: 基础折叠框，无样式
 */
import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import styles from './base.less';
const Icon = (props: TIcon) => {
  const { expandIcon, status } = props;
  const getIconByStatus = (
    jsxArr: Exclude<TIcon['expandIcon'], undefined>,
    status: TIcon['status'],
  ) => {
    return jsxArr[status ? 0 : 1];
  };
  if (expandIcon) return getIconByStatus(expandIcon, status);
  return getIconByStatus(
    [<DownOutlined key="0" />, <RightOutlined key="1" />],
    status,
  );
};
const HeaderComponent = (props: IHeaderComponent) => {
  const {
    icon,
    item: { header, label },
    status,
  } = props;
  if (header) return header;
  return (
    <>
      <span>{label}</span>
      <div
        className={`${styles['item-header-iconBox']} ${
          icon?.expandIconPosition === 'start'
            ? styles['item-header-iconPosition']
            : ''
        }`}
      >
        <Icon status={status} {...icon} />
      </div>
    </>
  );
};
export default (props: IProps) => {
  const { icon, onChange, items, mainClass } = props;
  const [key, setStatus] = useState<Array<string | number>>([]);
  const keyRef = useRef<Array<number | string>>([]);
  const headerBaseClick = (item: IProps['items'][number]) => {
    setStatus((v) => {
      let data;
      if (v.some((key) => key === item.key)) {
        v.filter((key) => key !== item.key);
        keyRef.current = data || [];
        return v.filter((key) => key !== item.key);
      }
      data = [...v, item.key];
      keyRef.current = data;
      return data;
    });
  };
  const headerAttribute = (() => {
    let attribute: IHeaderAttribute = {};
    attribute.onClick = () => {
      // 原本click事件
      if (onChange) onChange(keyRef.current || []);
    };
    return attribute;
  })();
  return (
    <main className={mainClass}>
      {items.map((item) => {
        const status = key.some((keys) => keys === item.key);
        return (
          <div
            className={`${styles['item']} ${
              item.classActivate && status ? item.classActivate : ''
            }`}
            key={item.key}
          >
            <div
              className={styles['item-header']}
              onClick={(e) => {
                headerBaseClick(item);
                // 当外部传入了onchang，就调用
                if (headerAttribute.onClick) headerAttribute.onClick(e);
              }}
            >
              <HeaderComponent item={item} icon={icon || {}} status={status} />
            </div>
            <div
              className={`
                        ${styles['item-content']}
                        ${status ? styles['item-showContent'] : ''}
                        `}
            >
              <div className={`${styles['item-content-box']}`}>
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
};
