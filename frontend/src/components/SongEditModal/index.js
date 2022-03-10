import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SongEditForm from "./SongEditForm";
import "./SongEditModal.css";

function SongEditModal({ id }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="edit-song" onClick={() => setShowModal(true)}>
                Edit Song
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SongEditForm id={id} />
                </Modal>
            )}
        </>
    );
}

export default SongEditModal;
