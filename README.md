# Create react redux app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br>
The project includes extra redux packages and improved file structure.

## Table of Contents
- [Dependencies that was added to app created with create-react-app](#dependencies-that-was-added-to-the-app)
- [Quick start](#quick-start)
- [Improved folder Structure](#improved-folder-structure)
- [Available Scripts](#available-scripts)
- [Table of Contents for react-scripts](
  https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md)

## Dependencies that was added to the app
- redux
- react-redux
- redux-saga
- immutable
- react-router-dom
- react-router-redux

devDependencies:
- eslint (based on Airbnb rules)
- pre-commit

## Quick start
**1.** Clone project
```bash
# with SSH
git clone git@github.com:YUzhva/create-react-redux-app.git NEW_PROJECT_NAME

# with HTTPS
git clone https://github.com/YUzhva/create-react-redux-app.git NEW_PROJECT_NAME
```

**2.** Go inside project folder `cd NEW_PROJECT_NAME` and edit project name inside `package.json`
```javascript
// change
{
  "name": "create-react-redux-app",  
}

// to the
{
  "name": "NEW_PROJECT_NAME",  
}
```

**3.** Delete .git folder
```bash
# command for Mac/Linux
rm -rf .git

# command for Windows
rmdir .git
```

**4.** Initialize new git
```bash
git init
git add .
git commit -m "[initial commit] NEW_PROJECT_NAME"
```

:beer: Have fun :beer: (=

## Improved folder Structure

```
- src
  - components // reusable react components without redux
    * ComponentName
      tests
      index.js // entry point for component

  - containers // react components with redux and redux-saga data fetching
    * ContainerName
      tests
      index.js // entry point for container
      constants/actions/reducer/sagas/selectors.js // place container required files in root

  - global-reducer.js // connect other containers reducers here
  - global-sagas.js // connect other containers sagas here
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run lint`
Lints your JavaScript.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
