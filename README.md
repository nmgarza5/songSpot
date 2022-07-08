# SongSpot

SongSpot is a loose clone of SoundCloud, a music sharing/listening platform. Users can navigate the site and view/listen to songs uploaded by other users. Users can upload their own songs and create custom playlists to share with others. Users can like their favorite songs and view them on their profile page. In the future, I plan on utlizing AWS uploads to store audio files as well as images used throughout the site. I look forward to spending more time further developing out additional feature such as the search function, friends, and continuous audio playing.

## Features
- Create an account, sign in, or log in as a demo user
- Create, view, edit, and delete
   - Songs
   - Playlists
- Create, view, delete
   - Likes
- User Profiles
   
Upcoming features: 
- Search
- AWS
- Friends

## Technologies Used
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="70px" width="70px"/>&#160;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="70px" width="70px"/>&#160;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" height="70px" width="70px"/>&#160;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height="70px" width="70px"/>&#160;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="70px" width="70px" />&#160;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" height="70px" width="70px"/>&#160;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="70px" width="70px"/>&#160;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="70px" width="70px"/>&#160;
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" height="70px" width="70px"/>&#160;

## Getting Started
1. Clone this repo.
    - `git clone git@github.com:nmgarza5/songSpot.git`
    
2. Install dependencies from the root directory.
    - `npm install`
    
3. Create a Postgresql user with CREATDB and PASSWORD in PSQL.
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

