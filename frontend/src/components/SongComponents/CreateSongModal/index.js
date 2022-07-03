import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Modal } from '../../../context/Modal';
import CreateSongForm from './CreateSongForm';

function CreateSongFormModal() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();


    return (
        <>
            <Link to={location.pathname} onClick={() => setShowModal(true)}>Upload</Link>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateSongForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateSongFormModal;
