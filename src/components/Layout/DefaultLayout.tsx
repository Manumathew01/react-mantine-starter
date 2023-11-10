import { Outlet, useLocation } from 'react-router';
import { SideNav } from './Navbar/SideNav';
import { AppShell, Burger, Group } from '@mantine/core';

const DefaultLayout = () => {
  const location = useLocation();
  return (
    <div>
      <AppShell header={{ height: 60 }} navbar={{ width: 250, breakpoint: 'sm' }} padding="md">
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger opened={false} hiddenFrom="sm" size="sm" />
            <div>Dashboard</div>
          </Group>
        </AppShell.Header>

        {location.pathname !== '/login' ? <SideNav /> : ''}

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </div>
  );
};

export default DefaultLayout;

