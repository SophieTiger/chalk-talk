import React from 'react';
import { Container } from 'react-bootstrap';
import appStyles from "../../App.module.css";

const PersonalRecordDisplay = ({ personalRecord }) => {
  return (
    <Container className={appStyles.Content}>
      <h3>{personalRecord.exercise}</h3>
      <p><strong>Weight:</strong> {personalRecord.weight} kg</p>
      <p><strong>Reps:</strong> {personalRecord.reps}</p>
      <p><strong>Date Achieved:</strong> {personalRecord.date_achieved}</p>
      {personalRecord.notes && <p><strong>Notes:</strong> {personalRecord.notes}</p>}
    </Container>
  );
};

export default PersonalRecordDisplay;