import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [currentView, setCurrentView] = useState("dashboard");
    const [showSidebar, setShowSidebar] = useState(false);
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleOptionSelect = (option) => {
        if (option === "patient-persona") {
            setShowSidebar(true);
            setCurrentView("patient-listing");
        } else {
            setCurrentView(option);
        }
    };

    const handleNavigate = (page) => {
        setCurrentView(page);
        if (page === "dashboard") {
            setShowSidebar(false); // Hide sidebar when navigating back to the dashboard
        }
    };


    if (!isLoggedIn) {
        return <LoginForm onLogin={handleLogin} />;
    }

    return (
        <div className="flex h-screen">
            {/* Sidebar - Only visible after selecting Patient Persona */}
            {showSidebar && (
                <Sidebar
                    isCollapsed={sidebarCollapsed}
                    onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
                    activePage={currentView}
                    onNavigate={handleNavigate}
                />
            )}

            {/* Main Content Area */}
            <main
                className={`flex-1 p-4 transition-all ${
                    showSidebar ? (sidebarCollapsed ? "ml-16" : "ml-64") : "ml-0"
                }`}
            >
                {currentView === "dashboard" && (
                    <Dashboard onOptionSelect={handleOptionSelect} />
                )}

                {currentView === "patient-listing" && (
                    <div className="card">
                        <h2 className="text-2xl font-bold mb-4">Patient Listing</h2>
                        <iframe
                            title="Patient_persona_dashboard"
                            width="100%"
                            height="900"
                            src="https://app.powerbi.com/reportEmbed?reportId=e711c02c-fda7-499a-8437-dc9d968e176a&autoAuth=true&ctid=39d814ab-a56f-478d-8b14-f4f1e99cfe1b"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {currentView === "patient-journey" && (
                    <div className="card">
                        <h2 className="text-2xl font-bold mb-4">Patient Journey</h2>
                        <iframe
                            title="Patient Journey"
                            width="100%"
                            height="900"
                            src="https://app.powerbi.com/reportEmbed?reportId=d2cd67e9-3dd8-4ef1-a5fa-4acfdf344f1e&autoAuth=true&ctid=39d814ab-a56f-478d-8b14-f4f1e99cfe1b"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {currentView === "cluster" && (
                    <div className="card">
                        <h2 className="text-2xl font-bold mb-4">Persona Comparison</h2>
                        <iframe
                            title="Cluster Protocol"
                            width="100%"
                            height="900"
                            src="https://app.powerbi.com/reportEmbed?reportId=8e965572-7d95-408b-8c50-f1d380182039&autoAuth=true&ctid=39d814ab-a56f-478d-8b14-f4f1e99cfe1b"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {currentView === "cluster-protocol" && (
                    <div className="card">
                        <h2 className="text-2xl font-bold mb-4">Persona Protocol</h2>
                        <iframe
                            title="Cluster Protocol"
                            width="100%"
                            height="900"
                            src="https://app.powerbi.com/reportEmbed?reportId=fe973fc3-cd2b-4442-b3eb-d9c0441bdc11&autoAuth=true&ctid=39d814ab-a56f-478d-8b14-f4f1e99cfe1b"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
