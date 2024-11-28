import React, { useEffect, useState } from 'react';
import PersonalRecordDisplay from './PersonalRecordDisplay';
import { Container } from 'react-bootstrap';
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import { axiosReq } from "../../api/axiosDefaults";

function PersonalRecordList({ profileId, onEdit, onDelete, isOwner, mobile }) {
    console.log("PersonalRecordList props:", { profileId, onEdit, onDelete, isOwner, mobile });
    const [records, setRecords] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const { data } = await axiosReq.get(`/personalrecords/?owner=${profileId}`);
                setRecords(data);
                setHasLoaded(true);
            } catch (err) {
                console.log(err);
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchRecords();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [profileId]);

    return (
        <Container
            className={`${appStyles.Content} ${mobile && "d-lg-none text-center mb-3"}`}
        >
            {hasLoaded ? (
                records.results.length ? (
                    <>
                        <h4>Personal Records <i className="fa-solid fa-medal"></i></h4>
                        {mobile ? (
                            <div className="d-flex justify-content-around">
                                {records.results.slice(0, 3).map((record) => (
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
                            records.results.map((record) => (
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