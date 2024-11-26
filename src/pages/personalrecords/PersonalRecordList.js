import React from 'react';
import PersonalRecordDisplay from './PersonalRecordDisplay';

function PersonalRecordList({ records, onEdit, onDelete, isOwner }) {
    return (
        <div>
            <h2>Personal Records</h2>
            {records.length > 0 ? (
                records.map(record => (
                    <PersonalRecordDisplay 
                        key={record.id} 
                        personalRecord={record} 
                        onEdit={isOwner ? onEdit : null}
                        onDelete={isOwner ? onDelete : null}
                        isOwner={isOwner}
                    />
                ))
            ) : (
                <p>No personal records found. Create one!</p>
            )}
        </div>
    );
}

export default PersonalRecordList