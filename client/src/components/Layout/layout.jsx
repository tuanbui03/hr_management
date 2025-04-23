import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from "lucide-react";
import { navItems } from "./navItems";
import './layout.css';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdownNav = (label) => {
        setOpenDropdown(openDropdown === label ? null : label);
    };

    const navigatorTo = (url) => {
        navigate(url);
    };

    return (
        <>
            <header className="admin-header">
                <div className="header-content">
                    <button className="menu-icon" onClick={toggleSidebar} aria-label="Toggle sidebar menu">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                        </svg>
                    </button>
                    <div className="logo-container" onClick={() => navigatorTo('/management/project/dashboard')}>
                        <object className="logo-svg" data="http://localhost:4200/tbike.svg" type="image/svg+xml" width="24" height="24"></object>
                        <span className="logo-text">HR</span>
                    </div>
                    <nav className="navigation">
                        {/* <ul>
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={item.routeLink}
                                        title={item.title}
                                        className={({ isActive }) => isActive ? 'active' : ''}
                                        end
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul> */}
                    </nav>
                    <div
                        className="user-profile"
                        onClick={toggleDropdown}
                        tabIndex="0"
                        aria-haspopup="true"
                        aria-expanded={isDropdownOpen}
                    >
                        <img
                            className="avatar"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                            alt="User avatar"
                        />
                        {isDropdownOpen && (
                            <div className="dropdown">
                                <a href="#profile">Profile</a>
                                <a href="#settings">Settings</a>
                                <a href="#logout">Logout</a>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <div className="logo-container">
                        <object className="logo-svg" data="http://localhost:4200/tbike.svg" type="image/svg+xml" width="24" height="24"></object>
                        <span className="logo-text">HR</span>
                    </div>
                    <button className="close-button" onClick={toggleSidebar}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <nav className="sidebar-menu">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        return item.children ? (
                            <div key={index} className="dropdown-list">
                                <div className="dropdown-header" onClick={() => toggleDropdownNav(item.label)}>
                                    <div className="dropdown-header__lablel">
                                        {Icon && <Icon size={20} />}
                                        <div>{item.label}</div>
                                    </div>
                                    {openDropdown === item.label ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                                </div>
                                <div
                                    className={`dropdown-menu ${openDropdown === item.label ? "open" : ""}`}
                                >
                                    {item.children.map((child, childIndex) => {
                                        const ChildIcon = child.icon;
                                        return (
                                            <NavLink
                                                key={childIndex}
                                                to={child.routeLink}
                                                title={child.title}
                                                className={({ isActive }) => isActive ? "navlink active" : "navlink"}
                                            >
                                                {ChildIcon && <ChildIcon size={18} className="nav-icon" />}
                                                {child.label}
                                            </NavLink>
                                        );
                                    })}
                                </div>
                            </div>
                        ) : (
                            <NavLink
                                key={index}
                                to={item.routeLink}
                                title={item.title}
                                className={({ isActive }) => isActive ? "navlink active" : "navlink"}
                            >
                                {Icon && <Icon size={20} className="nav-icon" />}
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>
            </aside>

            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
