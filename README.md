# Example ReactJS Application for XcooBee Cookie Kit use

For further information on the XCK please visit:
- [XcooBee XCK Documentation](https://www.xcoobee.com/docs/developer-documentation/plugins/xcoobee-cookie-kit/)

- [ReactJS Documentation](https://www.xcoobee.com/docs/developer-documentation/plugins/reactjs-cookie-kit/)


## Code

### init

The cookie kit component is first used in `src/components/cookie_kit.jsx` with the `<CookieKit>` tag in `render()`. It is initialized in `App.js` via `import CookieKitWrapper from "./components/cookie_kit";`
            

### use

We use a wrapper component in `cookie_kit.jsx` to bundle our example cookie handler logic for the cookies for this site.

If you like for automatic management of cookies you can use managed cookie declarations. Otherwise you will have to declare a cookie handler and handle user-responses to cookie consent inquiries. See main documentation for further details.

In this example the cookie handler is referenced with this line in init:
`cookieHandler={this.onCookieConsentsChange}` in `cookie_kit.jsx`.




## Available Commands

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## installation

You will need nodejs installed. We recommend nodejs 8 or higher. Go to [nodejs.org](https://nodejs.org) to download and install for your system.

Run `npm install` in the directory where you have unzipped the files.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment


