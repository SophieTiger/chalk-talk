import React from 'react';
import PersonalRecordDisplay from './PersonalRecordDisplay';
import { Container } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";

function PersonalRecordList({ records, onEdit, onDelete, isOwner, mobile }) {
    return (
        <Container
            className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"}`}
        >
            {records ? (
                records.length ? (
                    <>
                        <h4>Personal Records</h4>
                        {mobile ? (
                            <div className="d-flex justify-content-around">
                                {records.slice(0, 3).map((record) => (
                                    <PersonalRecordDisplay
                                        key={record.id}
                                        personalRecord={record}
                                        onEdit={isOwner ? onEdit : null}
                                        onDelete={isOwner ? onDelete : null}
                                        isOwner={isOwner}
                                        mobile
                                    />
                                ))}
                            </div>
                        ) : (
                            records.map((record) => (
                                <PersonalRecordDisplay
                                    key={record.id}
                                    personalRecord={record}
                                    onEdit={isOwner ? onEdit : null}
                                    onDelete={isOwner ? onDelete : null}
                                    isOwner={isOwner}
                                />
                            ))
                        )}
                    </>
                ) : (
                    <p>{isOwner ? "No personal records found. Create one!" : "No personal records found."}</p>
                )
            ) : (
                <Asset spinner />
            )}
        </Container>
    );
}

export default PersonalRecordList;