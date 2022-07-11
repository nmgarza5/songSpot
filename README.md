# SongSpot

SongSpot is a loose clone of SoundCloud, a music sharing/listening platform. Users can navigate the site and view/listen to songs uploaded by other users. Users can upload their own songs and create custom playlists to share with others. Users can like their favorite songs and view them on their profile page. In the future, I plan on utlizing AWS uploads to store audio files as well as images used throughout the site. I look forward to spending more time further developing out additional feature such as pagination, the search function, friends, and continuous audio playing.

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

# Splashpage
From the splashpage, users can to choose to create an account, log into an existing account, or log in as a demo user.
![splashpage](https://user-images.githubusercontent.com/90273783/178118523-7cb08ade-5029-4b92-b633-6807579a8109.png)

# Home/Discover Page
From the discover page, users can view all of the latest songs and playlists that have been added to the platform. The respective sections include buttons that users can click to navigate to see more songs or playlists. On the right panel, users can view a preview of the 5 most recent songs they have liked and a button to navigate to the user's profile page to see the rest of their likes.
![homepage-discover](https://user-images.githubusercontent.com/90273783/178118539-f393252b-e9c7-40af-8b9b-7516168cba20.png)

# Songs
From the Songs Lists page, users can view all songs listed on the site. They can hover over and click on a song's name to be directed to that song's page or the artists name to be taken to their profile page. From the single song page, users can view some specific information pertaining to that song, like/unlike the song by clicking on the green heart icon, and listen to the song by clicking on the play button.
![songs](https://user-images.githubusercontent.com/90273783/178327207-41b4d797-3022-4c49-b45f-7ad01f86c852.png)
![single-song](https://user-images.githubusercontent.com/90273783/178327355-50f009a2-3f94-4b57-9244-9ee7fdab9dae.png)


# Playlists
From the playlists page

# Profile Page
From the songs page


# Getting Started
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

