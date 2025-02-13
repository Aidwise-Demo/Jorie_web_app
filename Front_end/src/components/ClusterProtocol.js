import React from 'react';
function ClusterProtocol() {
    const [selectedCluster, setSelectedCluster] = React.useState('A');
    
    const protocols = [
        {
            id: 1,
            name: 'Diabetes Management',
            description: 'Standard protocol for managing Type 2 Diabetes patients',
            steps: [
                'Regular blood glucose monitoring',
                'Dietary recommendations',
                'Exercise plan',
                'Medication schedule'
            ]
        },
        {
            id: 2,
            name: 'Hypertension Control',
            description: 'Protocol for managing high blood pressure patients',
            steps: [
                'Daily blood pressure monitoring',
                'Sodium restriction',
                'Stress management',
                'Regular check-ups'
            ]
        }
    ];

    return (
        <div className="p-6" data-name="cluster-protocol">
            <div className="flex justify-between items-center mb-6" data-name="protocol-header">
                <h2 className="text-2xl font-bold">Cluster Protocols</h2>
                <div className="flex gap-2" data-name="cluster-selector">
                    {['A', 'B', 'C'].map(cluster => (
                        <button
                            key={cluster}
                            className={`px-4 py-2 rounded ${
                                selectedCluster === cluster 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200'
                            }`}
                            onClick={() => setSelectedCluster(cluster)}
                            data-name={`select-cluster-${cluster}`}
                        >
                            Cluster {cluster}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-name="protocols-grid">
                {protocols.map(protocol => (
                    <div 
                        key={protocol.id}
                        className="bg-white rounded-lg shadow p-6"
                        data-name={`protocol-${protocol.id}`}
                    >
                        <h3 className="text-xl font-bold mb-2">{protocol.name}</h3>
                        <p className="text-gray-600 mb-4">{protocol.description}</p>
                        
                        <div className="space-y-2">
                            {protocol.steps.map((step, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-2"
                                    data-name={`protocol-step-${index + 1}`}
                                >
                                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div>{step}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-white rounded-lg shadow p-6" data-name="protocol-details">
                <h3 className="text-xl font-bold mb-4">Detailed Protocol View</h3>
                <div className="relative h-80">
                    <img 
                        src="https://app.trickle.so/storage/public/images/usr_0c129b7d60008001/d0188cdc-8637-4488-a5b8-f1003d581e55.png"
                        alt="Protocol Details"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
export default ClusterProtocol;