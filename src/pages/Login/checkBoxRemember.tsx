import React from 'react';
import { Form, Checkbox } from 'antd';

export default function CheckBoxRemember() {
  return (
    <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
    </Form.Item>
  );
}
