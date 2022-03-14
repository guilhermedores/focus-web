import { useState } from "react";

import { RouterConfig } from "./navigation/RouterConfig";

import { Layout } from 'antd';
import FocusMenu from './components/FocusMenu'
import Login from './pages/Login'
import useToken from "./hooks/useToken";
import { BrowserRouter as Router} from 'react-router-dom';

import './App.css';

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
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={onHadlerCollapse} className='site-layout-background'>
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
      </Router>
    </>
  )
}

export default App;