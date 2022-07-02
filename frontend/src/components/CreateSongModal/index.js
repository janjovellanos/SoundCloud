import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import CreateSongForm from './CreateSongForm';

function CreateSongFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <NavLink to='/upload' onClick={() => setShowModal(true)}>Upload</NavLink>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateSongForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateSongFormModal;
