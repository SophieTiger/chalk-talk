import React from 'react';
import { Container } from 'react-bootstrap';
import { MoreDropdown } from '../../components/MoreDropdown';
import appStyles from "../../App.module.css";

const PersonalRecordDisplay = ({ personalRecord, onEdit, onDelete, isOwner }) => {
  const handleDelete = () => {
    if (window.confirm("are you sure you want to delete this record?")) {
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
      {isOwner && (
        <MoreDropdown
        handleEdit={() => onEdit(personalRecord)}
        handleDelete={handleDelete}
      />
      )}
      
    </Container>
  );
};

export default PersonalRecordDisplay;