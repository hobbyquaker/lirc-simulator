# lirc-simulator

[![NPM version](https://badge.fury.io/js/lirc-simulator.svg)](http://badge.fury.io/js/lirc-simulator)
[![Dependency Status](https://img.shields.io/gemnasium/hobbyquaker/lirc-simulator.svg)](https://gemnasium.com/github.com/hobbyquaker/lirc-simulator)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![License][mit-badge]][mit-url]


> A rudimentary LIRC simulator

This tiny piece of software simulates a [lircd](http://www.lirc.org/) and is listening on 127.0.0.1:8765. It replies 
`SUCCESS` without `DATA` to all received commands. 2 Seconds after a client connects it broadcasts a single button press 
of `button1` of `remote1`. Another 2 seconds later `button2` will be pressed 3 times with incrementing repeat counter
and 400ms pause between each press. That's all. ;-)

I use this for automated testing of [lirc-simulator](https://github.com/hobbyquaker/lirc-simulator).


# Install

`npm install -g lirc-simulator`


# Usage

Just call `lirc-simulator` - there is no config file and no command line parameters.


# License

MIT © [Sebastian Raff](https://github.com/hobbyquaker)

[mit-badge]: https://img.shields.io/badge/License-MIT-blue.svg?style=flat
[mit-url]: LICENSE
