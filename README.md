# mention-bot

Do you have a GitHub project that is too big for people to subscribe to all the notifications? The mention bot will automatically mention potential reviewers on pull requests. It helps getting faster turnaround on pull requests by involving the right people early on.

<img width="769" src="https://cloud.githubusercontent.com/assets/197597/11023035/a2f8733e-8622-11e5-84df-49a3d9425938.png">

Currently, this only works on public repositories.

## How To Use?

- Go to your project on GitHub > Settings > Webhooks & services > Add Webhook
- Payload URL: `https://mention-bot.herokuapp.com/`
- Let me select individual events > Check `Pull Request`
- Add Webhook

And you are done. Next time a pull request is opened, you should see the bot add a comment ;)

## How Does It Work?

Every time there's a new pull request, GitHub wakes up the mention bot <img src="https://avatars0.githubusercontent.com/u/15710697?v=3&s=40" width="20" height="20" /> using Webhooks.

Once awakened, the bot will download the diff of the pull request and figure out which files and lines have been touched.

<img width="1139" src="https://cloud.githubusercontent.com/assets/197597/11022818/92edd20e-861d-11e5-8c44-c64c1a7de79f.png">

For these, it will download the associated blame to figure out who last touched that line last as they may be a good reviewer.

<img width="923" src="https://cloud.githubusercontent.com/assets/197597/11022820/973166aa-861d-11e5-83b1-b05e8228f974.png">

After running the algorithm described in the next section, it will comment on the pull request notifying those people and go back to sleep.

<img width="769" src="https://cloud.githubusercontent.com/assets/197597/11022875/3e4949de-861f-11e5-8459-573a8dbc9013.png">

## Algorithm

The problem of finding who the best reviewers are is really hard and I don't think that any algorithm will achieve perfection. Instead, what we want here is to be **best effort**. We want to notify people that are likely going to be interested and be good reviewers. If we ping a few too many people that's not the end of the world neither if we don't ping the exact right person.

We use two heuristics:
- If a line was deleted or modified, the person that last touched that line is likely going to care about this pull request.
- If a person last touched many lines in the file where the change was made, s/he will want to be notified.

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

## How to run the bot on GitHub Enterprise

If you want to run the bot on your GitHub Enterprise instance, add the GHE host and path prefix to the config section of package.json

```json
"config": {
  "gheHost": "github.my-GHE-enabled-company.com",
  "ghePathPrefix": "/api/v3"
}
```

## License
mention-bot is BSD-licensed. We also provide an additional patent grant.
