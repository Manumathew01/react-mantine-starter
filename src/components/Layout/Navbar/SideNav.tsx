import { useState } from 'react';
import { AppShell } from '@mantine/core';
import { IconFingerprint, IconKey, IconReceipt2, IconLogout, IconLogin } from '@tabler/icons-react';
import classes from './Sidenav.module.css';
import { Link } from 'react-router-dom';

const data = [
  { link: '/login', label: 'Login', icon: IconLogin },
  { link: '', label: 'Billing', icon: IconReceipt2 },
  { link: '', label: 'Security', icon: IconFingerprint },
  { link: '', label: 'SSH Keys', icon: IconKey },
];

export function SideNav() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <div
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <Link className={classes.link} data-active={item.label === active || undefined} to={item.link}>
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </Link>
    </div>
  ));

  return (
    <AppShell.Navbar>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>{links}</div>
        <div className={classes.footer}>
          <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
            <IconLogout className={classes.linkIcon} stroke={1.5} />
            <span>Logout</span>
          </a>
        </div>
      </nav>
    </AppShell.Navbar>
  );
}
