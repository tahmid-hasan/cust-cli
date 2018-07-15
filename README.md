# CustomerCLI

This is a simple Command Line Interface app in Node.JS using commender.js.

# Installation Guide

Before install it please ensure that NodeJS and NPM have already installed on your computer.

## Install With Command Line

To install this package globally simply execute this command from your CMD or Git Bash or Powershell

`npm install --global https://github.com/tahmid-hasan/cust-cli.git`

or

`npm i -g https://github.com/tahmid-hasan/cust-cli.git`

After install it globally please execute this command to use it from anywhere from your computer

`npm link customer-cli` or `npm ln customer-cli`

# Users Guide

## How to use it

This is the commands you can use from command line for customer cli

`customer-cli --version` | This will show you the version of this app.

`customer-cli add` or `customer-cli a` This command is to add user from command line.

`customer-cli find <name>` or `customer-cli f <name>` This command is to find a specific user from DB.

`customer-cli u <_id>` or `customer-cli u <_id>` This command is to update existing user. At first find a user and grab the ObjectID of that user and use it as _id.

`customer-cli remove <_id>` or `customer-cli r <_id>` This command is to remove an user from DB. Like update user here at first find a user and grab the ObjectID of that user and use it as _id.

`customer-cli list` or `customer-cli l` This command is to get all the users list from DB.