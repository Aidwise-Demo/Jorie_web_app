import React from 'react';
function Cluster() {
    const [selectedMetric, setSelectedMetric] = React.useState('risk');
    
    const metrics = [
        { id: 'risk', label: 'Risk Score' },
        { id: 'cost', label: 'Cost' },
        { id: 'readmission', label: 'Readmission Rate' }
    ];

    const clusters = [
        { id: 'A', patients: 150, risk: 'High', cost: '$12,000', readmission: '15%' },
        { id: 'B', patients: 200, risk: 'Medium', cost: '$8,000', readmission: '10%' },
        { id: 'C', patients: 175, risk: 'Low', cost: '$5,000', readmission: '5%' }
    ];

    return (
        <div className="p-6" data-name="cluster-view">
            <div className="flex justify-between items-center mb-6" data-name="cluster-header">
                <h2 className="text-2xl font-bold">Cluster Analysis</h2>
                <div className="flex gap-2" data-name="metric-selector">
                    {metrics.map(metric => (
                        <button
                            key={metric.id}
                            className={`px-4 py-2 rounded ${
                                selectedMetric === metric.id 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200'
                            }`}
                            onClick={() => setSelectedMetric(metric.id)}
                            data-name={`metric-${metric.id}`}
                        >
                            {metric.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-name="clusters-grid">
                {clusters.map(cluster => (
                    <div 
                        key={cluster.id}
                        className="bg-white rounded-lg shadow p-6"
                        data-name={`cluster-${cluster.id}`}
                    >
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">Cluster {cluster.id}</h3>
                            <div className="text-gray-600 mb-4">{cluster.patients} Patients</div>
                            
                            <div className="text-3xl font-bold mb-2">
                                {cluster[selectedMetric]}
                            </div>
                            
                            <div className="text-sm text-gray-600">
                                {metrics.find(m => m.id === selectedMetric).label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 bg-white rounded-lg shadow p-6" data-name="cluster-details">
                <h3 className="text-xl font-bold mb-4">Cluster Comparison</h3>
                <div className="relative h-80">
                    <img 
                        src="https://app.trickle.so/storage/public/images/usr_0c129b7d60008001/29d41c53-f0e2-4203-ad5e-4bf817e4d4c8.png"
                        alt="Cluster Comparison"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
export default Cluster;