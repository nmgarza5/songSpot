import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PlaylistNewForm from "./PlaylistNewForm";

function PlaylistNewModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)}>Create New Playlist</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PlaylistNewForm onClose={() => setShowModal(false)} />
                </Modal>
            )}
        </>
    );
}

export default PlaylistNewModal;
