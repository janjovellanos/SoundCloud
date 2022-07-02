import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as songActions from '../../store/song';
import { useHistory } from 'react-router';
// import { Link } from 'react-router-dom';

import './CreateSongForm.css';

const CreateSongForm = ({ setShowModal }) => {
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id;
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX/VRD/////UAD/RgD/SgD/w7P/gFr/Uwr/TQD/Xhz/4dn/+PX/pYz/WRH/g1//Wxb/YSn/QgD/tqL/3dT/q5T/2s//c0b/9vP/dkr/zcD/wK//ybr/u6n/XiL/sZz/6OH/7+n/i2r/k3X/mn3/bDr/ZC3/jW3/ooj/qJH/fVb/ajf/gl1D6c1FAAAD0ElEQVR4nO3c6XLaMBSGYc45Aqk2gZjNhCVhS4Dm/u+vXnA2pk2RF8mZ7/mFmxnGbxRsIdvtrDs/20/vAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwRGtm1lq73o9asFEiPJz1eochiyjzszJZRYdjN4jpIh4v9utIsev9qgiL2j6EdCVeDET9gJHkaLa8risiV8/S8oHkaBv8tS8znUuLx1HLYfzvvtTDULneUVusFt/3pU5RO4dR5vH3cblgbVzvrYXo9L99qa243t+bqdUtgUSTyPUe30jf3RZINGpZov51ayEtPU1M5pjJLPNqbmJR6Oko8ss4sVzdJ4mmmJ4kL2wKaeLR4UYbyY/vcpmyLFRHT+aSfWOQ1VSsCmngy0lDy/Ax7md7UxR2FfeINidW2mwpsCyktR+nfnW3yprS158LEyvWZF8YePFRlMmlKdv4WkjhpkQhHT2Yo8q0aMq2rgqzobAupDv3f6cS1lq4dH88rbmQnp0PYt2FD84Hse5C92eM2gsfnZ32WTdTuHF1TuTeTDdSSAc3y296SCfTTOHIzVk/mlK/ocInJ0dT3lJjhW7mNdGmwcKBgw9iOoTNFU5Mh5VEKVHczIBGQZOFy8icV9NNGIZx0N3dSQMnSD5Qk4Xx4tOlqvG+jkbNbMzb+5rHRguvhPuo6o+m8HzX7++LxOjJbWHyjs/VDqO5fMs957+5y/Kuy8KK1/3fFqzzw7aOXjwopH2FiV8KOQ59KKR9FbO5T3+Vl8JkRkpeFBYfmjLUjH0uDEuf/aNuPiX0tbD0Cof0ie69LqRZqb9TPpP3hdNSgyix/4X0u8Qgqmxm5nvhyv6MoZnaUFhimcpMWlFIQ+sTRvolvg2FO9sPYrFH3hdaL8SZfUsKl7aFxQ0+3hcGtmfE4rqn94XWi6nyhEJPCq0n360p7NoeaeShJYUn2xUpNWpJYc/2jM8vLSm0nnlfJt7eF47tvyDKuBWFR/uFYd61orDMWpSKW1BY6gK42flfGJZ74i27Ruh34a7c5Rl973th6XvdzcDvQusvTu/kmB+r/CwMqnjs1ORv4mXhosqn+DwsDAeV3kbkXWE4qviZYa1tCl/rKpzuTOXPC5vHfPU0u9RTTMopv3FB8h/RKN+aFls8+7BP0mGqwmY8Giip48l2I7w+v16uZfHhtZcobltYf9rq9IotnmU/SCX/rO/ftmzNswf367sDLP3vDz68/I8tfqPff1CG69uhAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8sHa9AzVb/wEMy1nJ3qSajAAAAABJRU5ErkJggg=='); //default image
    const [audioUrl, setAudioUrl] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const reset = () => {
        setTitle('');
        setImageUrl('');
        setAudioUrl('');
        setDescription('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);

        dispatch(songActions.createSong({
            userId,
            title,
            imageUrl,
            audioUrl,
            description
        }))
            .then(() => {
                setShowModal(false);
                history.push(`/songs`);
                reset();
            })
            .catch(async (res) => {
                const data = await res.json();

                if (data && data.errors) {
                    setErrors(data.errors);
                }
            });

    };

    const handleCancelBtn = (e) => {
        e.preventDefault();
        setShowModal(false);
        history.push('/songs');
    }

    return (
        <div className='create-song-form'>
            <h2>Upload Your Song</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    {Object.values(errors).map((error, index) => (
                        <li key={index}>{error}</li>
                    ))}
                </ul>
                <div className='input-container'>
                    <label htmlFor='title'>Title</label>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='imageUrl'>Image Url</label>
                    <input type='text' name='imageUrl' value='Default Cover' onChange={(e) => setImageUrl(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='audioUrl'>Song Url</label>
                    <input type='text' name='audioUrl' value={audioUrl} onChange={(e) => setAudioUrl(e.target.value)} />
                </div>
                <div className='input-container'>
                    <label htmlFor='description'>Description</label>
                    <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className='form-btn-container'>
                    <button>Upload</button>
                    <button className='main-btn' onClick={(e) => handleCancelBtn(e)}>Cancel</button>
                </div>
            </form>
        </div>
    );
};



export default CreateSongForm;
