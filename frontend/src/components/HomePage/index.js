import "./HomePage.css";
import SongList from "../SongList";

const ActivityPage = () => {
    return (
        <>
            <div className="activity-container">
                <div className="main-container">
                    <div className="inner-main">
                        <h2>Recently Added</h2>
                        <div className="song-container">
                            <SongList className="song" />
                        </div>
                        <button className="see-more-btn">See More...</button>
                    </div>
                    {/* <div className="inner-main">Charts: Top 50 Songs</div>
                    <div className="inner-main">Your Top Songs</div> */}
                </div>
                <div className="side-container">
                    <div className="inner-side">Your Likes</div>
                    <div className="inner-side">Listening History</div>
                </div>
            </div>
            ;
        </>
    );
};

export default ActivityPage;
