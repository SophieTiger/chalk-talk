import React, { useState } from 'react';
import { Container, Button, Modal } from 'react-bootstrap';
import { MoreDropdown } from '../../components/MoreDropdown';
import appStyles from "../../App.module.css";
import styles from "../../styles/PersonalRecordDisplay.module.css";
import btnStyles from "../../styles/Button.module.css";

const PersonalRecordDisplay = ({ personalRecord, onEdit, onDelete, isOwner, showPercentageButton }) => {
  const [showPercentages, setShowPercentages] = useState(false);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this personal record?")) {
      onDelete(personalRecord.id);
    }
  };

  const calculatePercentages = (weight) => {
    const percentages = [105, 90, 80, 70, 60, 50, 40, 30, 20, 10];
    return percentages.map(percent => ({
      percent,
      weight: Math.round(weight * (percent / 100))
    }));
  };

  return (
    <Container className={styles.personalRecordItem}>
      <div className={styles.headerContainer}>
        <h4 className={styles.exerciseTitle}>{personalRecord.exercise}</h4>
        {showPercentageButton && (
          <Button
            variant="outline-primary"
            size="sm"
            onClick={() => setShowPercentages(true)}
            className={`${styles.percentageButton} ${btnStyles.Green} ${btnStyles.Button}`}
          >
            %
          </Button>
        )}
      </div>
      <p>Weight: {personalRecord.weight} kg</p>
      <p>Reps: {personalRecord.reps}</p>
      <p>Date Achieved: {personalRecord.date_achieved}</p>
      {personalRecord.notes && <p>Notes: {personalRecord.notes}</p>}
      {isOwner && onEdit && onDelete && (
        <MoreDropdown
          handleEdit={() => onEdit(personalRecord)}
          handleDelete={handleDelete}
          className={styles.darkMoreDropdown}
        />
      )}

      <Modal show={showPercentages} onHide={() => setShowPercentages(false)}>
        <Modal.Header closeButton>
          <Modal.Title>1 Rep Max Percentages: {personalRecord.exercise}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {calculatePercentages(personalRecord.weight).map(({ percent, weight }) => (
            <p key={percent}>{percent}%: {weight} kg</p>
          ))}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PersonalRecordDisplay;