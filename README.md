# mention-bot [![Build Status](https://travis-ci.org/facebook/mention-bot.svg?branch=master)](https://travis-ci.org/facebook/mention-bot)

Do you have a GitHub project that is too big for people to subscribe to all the notifications? The mention bot will automatically mention potential reviewers on pull requests. It helps getting faster turnaround on pull requests by involving the right people early on.

<img width="769" src="https://cloud.githubusercontent.com/assets/197597/11023035/a2f8733e-8622-11e5-84df-49a3d9425938.png">

## How To Use?

- Go to
 - your project on GitHub > Settings > Webhooks & services > Add Webhook or
 - your organization on GitHub > Settings > Webhooks > Add Webhook
- Payload URL: (https://mention-bot.herokuapp.com/)
- Content type: `application/json`
- Secret: Leave blank
- Let me select individual events > Check `Pull Request`
- Add Webhook

And you are done. Next time a pull request is opened, you should see the bot add a comment ;)

## Configuration

The bot can be configured by adding a `.mention-bot` file to the base directory of the repo. Here's a list of the possible options:

```js
{
  "maxReviewers": 5, // Maximum  number of people to ping in the PR message, default is 3
  "numFilesToCheck": 10, // Number of files to check against, default is 5
  "message": "@pullRequester, thanks! @reviewers, please review this.",
             // custom message using @pullRequester and @reviewers
  "alwaysNotifyForPaths": [
    {
      "name": "ghuser", // The user's Github username
      "files": ["src/js/**/*.js"], // The array of file globs associated with the user
      "skipTeamPrs": false // mention-bot will exclude the creator's own team from mentions
    }
  ], // Users will always be mentioned based on file glob
  "fallbackNotifyForPaths": [
    {
      "name": "ghuser", // The user's Github username
      "files": ["src/js/**/*.js"], // The array of file globs associated with the user
      "skipTeamPrs": false // mention-bot will exclude the creator's own team from mentions
    }
  ], // Users will be mentioned based on file glob if no other user was found
  "findPotentialReviewers": true, // mention-bot will try to find potential reviewers based on files history, if disabled, `alwaysNotifyForPaths` is used instead
  "fileBlacklist": ["*.md"], // mention-bot will ignore any files that match these file globs
  "userBlacklist": [], // Users in this list will never be mentioned by mention-bot
  "userBlacklistForPR": [], // PR made by users in this list will be ignored
  "requiredOrgs": [], // mention-bot will only mention user who are a member of one of these organizations
  "actions": ["opened"], // List of PR actions that mention-bot will listen to, default is "opened"
  "skipAlreadyAssignedPR": false, // mention-bot will ignore already assigned PR's
  "skipAlreadyMentionedPR": false, // mention-bot will ignore if there is already existing an exact mention
  "assignToReviewer": false, // mention-bot assigns the most appropriate reviewer for PR
  "skipTitle": "", // mention-bot will ignore PR that includes text in the title,
  "withLabel": "", // mention-bot will only consider PR's with this label. Must set actions to ["labeled"].
  "delayed": false, // mention-bot will wait to comment until specified time in `delayedUntil` value
  "delayedUntil": "3d", // Used if delayed is equal true, permitted values are: minutes, hours, or days, e.g.: '3 days', '40 minutes', '1 hour', '3d', '1h', '10m'
  "skipCollaboratorPR": false // mention-bot will ignore if PR is made by collaborator
}
```

