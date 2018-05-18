import * as React from 'react';
import { MainLayout } from '../core/main_layout';

export const HomeLayout = () => (
  <MainLayout>
    <HomeView />
  </MainLayout>
);

export const HomeView: React.SFC = () => <div>Home</div>;
