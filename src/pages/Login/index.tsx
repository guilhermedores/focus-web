import InputPassword from './inputPassword';
import InputEmail from './inputEmail';
import CheckBoxRemember from './checkBoxRemember';
import SubmitButton from './submitButton';
import FormLogin from './formLogin';

import { Layout } from 'antd';

import './index.css';
import FocusLogo from '../../components/FocusLogo';
import { loginUser } from '../../redux/services'

export default function Login(props:any) {  

  const onFinish = async (values :any) => {
    var response = await loginUser(values);
    
    if(response.data.success){
      props.setToken(response.data.token);
    }    
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <div className='page'>
            <div className='container'>
              <div className='left'>
                <FormLogin onFinish={ onFinish } onFinishFailed={ onFinishFailed }>
                  <InputEmail />
                  <InputPassword />
                  <CheckBoxRemember />
                  <SubmitButton />
                </FormLogin>
              </div>
              <div className='right'>
                <FocusLogo />
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}