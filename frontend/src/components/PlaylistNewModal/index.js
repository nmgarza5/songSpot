import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PlaylistNewForm from "./PlaylistNewForm";

function PlaylistNewModal({songId}) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)}>Create Playlist</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PlaylistNewForm songId={songId} onClose={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default PlaylistNewModal;
