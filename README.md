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

`customer-cli --version` | To get the app version.

`customer-cli add` or `customer-cli -a` | To add user in DB.

`customer-cli find <name>` or `customer-cli -f <name>` | To find a specific user from DB.

`customer-cli u <_id>` or `customer-cli -u <_id>` | To update existing user. At first find a user and grab the ObjectID of that user and use it as _id.

`customer-cli remove <_id>` or `customer-cli -r <_id>` | To remove an user from DB. Like update user here at first find a user and grab the ObjectID of that user and use it as _id.

`customer-cli all` or `customer-cli -l` | To get all the users list from DB.