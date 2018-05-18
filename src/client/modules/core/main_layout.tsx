import * as React from 'react';
import { Route } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

import { HomeView } from '../home/home_view';
import logo from './logo.jpg';

export const MainLayout: React.SFC = () => (
  <div>
    <Menu>
      <Menu.Item>
        <img src={logo} alt="logo" />
      </Menu.Item>
    </Menu>
    Main Layout
    <Route path="/" component={HomeView} />
  </div>
);
