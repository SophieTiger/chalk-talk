import React from 'react';
import { Container } from 'react-bootstrap';
import { MoreDropdown } from '../../components/MoreDropdown';
import appStyles from "../../App.module.css";

const PersonalRecordDisplay = ({ personalRecord, onEdit, onDelete, isOwner }) => {
  console.log("PersonalRecordDisplay props:", { personalRecord, onEdit, onDelete, isOwner });

  const handleDelete = () => {
    console.log("handleDelete called");
    if (window.confirm("Are you sure you want to delete this personal record?")) {
      onDelete(personalRecord.id);
    }
  };

  return (
    <Container className={appStyles.Content}>
      <h4>{personalRecord.exercise}</h4>
      <p><strong>Weight:</strong> {personalRecord.weight} kg</p>
      <p><strong>Reps:</strong> {personalRecord.reps}</p>
      <p><strong>Date Achieved:</strong> {personalRecord.date_achieved}</p>
      {personalRecord.notes && <p><strong>Notes:</strong> {personalRecord.notes}</p>}
      {isOwner && onEdit && onDelete && (
        <MoreDropdown
          handleEdit={() => {
            console.log("handleEdit called");
            onEdit(personalRecord);
          }}
          handleDelete={handleDelete}
        />
      )}
    </Container>
  );
};

export default PersonalRecordDisplay;