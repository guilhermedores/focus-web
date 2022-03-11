import React from 'react';
import { Menu } from 'antd';

import { MenuUnfoldOutlined } from '@ant-design/icons';

import { getAllMenus } from "../services";

export default function FocusMenu() {
  
  const menus = getAllMenus();

  const mappedMenus = menus.map((menu, index) => 
      <Menu.Item key={index} icon={<MenuUnfoldOutlined/>}>
        <a href={menu.path}>{menu.description}</a>
      </Menu.Item>
  );

  return (
    <>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={[1]}>
        {mappedMenus}
      </Menu>
    </>
  );
}