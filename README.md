# TwBadge-Server

[![license](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://github.com/andypiper/twbadges/blob/main/LICENSE) [![Twitter Follow](https://badgen.net/twitter/follow/andypiper)](https://twitter.com/intent/follow?screen_name=andypiper)

TwBadges is a simple JSON server that provides data to support Shields.io custom badges for your Open Source README files, to indicate which Twitter API versions or features your project supports.

It can also serve as a simple example for how you can set up a similar system to support your own shields.io/endpoint badges.

## Prerequisites

Before you begin, you'll need a Node.js runtime. It was built and is running on Glitch, and should work with Node 10 through 16 (currently being built and run on Node 16.x)

## Installing TwBadge-Server

To install TwBadge-Server, simply clone this repository - the app is not currently packaged in a way intended to be installed from a module repository.

## Using TwBadge-Server

To use TwBadge-Server, follow these steps from the project directory:

```
$ node server.js
```

This does two things:

- uses Express to serve `public/index.html` as a trivial front end webpage, which shows the available badges
- uses json-server to serve a read-only JSON API behind `<hostname>/badges` that delivers each of the individually-named JSON stanzas on `<hostname>/badges/<stanza>`, suitable for use with the Shields.io Endpoint API for custom badges.

## Contributing to TwBadge-Server

Pull requests are welcomed. Code of conduct thing

## License

This project uses the Apache License version 2.0.
