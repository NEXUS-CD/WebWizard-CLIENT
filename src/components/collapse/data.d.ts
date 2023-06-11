interface IHeaderAttribute {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type IHeaderComponent = Pick<IProps, 'icon'> & {
  item: IProps['items'][number];
  status: boolean;
};
interface IProps {
  icon?: {
    expandIconPosition?: 'start' | 'end';
    expandIcon?: [JSX.Element, JSX.Element];
  };
  onChange?: (kyes: Array<string | number>) => void;
  items: {
    header?: JSX.Element | string; //覆盖label+icon
    key: string;
    content: JSX.Element | string;
    label: JSX.Element | string;
    // 激活状态下会设置此className
    classActivate?: string;
  }[];
  mainClass?: string;
}
type TIcon = Pick<IProps, 'icon'>['icon'] & {
  status: boolean;
};
