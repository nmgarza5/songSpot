import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SongForm from "./SongForm";
import "./SongForm.css";

function SongFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="upload" onClick={() => setShowModal(true)}>
                Upload
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SongForm />
                </Modal>
            )}
        </>
    );
}

export default SongFormModal;
