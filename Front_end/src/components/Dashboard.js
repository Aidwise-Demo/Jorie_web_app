import React from 'react';
import "../styles/dashboard.css";

function Dashboard({ onOptionSelect }) {
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
        <div className="dashboard-container" data-name="dashboard-container">
            <h1 className="text-3xl font-bold mb-2" data-name="dashboard-title">
                Welcome to Jorie
            </h1>
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
    );
}
export default Dashboard;