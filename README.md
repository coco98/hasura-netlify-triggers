# Netlify functions as Hasura event triggers

This repo has a sample function to get started with using netlify functions as hasura event triggers.

### Netlify instructions:
- Add this git repo to netlify
- `git push origin master` will trigger a netlify deploy
- Your function will get deployed and show up on the netlify dashboard

### Hasura instructions:

- On the Hasura console, head to the events tab and create an event trigger
- Choose the table and the operations that you want to trigger events on
- Set the webhook URL to your netlify function URL and create the trigger
- Run a GraphQL mutation or make a change to your data in the right table
- Head to netlify function logs on the netlify dashboard to see how the netlify function handled the event!
