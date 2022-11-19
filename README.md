# Automated Visual Testing in Ember

This repository contains the code as presented in the talk on EmberFest 2022 titled [Automated Visual Testing in Ember](https://www.youtube.com/watch?v=m90m9lVEFlY). It contains a dummy Ember application which visualizes holidays of multiple users on a calendar. It serves as an example on how visual testing can be set up and made to run reliably.

[![Thumbnail](thumbnail.jpeg)](https://www.youtube.com/watch?v=m90m9lVEFlY)

> Ember gives developers the power to write tests and be confident about deployments. But have you ever made a change that broke your application layout while still passing all tests?
> In this talk we’ll explore the world of visual testing to keep your app pixel perfect and have that peace of mind when deploying. By the end, you should be able to understand how visual testing works and how to set it up in a reliable way, even for applications with complex data structures and time dependent logic.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-automated-visual-testing`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

Example response data can be adjusted in [holidays.json](/public/holidays.json).

### Running visual tests

First create a [Percy project](https://percy.io/) to view your rendered screenshots online. Then run the visual tests with the Percy token as environment variable.

```bash
PERCY_TOKEN=your-percy-token npm run test:visual
```

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)
