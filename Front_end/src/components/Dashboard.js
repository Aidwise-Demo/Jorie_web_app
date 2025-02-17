import React from 'react';
import "../styles/dashboard.css";
import ai_icon from "../assets/ChatIcon.svg";

function Dashboard({ onOptionSelect, onLogout }) {
    const options = [
        { 
            id: 'diagnostic-odds', 
            title: 'Diagnostic Odds', 
            icon: 'fa-chart-line',
            description: 'Analyze and predict diagnostic outcomes using advanced analytics'
        },
        { 
            id: 'disease-prediction', 
            title: 'Disease Prediction', 
            icon: 'fa-microscope',
            description: 'Leverage AI to predict potential health conditions and risks'
        },
        { 
            id: 'patient-persona', 
            title: 'Patient Persona', 
            icon: 'fa-user-group',
            description: 'Comprehensive patient profiling and cluster analysis'
        }
    ];

    return (
        <div>
            {/* Navbar */}
            <nav className="navbar" data-name="main-navbar">
                <div className="navbar-content">
                    <div className="navbar-left" data-name="navbar-left">
                        <img 
                            src="https://app.trickle.so/storage/public/images/usr_0c129b7d60008001/0dd06bf3-7b58-4e62-b8f0-4b1c42d45fd9.png" 
                            alt="Jorie Logo"
                            className="navbar-logo"
                            data-name="navbar-logo"
                        />
                    </div>

                    <div className="navbar-right" data-name="navbar-right">
                        <div className="navbar-user" data-name="navbar-user">
                            <button className="user-menu-button" data-name="user-menu">
                                <i className="fas fa-user-circle text-xl"></i>
                                <span className="ml-2">Admin</span>
                                <i className="fas fa-chevron-down ml-2"></i>
                            </button>
                            <button 
                                className="logout-button" 
                                onClick={onLogout}
                                data-name="logout-button"
                            >
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Dashboard Content */}
            <div className="dashboard-container" data-name="dashboard-container">
            <div className="flex items-center">
    <h1 className="text-3xl font-bold mb-2" data-name="dashboard-title">
        Jorie's Healthcare Analytics AI Platform
    </h1>
    <img 
        src={ai_icon} 
        alt="AI Chat Icon" 
        className="w-8 h-8 ml-2 cursor-pointer" 
        data-name="ai-chat-icon"
    />
</div>
                <p className="text-gray-600 mb-12" data-name="dashboard-subtitle">
                    Select a module to begin your healthcare analytics journey
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-name="options-grid">
                    {options.map(option => (
                        <div
                            key={option.id}
                            className="option-card"
                            onClick={() => onOptionSelect(option.id)}
                            data-name={`option-${option.id}`}
                        >
                            <div className="option-content">
                                <div className="option-icon">
                                    <i className={`fas ${option.icon}`}></i>
                                </div>
                                <h3 className="option-title">{option.title}</h3>
                                <p className="option-description">{option.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
