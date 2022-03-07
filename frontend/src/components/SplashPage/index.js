import "./SplashPage.css";
import LoginFormModal from "../LoginFormModal";
import SignUpFormModal from "../SignUpFormModal";

const SplashPage = () => {
    return (
        <>
            <div className="carosel">
                <img
                    className="image-container"
                    src="/images/record-shatter.jpg"
                    alt="record-shatter"
                ></img>
            </div>
            <div className="text-container">
                <h1>Welcome to SongSpot!</h1>
                <h3>
                    A place to upload, save, and share all of your favorite
                    songs and playlists.
                </h3>
                <div className="btn-container">
                    {/* <LoginFormModal />
                    <SignUpFormModal /> */}
                </div>
            </div>
        </>
    );
};
export default SplashPage;
