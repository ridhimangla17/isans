import React, { useState } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [employees, setEmployees] = useState([
        { firstName: 'Alice', lastName: 'Smith', access: 'agent' },
        { firstName: 'Bob', lastName: 'Johnson', access: 'supervisor' },
        { firstName: 'Carol', lastName: 'White', access: 'admin' },
        { firstName: 'David', lastName: 'Green', access: 'agent' },
        { firstName: 'Eva', lastName: 'Brown', access: 'supervisor' },
        { firstName: 'Frank', lastName: 'Wilson', access: 'admin' },
    ]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredEmployees = employees.filter((employee) =>
        `${employee.firstName} ${employee.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="admin-dashboard">
            <div className="dashboard-info">
                <div className="open-days">
                    <div className="circle">26</div>
                    <p>Application open for over 5 days</p>
                </div>
            </div>

            <div className="employee-search">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search Employee"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Employee First Name and Last Name</th>
                        <th>Profile Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredEmployees.length > 0 ? (
                        filteredEmployees.map((employee, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                                <td>{employee.access}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No employees found</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminDashboard;
