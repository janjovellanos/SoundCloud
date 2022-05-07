# Authenticate Me - Deploying your Express app to Heroku

Heroku is an web application that makes deploying applications easy for a
beginner.

Before you begin deploying, **make sure to remove any `console.log`'s or
`debugger`'s in any production code**. You can search your entire project folder
if you are using them anywhere.

You will set up Heroku to run on a production, not development, version of your
application. When a Node.js application like yours is pushed up to Heroku, it is
identified as a Node.js application because of the `package.json` file. It runs
`npm install` automatically. Afterwards, it will automatically run `npm start`.

In the following phases, you will configure your application to work in
production, not just in development, and configure the `package.json` scripts
for `install` and `start` scripts to install and start the Express production
server.

## Phase 1: Heroku Connection

If you haven't created a Heroku account yet, create one [here][Create Heroku
Account].

Add a new application in your [Heroku dashboard] named whatever you want. Under
the "Resources" tab in your new application, click "Find more add-ons" and add
the "Heroku Postgres" add-on with the free Hobby Dev setting.

In your terminal, install the [Heroku CLI]; for WSL users, see "Standalone
Installation" Instructions. Afterwards, login to Heroku in your
terminal by running the following:

```bash
heroku login
```

Add Heroku as a remote to your project's git repository in the following command
and replace `<name-of-Heroku-app>` with the name of the application you created
in the [Heroku dashboard].

```js
heroku git:remote -a <name-of-Heroku-app>
```

Next, you will set up your Express application to be deployable to Heroku.

## Phase 2: Setting up your Express application

Your Express backend's `package.json` should include scripts to run the
`sequelize` CLI commands.

The `backend/package.json`'s scripts should now look like this:

```json
  "scripts": {
    "sequelize": "sequelize",
    "sequelize-cli": "sequelize-cli",
    "start": "per-env",
    "start:development": "nodemon -r dotenv/config ./bin/www",
    "start:production": "node ./bin/www"
  },
```

Initialize a `package.json` file at the very root of your project directory
(outside of both the `backend` and `frontend` folders) with `npm init -y`.
The scripts defined in this `package.json` file will be run by Heroku, not
the scripts defined in the `backend/package.json`.

When Heroku runs `npm install`, it should install packages for the `backend`.
Overwrite the `install` script in the root `package.json` with:

```bash
npm --prefix backend install backend
```

This will run `npm install` in the `backend` folder.

Define a `sequelize` script that will run `npm run sequelize` in the `backend`
folder.

Finally, define a `start` that will run `npm start` in the `backend folder.

The root `package.json`'s scripts should look like this:

```json
  "scripts": {
    "install": "npm --prefix backend install backend",
    "dev:backend": "npm install --prefix backend start",
    "sequelize": "npm run --prefix backend sequelize",
    "sequelize-cli": "npm run --prefix backend sequelize-cli",
    "start": "npm start --prefix backend"
  },
```

The `dev:backend` script is optional and will not be used for Heroku.

Finally, commit your changes.

## Phase 3: Deploy to Heroku

Once you're finished setting this up, navigate to your application's Heroku
dashboard. Under "Settings" there is a section for "Config Vars". Click the
`Reveal Config Vars` button to see all your production environment variables.
You should have a `DATABASE_URL` environment variable already from the
Heroku Postgres add-on.

Add environment variables for `JWT_EXPIRES_IN` and `JWT_SECRET` and any other
environment variables you need for production.

You can also set environment variables through the Heroku CLI you installed
earlier in your terminal. See the docs for [Setting Heroku Config Variables].

Push your project to Heroku. Heroku only allows the `master` branch to be
pushed. But, you can alias your branch to be named `master` when pushing to
Heroku. For example, to push a branch called `login-branch` to `master` run:

```bash
git push heroku login-branch:master
```

If you do want to push the `master` branch, just run:

```bash
git push heroku master
```

You may want to make two applications on Heroku, the `master` branch site that
should have working code only. And your `staging` site that you can use to test
your work in progress code.

Now you need to migrate and seed your production database.

Using the Heroku CLI, you can run commands inside of your production
application just like in development using the `heroku run` command.

For example to migrate the production database, run:

```bash
heroku run npm run sequelize db:migrate
```

To seed the production database, run:

```bash
heroku run npm run sequelize db:seed:all
```

Note: You can interact with your database this way as you'd like, but beware
that  `db:drop` **cannot** be run in the Heroku environment. If you want to drop
and create the database, you need to remove and add back the "Heroku Postgres"
add-on.

Another way to interact with the production application is by opening a bash
shell through your terminal by running:

```bash
heroku bash
```

In the opened shell, you can run things like `npm run sequelize db:migrate`.

Open your deployed site and check to see if you successfully deployed your
Express application to Heroku!

If you see an `Application Error` or are experiencing different behavior than
what you see in your local environment, check the logs by running:

```bash
heroku logs
```

If you want to open a connection to the logs to continuously output to your
terminal, then run:

```bash
heroku logs --tail
```

The logs may clue you into why you are experiencing errors or different
behavior.

### Wrapping up

You can also open your site in the browser with `heroku open`. If it works,
congratulations, you've created a production-ready, dynamic, full-stack website
that can be securely accessed anywhere in the world! Give yourself a pat on the
back. You're a web developer!

[Heroku Dashboard]: https://dashboard.heroku.com/
[Create Heroku Account]: https://signup.heroku.com/
[Heroku CLI]: https://devcenter.heroku.com/articles/heroku-command-line
[Setting Heroku Config Variables]: https://devcenter.heroku.com/articles/config-vars
[Content Security Policy]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP