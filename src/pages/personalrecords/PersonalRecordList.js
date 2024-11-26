import React from 'react';
import PersonalRecordDisplay from './PersonalRecordDisplay';

function PersonalRecordList({ records, onEdit, onDelete }) {
    return (
        <div>
            <h2>Personal Records</h2>
            {records.length > 0 ? (
                records.map(record => (
                    <PersonalRecordDisplay 
                        key={record.id} 
                        personalRecord={record} 
                        onEdit={() => onEdit(record)}
                        onDelete={() => onDelete(record.id)}
                    />
                ))
            ) : (
                <p>No personal records found. Create one!</p>
            )}
        </div>
    );
}

export default PersonalRecordList