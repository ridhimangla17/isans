import React, { useState } from 'react';
import './ViewEditPrograms.css';
import { programsData } from './programsData';

function ViewEditPrograms() {
    const [searchTerm, setSearchTerm] = useState('');
    const [programs, setPrograms] = useState(programsData);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleEdit = (program) => {
        alert(`Edit clicked for ${program.name}`); // Replace with actual edit functionality
    };

    const filteredPrograms = programs.filter((program) =>
        program.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="view-edit-controls">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search for a program"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <button className="search-btn">Search</button>
            </div>
            <div className="table-container">
                <table>
                    <thead>
                    <tr>
                        <th>Program Name</th>
                        <th>Program Created</th>
                        <th>Program Last Updated</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredPrograms.length > 0 ? (
                        filteredPrograms.map((program, index) => (
                            <tr key={index}>
                                <td>{program.name}</td>
                                <td>{program.created}</td>
                                <td>
                                    {program.updated}
                                    <button
                                        className="edit-btn"
                                        onClick={() => handleEdit(program)}
                                    >
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No programs found</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ViewEditPrograms;
