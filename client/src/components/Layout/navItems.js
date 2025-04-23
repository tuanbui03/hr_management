import { Users, Briefcase, FolderOpen, Award, DollarSign, Calendar, FileText, LayoutDashboard } from 'lucide-react';

export const navItems = [
  { routeLink: '/management/contracts', label: 'Contracts', title: 'Manage Contracts', icon: FileText },
  { routeLink: '/management/departments', label: 'Departments', title: 'Manage Departments', icon: Briefcase },
  {
    label: 'Employees',
    icon: Users,
    children: [
      { routeLink: '/management/employee/list', label: 'Employee List', title: 'Manage Employees', icon: Users },
      { routeLink: '/management/employee/rewards', label: 'Employee Rewards', title: 'Manage Rewards', icon: Award },
      { routeLink: '/management/employee/salary', label: 'Employee Salary', title: 'Manage Salary', icon: DollarSign },
    ],
  },
  { routeLink: '/management/leave/request', label: 'Leave Requests', title: 'Manage Leave Requests', icon: Calendar },
  { routeLink: '/management/policy', label: 'Policy', title: 'Manage Policy', icon: FileText },
  {
    label: 'Projects',
    icon: FolderOpen,
    children: [
      { routeLink: '/management/project/dashboard', label: 'Project Dashboard', title: 'Dashboard', icon: LayoutDashboard },
      { routeLink: '/management/project/overview', label: 'Project Overview', title: 'Overview', icon: LayoutDashboard },
      { routeLink: '/management/projects', label: 'Project Management', title: 'Manage Projects', icon: FolderOpen },
    ],
  },
];
