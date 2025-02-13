import React from "react";
function PatientListing() {
    const [selectedCluster, setSelectedCluster] = React.useState('all');
    const [currentPage, setCurrentPage] = React.useState(1);
    const [patients, setPatients] = React.useState([
        { id: 1, name: 'John Doe', age: 45, cluster: 'A', condition: 'Diabetes' },
        { id: 2, name: 'Jane Smith', age: 32, cluster: 'B', condition: 'Hypertension' },
        { id: 3, name: 'Mike Johnson', age: 58, cluster: 'A', condition: 'Heart Disease' },
    ]);

    const clusters = ['all', 'A', 'B', 'C'];

    const filteredPatients = selectedCluster === 'all' 
        ? patients 
        : patients.filter(p => p.cluster === selectedCluster);

    return (
        <div className="p-6" data-name="patient-listing">
            <div className="flex justify-between items-center mb-6" data-name="listing-header">
                <h2 className="text-2xl font-bold">Patient Listing</h2>
                <div className="flex gap-2" data-name="cluster-filters">
                    {clusters.map(cluster => (
                        <button
                            key={cluster}
                            className={`px-4 py-2 rounded ${
                                selectedCluster === cluster 
                                ? 'bg-blue-600 text-white' 
                                : 'bg-gray-200'
                            }`}
                            onClick={() => setSelectedCluster(cluster)}
                            data-name={`cluster-filter-${cluster}`}
                        >
                            {cluster === 'all' ? 'All Clusters' : `Cluster ${cluster}`}
                        </button>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-lg shadow" data-name="patients-table">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cluster</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Condition</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPatients.map(patient => (
                            <tr key={patient.id} className="border-b" data-name={`patient-row-${patient.id}`}>
                                <td className="px-6 py-4">{patient.name}</td>
                                <td className="px-6 py-4">{patient.age}</td>
                                <td className="px-6 py-4">Cluster {patient.cluster}</td>
                                <td className="px-6 py-4">{patient.condition}</td>
                                <td className="px-6 py-4">
                                    <button 
                                        className="text-blue-600 hover:text-blue-800"
                                        data-name={`view-details-${patient.id}`}
                                    >
                                        <i className="fas fa-eye mr-2"></i>
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-center gap-2" data-name="pagination">
                <button 
                    className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    data-name="prev-page"
                >
                    <i className="fas fa-chevron-left mr-2"></i>
                    Previous
                </button>
                <button 
                    className="px-4 py-2 rounded bg-gray-200"
                    onClick={() => setCurrentPage(p => p + 1)}
                    data-name="next-page"
                >
                    Next
                    <i className="fas fa-chevron-right ml-2"></i>
                </button>
            </div>
        </div>
    );
}

export default PatientListing;