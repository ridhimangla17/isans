import React, { useState } from 'react';
import '../App.css';
import Table from './Table';
import { dummyData } from './dummyData';

function PendingRequests() {
    const [applications, setApplications] = useState(dummyData);
    const [filter, setFilter] = useState({ field: 'program', value: '' });
    const [sortBy, setSortBy] = useState('name');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleFilterChange = (e) => {
        setFilter({ ...filter, value: e.target.value });
    };

    const handleFieldChange = (e) => {
        setFilter({ ...filter, field: e.target.value });
    };

    const handleSortByChange = (e) => {
        setSortBy(e.target.value);
    };

    const handleSort = () => {
        const sortedData = [...applications].sort((a, b) => {
            if (sortBy === 'date') {
                return sortOrder === 'asc'
                    ? new Date(a.date) - new Date(b.date)
                    : new Date(b.date) - new Date(a.date);
            } else {
                return sortOrder === 'asc'
                    ? a[sortBy].localeCompare(b[sortBy])
                    : b[sortBy].localeCompare(a[sortBy]);
            }
        });
        setApplications(sortedData); // Ensure the sorted array is passed to the state
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const filteredData = applications.filter((app) => {
        if (filter.field === 'program') {
            return app.program.toLowerCase().includes(filter.value.toLowerCase());
        } else if (filter.field === 'status') {
            return app.status.toLowerCase().includes(filter.value.toLowerCase());
        }
        return true;
    });

    const sortedFilteredData = filteredData.sort((a, b) => {
        if (sortBy === 'date') {
            return sortOrder === 'asc'
                ? new Date(a.date) - new Date(b.date)
                : new Date(b.date) - new Date(a.date);
        } else {
            return sortOrder === 'asc'
                ? a[sortBy].localeCompare(b[sortBy])
                : b[sortBy].localeCompare(a[sortBy]);
        }
    });

    return (
        <div>
            <div className="controls">
                <div className="controller">
                    <div className="filter-control">
                        <select className="filter-dropdown" onChange={handleFieldChange}>
                            <option value="program">Filter by Program</option>
                            <option value="status">Filter by Status</option>
                        </select>
                        <input
                            type="text"
                            value={filter.value}
                            onChange={handleFilterChange}
                            placeholder={`Filter by ${filter.field}`}
                        />
                    </div>
                    <div className="filter-control">
                        <select className="sort-dropdown" onChange={handleSortByChange}>
                            <option value="name">Sort by Name</option>
                            <option value="date">Sort by Date Submitted</option>
                            <option value="program">Sort by Program</option>
                        </select>
                        <button className="sort-btn" onClick={handleSort}>
                            Sort
                        </button>
                    </div>
                </div>
                <button className="create-btn">Create Application</button>
            </div>
            <Table applications={sortedFilteredData} />
        </div>
    );
}

export default PendingRequests;
