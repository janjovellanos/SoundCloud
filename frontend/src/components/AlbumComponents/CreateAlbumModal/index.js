import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Modal } from '../../../context/Modal';
import CreateAlbumForm from './CreateAlbumForm';

function CreateAlbumFormModal() {
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();


    return (
        <>
            <Link to={location.pathname} onClick={() => setShowModal(true)}>Create An Album</Link>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CreateAlbumForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default CreateAlbumFormModal;
