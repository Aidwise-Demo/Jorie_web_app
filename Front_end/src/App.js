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
                            height="600"
                            src="https://app.powerbi.com/reportEmbed?reportId=f6c006f2-d67b-4ce4-b8f6-f9c5433918eb&autoAuth=true&ctid=39d814ab-a56f-478d-8b14-f4f1e99cfe1b"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {currentView === "patient-journey" && (
                    <div className="card">
                        <h2 className="text-2xl font-bold mb-4">Patient Journey</h2>
                        <img
                            src="https://app.trickle.so/storage/public/images/usr_0c129b7d60008001/7f5ea4a5-97f6-4fe9-9d12-dee6a6c745ed.png"
                            alt="Patient Journey"
                            className="w-full"
                        />
                    </div>
                )}

                {currentView === "cluster" && (
                    <div className="card">
                        <h2 className="text-2xl font-bold mb-4">Cluster</h2>
                        <img
                            src="https://app.trickle.so/storage/public/images/usr_0c129b7d60008001/29d41c53-f0e2-4203-ad5e-4bf817e4d4c8.png"
                            alt="Cluster"
                            className="w-full"
                        />
                    </div>
                )}

                {currentView === "cluster-protocol" && (
                    <div className="card">
                        <h2 className="text-2xl font-bold mb-4">Cluster Protocol</h2>
                        <img
                            src="https://app.trickle.so/storage/public/images/usr_0c129b7d60008001/d0188cdc-8637-4488-a5b8-f1003d581e55.png"
                            alt="Cluster Protocol"
                            className="w-full"
                        />
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;
