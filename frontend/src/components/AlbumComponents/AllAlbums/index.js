import React, { useEffect, useState } from "react";
import * as albumActions from "../../../store/album";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import './AllAlbums.css'
import CreateAlbumFormModal from "../CreateAlbumModal";

const AllAlbums = () => {
    const dispatch = useDispatch();
    const albums = useSelector((state) => Object.values(state.albums));
    const [currentAlbum, setCurrentAlbum] = useState(null);
    // console.log(albums);

    useEffect(() => {
        dispatch(albumActions.loadAlbums());
    }, [dispatch]);

    albums?.sort((a, b) => {
        return b.id - a.id;
    })

    return (
        <div className="all-albums-container">
            <div className="add-album-btn">
                <CreateAlbumFormModal />
            </div>
            <h2>Top New Albums</h2>
            <div>
                {albums.map((album) => (
                    <li key={album.id} className="album-container">
                        <div className="img-container" style={{ backgroundImage: `url(${album.imageUrl})` }}>
                            <Link className="album-title" to={{ pathname: `/albums/${album.id}` }}>
                                <p>{album.title}</p>
                            </Link>
                        </div>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default AllAlbums;