The glob matching is an extended form of glob syntax performed by [`minimatch`](https://github.com/isaacs/minimatch), with the default options; read [the `minimatch` README](https://github.com/isaacs/minimatch/blob/master/README.md) for more details.

**Note:** The `.mention-bot` file must be valid JSON.

The default config can be overridden via environment config. e.g.:

```zsh
MENTION_BOT_CONFIG={"maxReviewers":1,"delayed":true}
```
---

## How Does It Work?

Every time there's a new pull request, GitHub wakes up the mention bot <img src="https://avatars0.githubusercontent.com/u/15710697?v=3&s=40" width="20" height="20" /> using Webhooks.

Once awakened, the bot will download the diff of the pull request and figure out which files and lines have been touched.

<img width="1139" src="https://cloud.githubusercontent.com/assets/197597/11022818/92edd20e-861d-11e5-8c44-c64c1a7de79f.png">

For these, it will download the associated blame to figure out who last touched that line, as they may be a good reviewer.

<img width="923" src="https://cloud.githubusercontent.com/assets/197597/11022820/973166aa-861d-11e5-83b1-b05e8228f974.png">

After running the [algorithm](#algorithm) described in the next section, it will comment on the pull request notifying those people and go back to sleep.

<img width="769" src="https://cloud.githubusercontent.com/assets/197597/11022875/3e4949de-861f-11e5-8459-573a8dbc9013.png">

## Algorithm

The problem of finding who the best reviewers are is really hard and I don't think that any algorithm will achieve perfection. Instead, what we want here is to be **best effort**. We want to notify people that are likely going to be interested and be good reviewers. If we ping a few too many people that's not the end of the world neither if we don't ping the exact right person.

We use two heuristics:
- If a line was deleted or modified, the person that last touched that line is likely going to care about this pull request.
- If a person last touched many lines in the file where the change was made, they will want to be notified.

**Initialization**

Create two empty hash map:
- `DeletedLines` for authors of deleted lines.
- `AllLines` for authors of lines in the changed files.

**Filling the data structures**

- for each deleted line, find the author in the blame and increase its count by one in the `DeletedLines` map.
- for each line in every file that was changed, find the author in the blame and increase its count by one in the `AllLines` map.

Since getting the blame information is sending an http request to GitHub it is pretty expensive. We first sort the files by number of deleted lines and only pick the top 5. Since we're only looking for 3 names and the algorithm is best effort, this greatly speeds up the algorithm in case of large pull requests for little loss in precision.

**Putting it all together**

- delete from `AllLines` all the names that appear in both maps. We don't want to mention the same person twice.
- sort each map by count
- concat `DeletedLines` with `AllLines`
- take the first three names

## How To Contribute or Run Your Own Bot?

If you want to use a different account for the bot, change the message or extend it with more functionalities, we've tried to make it super easy:

```bash
git clone https://github.com/facebook/mention-bot.git
cd mention-bot
npm install
npm start
# Follow the instructions there
```

Alternatively, click the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

If you would like the mention-bot to function on private repositories, set the `GITHUB_USER` and `GITHUB_PASSWORD` environment variables. You must disable two-factor authentication or you will receive a console log like this: `Login to ${USERNAME} failed`.

You can also set a `REQUIRED_ORG` environment variable, so you don't have to configure it in each repository of your organization.

You can also build deploy it as a Docker image:

```bash
docker build -t mention-bot .
docker run -e GITHUB_USER="a" -p 5000:5000  mention-bot
```

## Configuring a custom message

If you want to change the default message, you can write your custom logic in [message.js](https://github.com/facebook/mention-bot/blob/master/message.js), or add 'message' in the [.mention-bot configuration](#configuration) file.

## How to run the bot on GitHub Enterprise

If you want to run the bot on your GitHub Enterprise instance, add the GHE host and path prefix to the config section of package.json

```json
"config": {
  "gheHost": "github.my-GHE-enabled-company.com",
  "ghePathPrefix": "/api/v3"
}
```

If you use `http` protocol, the config section like this:

```json
"config": {
  "gheHost": "github.my-GHE-enabled-company.com",
  "ghePathPrefix": "/api/v3",
  "gheProtocol": "http",
  "ghePort": 80
}
```


## Programmatic API

When you require `mention-bot` you will get all the functions exposed by [`mention-bot.js`](https://github.com/facebook/mention-bot/blob/master/mention-bot.js) module. You are expected to manage your own server and also connection to the github repository.

```
npm install mention-bot github
```

API can be used like this:

```js
var mentionBot = require('mention-bot');
var GitHubApi = require('github');

var github = new GitHubApi({ version: '3.0.0' });
github.authenticate({
  type: 'oauth',
  token: '...token...'
});

mentionBot
  .guessOwnersForPullRequest(
    'https://github.com/fbsamples/bot-testing', // repo
    65, // pull request number
    'mention-bot', // user that created the pull request
    'master', // branch
    { maxReviewers: 3 }, // config
    github
  )
  .then(function(users) {
    // array with user names which should be included in review
    console.log(users);
  })
  .catch(function(err) {
    console.error(err);
  });
```

## License

mention-bot is [BSD-licensed](https://github.com/facebook/mention-bot/blob/master/LICENSE). We also provide an [additional patent grant](https://github.com/facebook/mention-bot/blob/master/PATENTS).
