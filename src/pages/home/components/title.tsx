import { green } from '@ant-design/colors';
import { Row, Typography } from 'antd';
import { CSSProperties, FC, Fragment, PropsWithChildren } from 'react';

const { Text, Title: ATitle } = Typography;

const hintStyle = {
  color: green.primary,
  position: 'absolute',
} satisfies CSSProperties;

interface Props {
  hint?: string;
}
export const Title: FC<PropsWithChildren<Props>> = ({ hint, children }) => {
  return (
    <Fragment>
      <Row>
        <Text style={hintStyle}>
          {hint && (
            <>
              <span>-</span>
              <span>{hint}</span>
              <span>-</span>
            </>
          )}
        </Text>
        <ATitle level={3}>{children}</ATitle>
      </Row>
    </Fragment>
  );
};
