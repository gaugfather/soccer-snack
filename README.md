# Soccer Snack App

This project was created with:
- React (front-end)
- Express (back-end)
- mySQL (persistence)
- logs are saved in ./logs
- and is hosted from a raspberrypi via noip at [greenhecksoccer.ddns.net](greenhecksoccer.ddns.net)

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
    snack INT,
    notes TEXT,
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

### `npm ui`

Runs the UI app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm api`

Launches the API app in the development mode.\
Send requests to [http://localhost:5000](http:localhost:5000).

### `npm run dev`

Builds the UI and API apps in development mode  together.

### `npm run prod-deploy`

Builds the UI in production mode, moves it to the server folder, and hosts it from express, port 5000 [http://localhost:5000](http://localhost:5000)