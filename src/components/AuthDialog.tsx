import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Upload } from 'antd';
import { FC } from 'react';

interface Props {
  open: boolean;
  authType: 'login' | 'register';
  onClose: () => void;
}
export const AuthDialog: FC<Props> = ({ open, authType, onClose }) => {
  const title = authType === 'login' ? '登录' : '注册';
  return (
    <Modal open={open} footer={null} title={title} onCancel={onClose}>
      <Form labelCol={{ span: 6 }}>
        {authType === 'register' && (
          <Form.Item label="上传头像" name="avatar" valuePropName="fileList">
            <Upload listType="picture-circle" showUploadList={false}>
              <PlusOutlined />
            </Upload>
          </Form.Item>
        )}
        <Form.Item label="用户名" name="username" required>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="密码" name="password" required>
          <Input.Password />
        </Form.Item>
        <Form.Item label="验证码" name="verificationCode" required>
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {title}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
