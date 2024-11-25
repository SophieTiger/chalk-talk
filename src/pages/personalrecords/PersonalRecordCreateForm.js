import React, { useState, useEffect } from "react";
import PersonalRecordDisplay from "./PersonalRecordDisplay";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import styles from "../../styles/PersonalRecordCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PersonalRecordCreateForm() {
    useRedirect('loggedOut');
    const [personalRecordData, setPersonalRecordData] = useState({
        exercise: "",
        weight: "",
        reps: "",
        date_achieved: "",
        notes: "",
    });

    const { exercise, weight, reps, date_achieved, notes } = personalRecordData;
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [records, setRecords] = useState([]);

    // Fetch existing records on component mount
    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const { data } = await axiosReq.get('/personalrecords/');
                setRecords(data.results); // Assuming paginated results
            } catch (err) {
                console.log(err);
            }
        };

        fetchRecords();
    }, []);

    const handleChange = (event) => {
        setPersonalRecordData({
            ...personalRecordData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('exercise', exercise);
        formData.append('weight', weight);
        formData.append('reps', reps);
        formData.append('date_achieved', date_achieved);
        formData.append('notes', notes);

        try {
            const { data } = await axiosReq.post('/personalrecords/', formData);
            setRecords([data, ...records]); // Add new record to the list
            history.push(`/personalrecords/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                    <Container className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
                        {records.length > 0 ? (
                            records.map(record => (
                                <PersonalRecordDisplay key={record.id} personalRecord={record} />
                            ))
                        ) : (
                            <p>No personal records found. Create one!</p>
                        )}
                    </Container>
                </Col>
                <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                    <Container className={appStyles.Content}>
                        {/* Form fields for creating a new record */}
                        <div className="text-center">
                            {/* Exercise input */}
                            <Form.Group>
                                <Form.Label>Exercise</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="exercise"
                                    value={exercise}
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
                                    value={weight}
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
                                    value={reps}
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
                                    value={date_achieved}
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
                                    value={notes}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            {errors?.notes?.map((message, idx) => (
                                <Alert variant="danger" key={idx}>
                                    {message}
                                </Alert>
                            ))}

                            {/* Buttons */}
                            <Button
                                className={`${btnStyles.Button} ${btnStyles.Green}`}
                                onClick={() => history.goBack()}
                            >
                                Cancel
                            </Button>
                            <Button className={`${btnStyles.Button} ${btnStyles.Green}`} type="submit">
                                Create
                            </Button>
                        </div>
                    </Container>
                </Col>
            </Row>
        </Form >
    );
}

export default PersonalRecordCreateForm;