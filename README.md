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
From the discover page, users can view all of the latest songs and playlists that have been added to the platform. The respective sections include buttons that users can click to navigate to see more songs or playlists. On the right panel, users can view a preview of the 5 most recent songs they have liked and a button to navigate to the user's profile page to see the rest of their likes. While logged in the navbar contains a link to upload a song as well as a dropdown menu when clicking on the logged in user's username. The dropdown menu contains links to the displayed pages.
![image](https://user-images.githubusercontent.com/90273783/181930352-b1b7b6d1-cd3a-4462-873c-999886710df0.png)

# Songs
From the Songs Lists page, users can view all songs listed on the site. They can hover over and click on a song's name to be directed to that song's page or the artists name to be taken to their profile page. From the single song page, users can view some specific information pertaining to that song, like/unlike the song by clicking on the green heart icon, and listen to the song by clicking on the play button.
![image](https://user-images.githubusercontent.com/90273783/181932853-ee6c5301-2a92-466a-9792-edb5798afcb0.png)
![image](https://user-images.githubusercontent.com/90273783/181933324-d73510a4-6267-4b19-892e-1834f11b33dc.png)


# Playlists
From the Playlists page, users can view all playlists listed on the site. They can hover over and click on a playlist's name or picture to be directed to that playlist's page or the artist's name to be taken to their profile page. From the single playlist page, users can view some specific information pertaining to that playlist, like/unlike the song by clicking on the green heart icon, and listen to the playlist by clicking on the play button. Users can swith songs by clikcing the back or forward arrows located to the left of the play button. Below the player, the playlist's songs are displayed. Users can like/unlike each song, create a new playlist or add the song to an existing palylist, or direct themselves to the song or artist's page by clicking on the respective links.
![image](https://user-images.githubusercontent.com/90273783/181933381-d499a96e-091b-483f-8886-5885e3c830cd.png)
![image](https://user-images.githubusercontent.com/90273783/181933398-1c67073e-750e-46a1-89a8-357b41424484.png)

# Profile Page
From a user's profile page, the songs the user has uploaded as well as the playlists the user has created with be displayed when clicking on their respective tabs. Clicking on the likes tab will show the user all of the songs they have liked. This information can be viewed for all users when navigating to their profile pages. 
![image](https://user-images.githubusercontent.com/90273783/181933991-90ee57f4-1d09-47a2-9e29-2bd8e7b73759.png)
![image](https://user-images.githubusercontent.com/90273783/181933996-f1dc86d3-eb68-45de-b5a1-a7489e548af8.png)

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

