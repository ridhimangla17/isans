import React, { useState } from 'react';
import './App.css';
import PendingRequests from './EmployeeView/PendingRequests';
import ViewEditPrograms from './EmployeeView/ViewEditPrograms';
import AdminDashboard from './EmployeeView/AdminDashboard';
import RegistrationForm from './EmployeeView/registrationform';

function App() {
  const [activeTab, setActiveTab] = useState('pending');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'pending':
        return <PendingRequests />;
      case 'viewEdit':
        return <ViewEditPrograms />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <PendingRequests />;
    }
  };

  return (
      <div className="app">
        <header>
          <div className="nav">
            <span className="logo">ISANS</span>
            <div className="tabs">
              <button
                  className={`tab ${activeTab === 'pending' ? 'active' : ''}`}
                  onClick={() => setActiveTab('pending')}
              >
                Pending Requests
              </button>
              <button
                  className={`tab ${activeTab === 'viewEdit' ? 'active' : ''}`}
                  onClick={() => setActiveTab('viewEdit')}
              >
                View/Edit Programs
              </button>
              <button
                  className={`tab ${activeTab === 'admin' ? 'active' : ''}`}
                  onClick={() => setActiveTab('admin')}
              >
                Admin Dashboard
              </button>
            </div>
          </div>
          <div className="header-right">
            <span className="user">B. Ghevariya</span>
          </div>
        </header>

        <div className="content">{renderActiveTab()}</div>
      </div>
  );
}

export default App;
