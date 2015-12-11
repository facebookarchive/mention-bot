```js
{
  "maxReviewers": 5, // Maximum  number of people to ping in the PR message, default is 3
  "numFilesToCheck": 10, // Number of files to check against, default is 5
  "alwaysNotifyForPaths": [
    {
      "name": "ghuser", // The user's Github username
      "files": ["src/js/**/*.js"] // The array of file globs associated with the user
    }
  ], // users will always be mentioned based on file glob
  "userBlacklist": [], // users in this list will never be mentioned by mention-bot
  "requiredOrgs": [] // mention-bot will only mention user who are a member of one of these organizations
}
```
