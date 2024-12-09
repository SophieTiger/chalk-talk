
## Bugs
-   The issue was I moved the fetching of records into the PersonalRecordList component, which was causing it to always fetch all records regardless of the user profile being viewed. To fix this, I needed to pass the user ID to the PersonalRecordList and use it in the API call.

-   Bug on PersonalRecordPage when fetching the personal records for the owner and logged in user making a text from a ternary from the PersonalRecordPage display before the loading spinner.
Solution: Making the PersonalRecordList component handle all states (loading, empty, and populated) without interference from PersonalRecordPage. This approach is more consistent and avoids the premature display of the "no records" message.

-   Bug on profile page briefly flashing No results before personal records list is shown.
Solution: Add new state variable, initialDataLoaded, setInitialDataLoaded, to track whether the initial data has been loaded. Then update the useEffect hook to set this state when the initial data is loaded and modify the return statement to use this new state with initialDataLoaded 