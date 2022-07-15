import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditSongForm from './EditSongForm';

function EditSongFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit <i className="fa-solid fa-pencil"></i></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSongForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditSongFormModal;
