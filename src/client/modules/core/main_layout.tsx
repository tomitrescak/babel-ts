import * as React from 'react';
import { Route } from 'react-router-dom';
import { HomeView } from '../home/home_view';

export const MainLayout: React.SFC = () => (
  <div>
    Main Layout
    <Route path="/" component={HomeView} />
  </div>
);
