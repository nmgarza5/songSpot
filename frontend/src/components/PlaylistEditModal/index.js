import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import PlaylistEditForm from "./PlaylistEditForm";

function PlaylistEditModal({ id }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div onClick={() => setShowModal(true)}>Edit Playlist</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PlaylistEditForm
                        id={id}
                        onClose={() => setShowModal(false)}
                    />
                </Modal>
            )}
        </>
    );
}

export default PlaylistEditModal;
