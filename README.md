# Data Science Kiosk

The project will deliver a prototype data science kiosk, a web-based self-help tool where the user can enter a query and
the kiosk will triage it, aka classify and tag the query, and return links to resources including: experts in the area (
in data science and sports), software and guidelines on how to tackle the problem, and relevant training materials.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting
service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to
the `gh-pages` branch.
