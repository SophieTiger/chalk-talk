import React, { useEffect, useState } from 'react';
import PersonalRecordDisplay from './PersonalRecordDisplay';
import { Container } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";

function PersonalRecordList({ profileId, onEdit, onDelete, isOwner, mobile, records }) {
    console.log("PersonalRecordList props:", { profileId, onEdit, onDelete, isOwner, mobile, records });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasLoaded(true);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [records]);

    return (
        <Container
            className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"}`}
        >
            {hasLoaded ? (
                records.length ? (
                    <>
                        <h4>Personal Records <i className="fa-solid fa-medal"></i></h4>
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
                    <Container className={appStyles.Content}>
                        <Asset src={NoResults} message={isOwner ? "No personal records found. Create one!" : "No personal records found."} />
                    </Container>
                )
            ) : (
                <Container className={appStyles.Content}>
                    <Asset spinner />
                </Container>
            )}
        </Container>
    );
}

export default PersonalRecordList;