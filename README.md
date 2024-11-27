


## Bugs
-   The issue was I moved the fetching of records into the PersonalRecordList component, which was causing it to always fetch all records regardless of the user profile being viewed. To fix this, I needed to pass the user ID to the PersonalRecordList and use it in the API call.

