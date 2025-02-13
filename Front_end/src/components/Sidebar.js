import React from "react";
import "../styles/sidebar.css";

function Sidebar({ isCollapsed, onToggle, activePage, onNavigate }) {
    const menuItems = [
        { id: 'patient-listing', title: 'Patient Listing', icon: 'fa-list' },
        { id: 'patient-journey', title: 'Patient Journey', icon: 'fa-route' },
        { id: 'cluster', title: 'Cluster', icon: 'fa-network-wired' },
        { id: 'cluster-protocol', title: 'Cluster Protocol', icon: 'fa-clipboard-list' }
    ];

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`} data-name="sidebar">
            <div className="sidebar-toggle" onClick={onToggle} data-name="sidebar-toggle">
                <i className={`fas fa-chevron-${isCollapsed ? 'right' : 'left'}`}></i>
            </div>
            
            <div className="py-4" data-name="sidebar-header">
                <img 
                    src="https://app.trickle.so/storage/public/images/usr_0c129b7d60008001/0dd06bf3-7b58-4e62-b8f0-4b1c42d45fd9.png"
                    alt="Jorie Logo"
                    className={`mx-auto ${isCollapsed ? 'w-8' : 'w-16'}`}
                />
            </div>

            <nav className="mt-8" data-name="sidebar-nav">
                {menuItems.map(item => (
                    <div
                        key={item.id}
                        className={`nav-item ${activePage === item.id ? 'active' : ''}`}
                        onClick={() => onNavigate(item.id)}
                        data-name={`nav-item-${item.id}`}
                    >
                        <i className={`fas ${item.icon} mr-3`}></i>
                        {!isCollapsed && <span>{item.title}</span>}
                    </div>
                ))}
            </nav>
        </div>
    );
}

export default Sidebar;