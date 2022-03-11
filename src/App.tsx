import { useState } from "react";

import { RouterConfig } from "./navigation/RouterConfig";

import { Layout } from 'antd';
import FocusMenu from './components/FocusMenu'
import Login from './pages/Login'
import useToken from "./hooks/useToken";

import './App.less';

const { Content, Sider, Footer } = Layout;

function App() {

  const [collapsed, setCollapsed] = useState(false);
  const [token, setToken] = useToken();

  if (!token){
    return <Login setToken={setToken}/>     
  }

  const onHadlerCollapse = () => {
    setCollapsed(!collapsed);
  }  

  return (
    <>    
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onHadlerCollapse}>
          <FocusMenu/>
        </Sider>
        <Content style={{ margin: '10px 16px' }}>
          <div style={{ padding: 24, minHeight: 700 , backgroundColor: '#fff' }}>
            {<RouterConfig/>}
          </div>          
          <Layout>
            <Footer style={{ textAlign: 'center' }}>Criado por Guilherme Batista das Dôres</Footer>
          </Layout>
        </Content>
      </Layout>
    </>
  );
}

export default App;