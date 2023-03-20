# Talview-Proctoring-React-Integration
This is a quick sample project which showcase how you can integrated Talview Proview proctoring client in a React + TS based application

## Prerequisites
- Proctoring token
- Domain whitelisting

## Available Scripts

Installing NPM dependency

### `npm install`

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Required Environment variables
- REACT_APP_PROVIEW_TOKEN

	To run in local this key should exist in the `.env` file. While deploying it on the server, this key should come from the `Key management system`.

- PORT
	Default port is 3000. If you want to change you can add PORT to `.env` file to start the application in the port specified.

## Documentation
- [Proctoring Documentation](https://proviewsupport.freshdesk.com/support/solutions/folders/81000293585)