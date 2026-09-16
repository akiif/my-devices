# my-devices

> A website listing all of the tech devices that I have owned.
> Live demo [_here_](https://akiif.github.io/my-devices).

## Table of contents

-   [General info](#general-info)
-   [Technologies](#technologies)
-   [Setup](#setup)
-   [Deployment](#deployment)
-   [Contact](#contact)

## General info

A website listing all of the tech devices that I have owned.

## Technologies

-   Next.js 16 (App Router, static export)
-   React 19
-   TypeScript
-   Tailwind CSS

## Setup

To run this project:

-   Download the project code or clone it using git clone.
-   Make sure you have [NodeJs](https://nodejs.org/en/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) installed in your system.
-   Then, Install it locally using yarn:

```
$ cd my-devices
$ yarn
$ yarn dev
```

## Deployment

The site is hosted on GitHub Pages from the `gh-pages` branch. To publish the latest changes:

```
$ yarn deploy
```

This runs `next build`, which exports the static site into `out/` (served under the `/my-devices` base path), copies `index.html` to `404.html`, and then pushes the contents of `out/` to the `gh-pages` branch using [gh-pages](https://github.com/tschaub/gh-pages). The live site updates a minute or two later.

If the site doesn't update, check that the repository's **Settings → Pages** source is set to **Deploy from a branch** with `gh-pages` / `(root)`.

### Why `--nojekyll`?

The deploy script runs `gh-pages -d out --nojekyll`, which adds an empty `.nojekyll` file to the published branch. GitHub Pages processes sites with Jekyll by default, and Jekyll ignores any folder whose name starts with an underscore. Next.js puts all of its JavaScript and CSS in `_next/`, so without `.nojekyll` those files are never published and the live site loads without styles or interactivity.

## Contact

Created by [@akiif](https://akiif.dev/) - feel free to contact me!