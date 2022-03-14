import React from 'react';
import { Menu } from 'antd';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { getAllMenus } from "../redux/services";
import { Link } from 'react-router-dom'

export default function FocusMenu() {
  
  const menus = getAllMenus();

  const mappedMenus = menus.map((menu, index) => 
      <Menu.Item key={index} icon={<MenuUnfoldOutlined/>}>
        <Link to={menu.path}>{menu.description}</Link>
      </Menu.Item>
  );

  return (
    <>
      <Menu mode="inline" defaultSelectedKeys={['0']}>
        {mappedMenus}
      </Menu>
    </>
  );
}