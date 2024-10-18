import React from 'react';
import '../App.css';

function Table({ applications }) {
    return (
        <div className="table-container">
            <table>
                <thead>
                <tr>
                    <th>View</th>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Program</th>
                    <th>Date Submitted</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {applications.map((app, index) => (
                    <tr key={index}>
                        <td><a href="www.google.com">icon</a></td>
                        <td>{index + 1}</td>
                        <td>{app.name}</td>
                        <td>{app.program}</td>
                        <td>{app.date}</td>
                        <td>{app.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
