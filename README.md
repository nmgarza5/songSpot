# SongSpot
This is a clone of [SoundCloud](https://soundcloud.com/). Access the [SongSpot MVP.](https://github.com/nmgarza5/songSpot/wiki/MVP's).
## Index
| [MVP Feature List](https://github.com/nmgarza5/songSpot/wiki/MVP's) |  [Database Schema](https://github.com/nmgarza5/songSpot/wiki/Database-Schema) |
## Technologies Used
| Javascript | Node.js | React | Redux | Express | Postgresql | Sequelize | HTML5 | CSS3 |
## Getting Started
1. Clone this repo.
    - `git clone git@github.com:nmgarza5/songSpot.git`
    
2. Install dependencies from the root directory.
    - `npm install`
    
3. Create a Postgresql user with CREATEDB and PASSWORD in PSQL.
    - `CREATE USER <name> WITH CREATEDB and PASSWORD in PSQL`
    
4. Create a .env file in the backend directory based on the .env.example found within the respective directory.

5. Enter your username and password information into your .env file along with your desired database name, 
      a secured combination of characters for your JWT, and your desired PORT (preferable 5000).
      
6. Add the following proxy to your package.json file within your frontend directory, replacing or keeping the 5000 port to match your PORT configuraiton in your .env file.
    - `"proxy": "http://localhost:5000"`

7. Create Database, Migrate, and Seed Models.
    - `npx dotenv sequelize db:create`
    - `npx dotenv sequelize db:migrate`
    - `npx dotenv sequelize db:seed:all`

8. Start the server in the backend directory.
    - `npm start`

9. Start the server in the frontend directory, which should open the project in your default browser. If not, navigate to [http://localhost:3000](http://localhost:3000)
    - `npm start`

10. You can use the Demo user or create an account to begin using SongSpot.


## Features
Logged out users can perform the following actions.
   - View Songs
   - View Playlists
   - Listen to Songs/Playlists

Logged in users can perform the following actions
   - View/Add/Edit/Delete Songs
   - View/Add/Edit/Delete Playlists
   - Listen to Songs/Playlists
