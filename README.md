# Documentation

### [Demo app](https://build-your-burger-3bcff.firebaseapp.com/)

This project is using firebase as a backend and is built with [create-react-app](https://github.com/facebook/create-react-app)

## Installation

First clone the project

```bash
git clone 
```

then place yourself in the directory you just cloned and run:

```bash
npm install
```

after installing all the dependencies you'll need to create a `.env` file with the following information

```
FIREBASE_URL=<YOU-FIREBASE-PROJECT-URL>
FIREBASE_KEY=<YOU-FIREBASE-PROJECT-KEY>
```

Then just run:

```bash
npm start
```

and the browser will open with a nice burger app.

## Testing

To run the test just type

```bash
npm test
```

We use [Enzyme](https://github.com/airbnb/enzyme) and [Jest](https://facebook.github.io/jest/)