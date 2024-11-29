import React from 'react';
import { Container } from 'react-bootstrap';
import { MoreDropdown } from '../../components/MoreDropdown';
import appStyles from "../../App.module.css";
import styles from "../../styles/PersonalRecordDisplay.module.css"

const PersonalRecordDisplay = ({ personalRecord, onEdit, onDelete, isOwner }) => {
  console.log("PersonalRecordDisplay props:", { personalRecord, onEdit, onDelete, isOwner });

  const handleDelete = () => {
    console.log("handleDelete called");
    if (window.confirm("Are you sure you want to delete this personal record?")) {
      onDelete(personalRecord.id);
    }
  };

  return (
    <Container className={styles.personalRecordItem}>
      <h4>{personalRecord.exercise}</h4>
      <p>Weight: {personalRecord.weight} kg</p>
      <p>Reps: {personalRecord.reps}</p>
      <p>Date Achieved: {personalRecord.date_achieved}</p>
      {personalRecord.notes && <p>Notes: {personalRecord.notes}</p>}
      {isOwner && onEdit && onDelete && (
        <MoreDropdown
          handleEdit={() => {
            console.log("handleEdit called");
            onEdit(personalRecord);
          }}
          handleDelete={handleDelete}
          className={styles.darkMoreDropdown}
        />
      )}
    </Container>
  );
};

export default PersonalRecordDisplay;