import React from 'react';
import { Form } from 'antd';

import Credentials from './credentials';

export default function FormLogin(props:any) {
  return (
    <Form name="basic" labelCol={{ span: 8, }} wrapperCol={{ span: 16, }} initialValues={{ remember: true, }}
      onFinish={props.onFinish}
      onFinishFailed={props.onFinishFailed}
      autoComplete="off"
    >
      {props.children}
    </Form>
  );
}
