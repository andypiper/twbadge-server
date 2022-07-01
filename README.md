# TwBadge-Server

[![license](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://github.com/andypiper/twbadges/blob/main/LICENSE) [![Twitter Follow](https://badgen.net/twitter/follow/andypiper)](https://twitter.com/intent/follow?screen_name=andypiper)

## What this is

TwBadges is a simple JSON server that provides data to support [Shields.io](https://shields.io) custom badges for your Open Source README files, to indicate which [Twitter API](https://developer.twitter.com) versions or features your project supports.

It can also serve as a example for how you can set up a similar system to support your own shields.io/endpoint badges.

There's no need to run this just in order get use an API version badge - the code is [deployed and running on Glitch](https://twbadges.glitch.me), and you can just use a snippet of Markdown with the image URLs linked in order to have them show in a README file. Here's [an example, in a Gist](https://gist.github.com/andypiper/6f41242e422235fbae6e68bcce18976e).

If you are looking for code libraries that support **Twitter API v2**...

 - check out [Awesome Modern Twitter API](https://github.com/andypiper/awesome-modern-twitter-api), a community resource of SDKs and libraries supporting the latest Twitter API releases
 - explore the [`twitter-api-v2` topic on GitHub](https://github.com/topics/twitter-api-v2) (and add the topic to your own repositories, to help others to find them)

## Install and run

To repeat: you *do not need* to run your own copy of this code, just in order to use one of the badges that the server supports - there's already a [deployed version](https://twbadges.glitch.me) that enables the badges to work. If you want to explore the code and try it out (useful for building your own Shields.io API endpoint to support your own API, or just to learn about `json-server`), follow the steps below:

### Prerequisites

Before you begin, you'll need a Node.js runtime. It was built and is running on Glitch, and should work with Node 12 through 16+ (currently being built and run on Node 16.x)

### Installing TwBadge-Server

To install TwBadge-Server, simply clone this repository - the app is not currently packaged in a way intended to be installed from a module repository.

Then, install the dependencies (run inside the project directory):

```bash
$ npm install
```

### Running TwBadge-Server

To run TwBadge-Server, follow these steps from the project directory:

```bash
$ node server.js
```

This does two things:

- uses `json-server` to serve a read-only JSON API behind `<hostname>/badges` that delivers each of the individually-named JSON stanzas on `<hostname>/badges/<stanza>`, suitable for use with the [Shields.io Endpoint API](https://shields.io/endpoint) for custom badges.	
- uses Express to serve `public/index.html` as a trivial front end webpage, which lists some available badges.

## Contributing to TwBadge-Server

Pull requests are welcomed. The web front-end is pretty simple right now.

## License

This project uses the Apache License version 2.0.
