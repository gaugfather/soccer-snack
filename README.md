# Soccer Snack App

This project was bootstrapped with:
- Create React App
- ETC...

## DB Setup
```
CREATE DATABASE soccersnack;

GRANT ALL PRIVILEGES ON soccersnack.* TO 'soccersnack'@'localhost';

CREATE TABLE team (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(100) NOT NULL, 
    year INT, 
    color VARCHAR(100), 
    identifier VARCHAR(6),
    PRIMARY KEY (id) 
);

CREATE TABLE players (
    id INT NOT NULL AUTO_INCREMENT, 
    team INT NOT NULL, 
    first VARCHAR(100) NOT NULL, 
    PRIMARY KEY (id),  
    CONSTRAINT fk_team FOREIGN KEY (team) REFERENCES team(id) 
);

CREATE TABLE schedule (
    id INT NOT NULL AUTO_INCREMENT,
    team INT NOT NULL,
    field VARCHAR(6),
    day DATE,
    game_time TIME,
    practice_time TIME,
    snack,
    PRIMARY KEY (id),
    CONSTRAINT fk_team_schedule FOREIGN KEY (team)REFERENCES team(id),
    CONSTRAINT fk_snack_schedule FOREIGN KEY (snack) REFERENCES players(id)
);

CREATE TABLE absenses ( 
    id INT NOT NULL AUTO_INCREMENT, 
    schedule INT NOT NULL, 
    player INT NOT NULL, 
    PRIMARY KEY (id), 
    CONSTRAINT absent_schedule FOREIGN KEY (schedule) REFERENCES schedule (id), 
    CONSTRAINT absent_players FOREIGN KEY (player) REFERENCES players (id) 
);

```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
