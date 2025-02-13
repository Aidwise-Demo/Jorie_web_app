import React from "react";
function PatientJourney() {
    const [activeTab, setActiveTab] = React.useState('timeline');
    const tabs = [
        { id: 'timeline', label: 'Timeline', icon: 'fa-clock' },
        { id: 'conditions', label: 'Conditions', icon: 'fa-notes-medical' },
        { id: 'lab', label: 'Lab Results', icon: 'fa-flask' },
        { id: 'encounters', label: 'Encounters', icon: 'fa-hospital' }
    ];

    const patientInfo = {
        name: 'John Doe',
        age: 45,
        gender: 'Male',
        cluster: 'A',
        admissionDate: '2024-01-15'
    };

    return (
        <div className="p-6" data-name="patient-journey">
            <div className="bg-white rounded-lg shadow p-6 mb-6" data-name="patient-info">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">{patientInfo.name}</h2>
                        <div className="text-gray-600">
                            <span className="mr-4">Age: {patientInfo.age}</span>
                            <span className="mr-4">Gender: {patientInfo.gender}</span>
                            <span className="mr-4">Cluster: {patientInfo.cluster}</span>
                            <span>Admission: {patientInfo.admissionDate}</span>
                        </div>
                    </div>
                    <button 
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                        data-name="edit-patient"
                    >
                        <i className="fas fa-edit mr-2"></i>
                        Edit Patient
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-lg shadow" data-name="journey-content">
                <div className="border-b" data-name="tabs">
                    <div className="flex">
                        {tabs.map(tab => (
                            <button
                                key={tab.id}
                                className={`px-6 py-4 flex items-center ${
                                    activeTab === tab.id
                                    ? 'border-b-2 border-blue-600 text-blue-600'
                                    : 'text-gray-600'
                                }`}
                                onClick={() => setActiveTab(tab.id)}
                                data-name={`tab-${tab.id}`}
                            >
                                <i className={`fas ${tab.icon} mr-2`}></i>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="p-6" data-name="tab-content">
                    {activeTab === 'timeline' && (
                        <div className="space-y-6" data-name="timeline-content">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                                        <i className="fas fa-hospital"></i>
                                    </div>
                                </div>
                                <div>
                                    <div className="font-semibold">Hospital Admission</div>
                                    <div className="text-gray-600">January 15, 2024</div>
                                    <div className="mt-1">Initial diagnosis: Type 2 Diabetes</div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'conditions' && (
                        <div data-name="conditions-content">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="border rounded p-4">
                                    <h3 className="font-semibold mb-2">Type 2 Diabetes</h3>
                                    <p className="text-gray-600">Diagnosed: Jan 15, 2024</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'lab' && (
                        <div data-name="lab-content">
                            <table className="min-w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left py-2">Test</th>
                                        <th className="text-left py-2">Result</th>
                                        <th className="text-left py-2">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2">Blood Glucose</td>
                                        <td className="py-2">140 mg/dL</td>
                                        <td className="py-2">Jan 15, 2024</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'encounters' && (
                        <div className="space-y-4" data-name="encounters-content">
                            <div className="border rounded p-4">
                                <div className="flex justify-between">
                                    <h3 className="font-semibold">Initial Consultation</h3>
                                    <span className="text-gray-600">Jan 15, 2024</span>
                                </div>
                                <p className="mt-2">Dr. Smith - Internal Medicine</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
export default PatientJourney;