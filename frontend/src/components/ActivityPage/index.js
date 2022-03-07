import "./ActivityPage.css";

const ActivityPage = () => {
    return (
        <>
            <div className="activity-container">
                <div className="main-container">
                    Main container
                    <div className="inner-main">
                        <h2>Recently Played</h2>
                        <div className="song-container">
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                            <div className="song">Song</div>
                        </div>
                        <button className="see-more-btn">See More...</button>
                    </div>
                    <div className="inner-main">Charts: Top 50 Songs</div>
                    <div className="inner-main">Your Top Songs</div>
                </div>
                <div className="side-container">
                    Side container
                    <div className="inner-side">Your Likes</div>
                    <div className="inner-side">Listening History</div>
                </div>
            </div>
            ;
        </>
    );
};

export default ActivityPage;
