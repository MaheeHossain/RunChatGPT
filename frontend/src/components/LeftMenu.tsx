import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Grid, MenuProps } from 'antd';

const { SubMenu, ItemGroup: MenuItemGroup } = Menu;
const { useBreakpoint } = Grid;

export const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? 'horizontal' : 'inline'}>
      <Menu.Item key="key-home">
        <NavLink className="navbar-item" to="/">
          Home
        </NavLink>
      </Menu.Item>
      <SubMenu key="sub1" title="Services">
        <MenuItemGroup title="Features">
          <Menu.Item key="setting:1">
            <NavLink to="/feature1">Option 1</NavLink>
          </Menu.Item>
          <Menu.Item key="setting:2">
            <NavLink to="/feature2">Option 2</NavLink>
          </Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Demo">
          <Menu.Item key="setting:3">
            <NavLink to="/demo1">Option 1</NavLink>
          </Menu.Item>
          <Menu.Item key="setting:4">
            <NavLink to="/demo2">Option 2</NavLink>
          </Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="key-about">
        <NavLink className="navbar-item" to="/about">
          About
        </NavLink>
      </Menu.Item>
      <Menu.Item key="key-contact">
        <NavLink className="navbar-item" to="/contact">
          Contact
        </NavLink>
      </Menu.Item>
    </Menu>
  );
};