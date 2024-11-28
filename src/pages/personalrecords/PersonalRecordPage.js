import React, { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PersonalRecordList from "./PersonalRecordList";
import PersonalRecordForm from "./PersonalRecordForm";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import appStyles from "../../App.module.css";

function PersonalRecordPage() {
    useRedirect('loggedOut');
    const currentUser = useCurrentUser();
    const [records, setRecords] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);

    const fetchRecords = useCallback(async () => {
        if (currentUser) {
            try {
                const { data } = await axiosReq.get('/personalrecords/', {
                    params: { owner: currentUser.id },
                });
                setRecords(data.results);
            } catch (err) {
                console.log(err);
            }
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
        <Row>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <Col xs={12} className="d-lg-none mb-3">
                    <Container className={appStyles.Content}>
                        <PersonalRecordForm
                            addRecord={addRecord}
                            updateRecord={updateRecord}
                            currentRecord={currentRecord}
                            setCurrentRecord={setCurrentRecord}
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            mobile
                        />
                    </Container>
                </Col>
                <Container className={appStyles.Content}>
                        <PersonalRecordList
                            profileId={currentUser?.profile_id}
                            records={records}
                            onEdit={(record) => {
                                setCurrentRecord(record);
                                setIsEditing(true);
                            }}
                            onDelete={deleteRecord}
                            isOwner={true}
                        />
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <Container className={appStyles.Content}>
                    <PersonalRecordForm
                        addRecord={addRecord}
                        updateRecord={updateRecord}
                        currentRecord={currentRecord}
                        setCurrentRecord={setCurrentRecord}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                    />
                </Container>
            </Col>
        </Row>
    );
}

export default PersonalRecordPage;