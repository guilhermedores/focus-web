import React from 'react';
import { Form, Button } from 'antd'

export default function submitButton() {
  return (
    <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
    </Form.Item>
  );
}
