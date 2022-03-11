import React from 'react'
import { Form, Input } from 'antd';

const InputEmail = () => {
  return (
   <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
    </Form.Item>
  )
}

export default InputEmail
