import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/PersonalRecordCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useRedirect } from "../../hooks/useRedirect";


function PersonalRecordForm({ addRecord, updateRecord, currentRecord,
    setCurrentRecord, isEditing, setIsEditing, mobile }) {
    useRedirect('loggedOut');
    const [formData, setFormData] = useState({
        exercise: "",
        weight: "",
        reps: "",
        date_achieved: "",
        notes: "",
    });

    const [errors, setErrors] = useState({});
    const [records, setRecords] = useState([]);

    useEffect(() => {
        if (currentRecord) {
            setFormData(currentRecord);
        }
    }, [currentRecord]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const submitData = new FormData();

        for (const key in formData) {
            submitData.append(key, formData[key]);
        }

        try {
            if (isEditing) {
                const { data } = await axiosReq.put(`/personalrecords/${currentRecord.id}/`, submitData);
                updateRecord(data);
                setIsEditing(false);
            } else {
                const { data } = await axiosReq.post('/personalrecords/', submitData);
                addRecord(data);
            }
            resetForm();
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data || {});
        }
    };

    const resetForm = () => {
        setFormData({ exercise: "", weight: "", reps: "", date_achieved: "", notes: "" });
        setCurrentRecord(null);
    };

    return (
        <Row>
            <Col className={mobile ? "" : "d-none d-md-block"}>
                <Container className={appStyles.Content}>
                    <Form onSubmit={handleSubmit}>
                        <div className="text-center">
                            {/* Exercise input */}
                            <Form.Group>
                                <Form.Label>Exercise</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="exercise"
                                    value={formData.exercise}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors?.exercise?.map((message, idx) => (
                                <Alert variant="danger" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            {/* Weight input */}
                            <Form.Group>
                                <Form.Label>Weight</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="weight"
                                    value={formData.weight}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors?.weight?.map((message, idx) => (
                                <Alert key={idx} variant="danger">
                                    {message}
                                </Alert>
                            ))}

                            {/* Reps input */}
                            <Form.Group>
                                <Form.Label>Reps</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="reps"
                                    value={formData.reps}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors?.reps?.map((message, idx) => (
                                <Alert key={idx} variant="danger">
                                    {message}
                                </Alert>
                            ))}

                            {/* Date achieved input */}
                            <Form.Group controlId="formDate">
                                <Form.Label>Date Achieved</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date_achieved"
                                    value={formData.date_achieved}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors?.date_achieved?.map((message, idx) => (
                                <Alert key={idx} variant="danger">
                                    {message}
                                </Alert>
                            ))}

                            {/* Notes input */}
                            <Form.Group>
                                <Form.Label>Notes</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors?.notes?.map((message, idx) => (
                                <Alert variant="danger" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                            <Button
                                type="submit"
                                className={`${btnStyles.Button} ${btnStyles.Green}`}
                            >
                                {isEditing ? "Update" : "Create"} Record
                            </Button>
                            {isEditing && (
                                <Button
                                    onClick={resetForm}
                                    className={`${btnStyles.Button} ${btnStyles.Green}`}
                                >
                                    Cancel Edit
                                </Button>
                            )}
                        </div>
                    </Form>
                </Container>
            </Col>
        </Row>
    );
}

export default PersonalRecordForm;