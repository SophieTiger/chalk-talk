import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PersonalRecordList from "./PersonalRecordList";
import PersonalRecordForm from "./PersonalRecordForm";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

function PersonalRecordPage() {
    useRedirect('loggedOut');
    const currentUser = useCurrentUser();
    const [records, setRecords] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);

    useEffect(() => {
        if (currentUser) {
            fetchRecords();
        }
    }, [currentUser]);

    const fetchRecords = useCallback(async () => {
        try {
            const { data } = await axiosReq.get('/personalrecords/', {
                params: { owner: currentUser.id },
            });
            setRecords(data.results);
        } catch (err) {
            console.log(err);
        }
    }, [currentUser]);

    useEffect(() => {
        fetchRecords();
    }, [fetchRecords]);

    const addRecord = (newRecord) => {
        setRecords([newRecord, ...records]);
    };

    const updateRecord = (updatedRecord) => {
        setRecords(records.map(record =>
            record.id === updatedRecord.id ? updatedRecord : record
        ));
    };

    const deleteRecord = async (id) => {
        try {
            await axiosReq.delete(`/personalrecords/${id}/`);
            setRecords(records.filter(record => record.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container>
            <Row>
                <Col xs={12} className="d-md-none mb-3">
                    <PersonalRecordForm
                        addRecord={addRecord}
                        updateRecord={updateRecord}
                        currentRecord={currentRecord}
                        setCurrentRecord={setCurrentRecord}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        mobile
                    />
                </Col>
                <Col xs={12} md={7}>
                    {records.length > 0 ? (
                        <PersonalRecordList
                            records={records}
                            onEdit={(record) => {
                                setCurrentRecord(record);
                                setIsEditing(true);
                            }}
                            onDelete={deleteRecord}
                            isOwner={true}
                        />
                    ) : (
                        <p>You don't have any personal records yet. Add your first record!</p>
                    )}
                </Col>
                <Col md={5} className="d-none d-md-block">
                    <PersonalRecordForm
                        addRecord={addRecord}
                        updateRecord={updateRecord}
                        currentRecord={currentRecord}
                        setCurrentRecord={setCurrentRecord}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default PersonalRecordPage;