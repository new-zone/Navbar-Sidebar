import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { MdBarChart, MdDashboard, MdMail, MdModeEdit } from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <MdDashboard />,
  },
  {
    title: 'Login Activity',
    path: '/login',
    icon: <MdBarChart />,
  },
  {
    title: 'Mail Box',
    path: '/mail',
    icon: <MdMail />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Surat Masuk',
        path: '/mail/suratmasuk',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Surat Keluar',
        path: '/mail/suratkeluar',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Edit',
    path: '/edit',
    icon: <MdModeEdit />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Surat Masuk',
        path: '/edit/suratmasuk',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Surat Keluar',
        path: '/edit/suratkeluar',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
];