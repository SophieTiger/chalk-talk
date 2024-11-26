import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PersonalRecordList from "./PersonalRecordList";
import PersonalRecordForm from "./PersonalRecordForm";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PersonalRecordPage() {
    useRedirect('loggedOut');
    const [records, setRecords] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentRecord, setCurrentRecord] = useState(null);

    useEffect(() => {
        fetchRecords();
    }, []);

    const fetchRecords = async () => {
        try {
            const { data } = await axiosReq.get('/personalrecords/');
            setRecords(data.results);
        } catch (err) {
            console.log(err);
        }
    };

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
                <Col md={7}>
                    <PersonalRecordList 
                        records={records} 
                        onEdit={(record) => {
                            setCurrentRecord(record);
                            setIsEditing(true);
                        }}
                        onDelete={deleteRecord}
                    />
                </Col>
                <Col md={5}>
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