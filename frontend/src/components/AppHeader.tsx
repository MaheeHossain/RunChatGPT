import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LeftMenu } from './LeftMenu';
import { Drawer, Button } from 'antd';

export const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const drawerOnClose = () => {
    setVisible(false);
  };
  return (
    <div className="navbar-section">
      <div className="container">
        <nav className="navbar">
          <div className="navbar-logo">
            <NavLink to="/" className="navbar-item" >
              REACT TS
            </NavLink>
          </div>
          <div className="navbar-menu">
            <div className="navbar-left-menu">
              <LeftMenu />
            </div>
          </div>
          <div>
            <Button
              className="navbar-btnBars"
              type="primary"
              onClick={showDrawer}
            >
              <span className="navbar-btnBars-span"></span>
            </Button>
            <Drawer
              title="Drawer navbar"
              placement="right"
              closable={true}
              onClose={drawerOnClose}
              open={visible}
            >
              <LeftMenu />
            </Drawer>
          </div>
        </nav>
      </div>
    </div>
  );
};