import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PlaylistNewForm from "./PlaylistNewForm";

function PlaylistNewModal({songId, showMenu}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)}>Create Playlist</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PlaylistNewForm showMenu={showMenu} songId={songId} onClose={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default PlaylistNewModal;
