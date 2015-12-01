```js
{
  "maxUsersToPing": 5, // Maximum  number of people to ping in the PR message
  "numFilesToCheck": 10, // Number of files to check against, deafault is 5
  "userWhitelist": [
    {
      "name": "ghuser", // The user's Github username
      "files": "src/js/**/*.js" // The file glob associated with the user
    }
  ], // users will always be mentioned based on file glob
  "userBlacklist": [] // users in this list will never be mentioned by mention-bot
}
```
