import React from 'react';
import './CSS/ClientDashboard.css';

const Dashboard = () => {
  // Demo data for the table
  const applications = [
    { srNo: 1, clientName: 'Michael Johnson', program: 'English Language Program', submittedOn: '2024-10-01', status: 'Pending' },
    { srNo: 2, clientName: 'Sarah Johnson', program: 'Employment Support Program', submittedOn: '2024-09-15', status: 'Approved' },
    { srNo: 3, clientName: 'Sarah Johnson', program: 'Business Startup Program', submittedOn: '2024-10-05', status: 'Rejected' },
  ];

  // Users from the same family using the same account
  const users = [
    { name: 'Michael Johnson', initials: 'MJ' },
    { name: 'Sarah Johnson', initials: 'SJ' },
    { name: 'Emily Johnson', initials: 'EJ' },
  ];

  return (
    <div className="dashboard-container">
      {/* Profile and Tabs Section */}
      <div className="profile-section">
        <div className="profile">
          <div className="profile-avatar">B. Ghevariya</div>
          <div className="tabs">
            <button className="tab active">Dashboard</button>
          </div>
        </div>
      </div>

      {/* Enhanced Gray Section with Flex Layout */}
      <div className="gray-section">
        <h3 className="gray-section-title">Family Members Using This Account:</h3>
        <ul className="user-list">
          {users.map((user, index) => (
            <li key={index} className="user-item">
              <div className="user-avatar">{user.initials}</div>
              <div className="user-name">{user.name}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Table Section */}
      <div className="table-container">
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Sr no.</th>
              <th>Client Name</th>
              <th>Program</th>
              <th>Submitted on</th>
              <th>Status of application</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.srNo}>
                <td>{app.srNo}</td>
                <td>{app.clientName}</td>
                <td>{app.program}</td>
                <td>{app.submittedOn}</td>
                <td>{app.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
