import React, { useEffect, useState } from "react";
import PersonalRecordDisplay from "./PersonalRecordDisplay";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "../../styles/PersonalRecordList.module.css";

function PersonalRecordList({
  profileId,
  onEdit,
  onDelete,
  isOwner,
  mobile,
  records,
  hasMore,
  loadMore,
  showPercentageButton,
}) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasLoaded(true);
      setInitialDataLoaded(true);
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
        <InfiniteScroll
          dataLength={records.length}
          next={loadMore}
          hasMore={hasMore}
          loader={<Asset spinner />}
        >
          {initialDataLoaded ? (
            records.length ? (
              <>
                <h4>
                  Personal Records{" "}
                  <i className={`${styles.Medal} fa-solid fa-medal`}></i>
                </h4>
                {mobile ? (
                  <div className={styles.mobileRecordContainer}>
                    {records.slice(0, 3).map((record) => (
                      <div key={record.id} className={styles.mobileRecordItem}>
                        <PersonalRecordDisplay
                          personalRecord={record}
                          onEdit={isOwner ? onEdit : null}
                          onDelete={isOwner ? onDelete : null}
                          isOwner={isOwner}
                          mobile
                        />
                      </div>
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
                      showPercentageButton={showPercentageButton}
                    />
                  ))
                )}
              </>
            ) : (
              <Container className={appStyles.Content}>
                <Asset
                  src={NoResults}
                  message={
                    isOwner
                      ? "No personal records found. Create one!"
                      : "No personal records found."
                  }
                />
              </Container>
            )
          ) : (
            <Asset spinner />
          )}
        </InfiniteScroll>
      ) : (
        <Container className={appStyles.Content}>
          <Asset spinner />
        </Container>
      )}
    </Container>
  );
}

export default PersonalRecordList;
