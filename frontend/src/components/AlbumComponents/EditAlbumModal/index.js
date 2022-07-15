import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditAlbumForm from './EditAlbumForm';

function EditAlbumFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Edit <i className="fa-solid fa-pencil"></i></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditAlbumForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditAlbumFormModal;
