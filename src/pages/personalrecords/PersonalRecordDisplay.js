import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MoreDropdown } from "../../components/MoreDropdown";
import styles from "../../styles/PersonalRecordDisplay.module.css";
import btnStyles from "../../styles/Button.module.css";

const PersonalRecordDisplay = ({
  personalRecord,
  onEdit,
  onDelete,
  isOwner,
  showPercentageButton,
}) => {
  const [showPercentages, setShowPercentages] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    onDelete(personalRecord.id);
    setShowDeleteConfirmation(false);
  };

  const calculatePercentages = (weight) => {
    const percentages = [105, 90, 80, 70, 60, 50, 40, 30, 20, 10];
    return percentages.map((percent) => ({
      percent,
      weight: Math.round(weight * (percent / 100)),
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

      <Modal
        show={showDeleteConfirmation}
        onHide={() => setShowDeleteConfirmation(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this personal record?
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowDeleteConfirmation(false)}
          >
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showPercentages} onHide={() => setShowPercentages(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            1 Rep Max Percentages: {personalRecord.exercise}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {calculatePercentages(personalRecord.weight).map(
            ({ percent, weight }) => (
              <p key={percent}>
                {percent}%: {weight} kg
              </p>
            ),
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PersonalRecordDisplay;
