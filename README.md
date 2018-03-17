githubcli
=========



[![Version](https://img.shields.io/npm/v/githubcli.svg)](https://npmjs.org/package/githubcli)
[![CircleCI](https://circleci.com/gh/jdxcode/githubcli/tree/master.svg?style=shield)](https://circleci.com/gh/jdxcode/githubcli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/jdxcode/githubcli?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/githubcli/branch/master)
[![Codecov](https://codecov.io/gh/jdxcode/githubcli/branch/master/graph/badge.svg)](https://codecov.io/gh/jdxcode/githubcli)
[![Greenkeeper](https://badges.greenkeeper.io/jdxcode/githubcli.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/jdxcode/githubcli/badge.svg)](https://snyk.io/test/github/jdxcode/githubcli)
[![Downloads/week](https://img.shields.io/npm/dw/githubcli.svg)](https://npmjs.org/package/githubcli)
[![License](https://img.shields.io/npm/l/githubcli.svg)](https://github.com/jdxcode/githubcli/blob/master/package.json)

<!-- toc -->
* [Install](#install)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
<!-- install -->
# Install

with yarn:
```
$ yarn global add githubcli
```

or with npm:
```
$ npm install -g githubcli
```
<!-- installstop -->
<!-- usage -->
# Usage

```sh-session
$ githubcli COMMAND
running command...
$ githubcli (-v|--version|version)
githubcli/0.0.0 (darwin-x64) node-v9.8.0
$ githubcli --help [COMMAND]
USAGE
  $ githubcli COMMAND
...
```
<!-- usagestop -->
<!-- commands -->
# Commands

* [githubcli hello [FILE]](#hello-file)
* [githubcli help [COMMAND]](#help-command)
## hello [FILE]

describe the command here

```
USAGE
  $ githubcli hello [FILE]

OPTIONS
  -f, --force
  -n, --name=name  name to print

EXAMPLES
  $ githubcli hello
  hello world from ./src/hello.ts!

  $ githubcli hello --name myname
  hello myname from .src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/jdxcode/githubcli/blob/v0.0.0/src/commands/hello.ts)_

## help [COMMAND]

display help for githubcli

```
USAGE
  $ githubcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v1.1.6/src/commands/help.ts)_
<!-- commandsstop -->
