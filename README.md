# Shair (SoundCloud)

**Shair** is a web application for connecting, sharing and listening to music. Shair was inspired by SoundCloud.

**Login, Explore, and Shair now at [on-the-shair.com](https://on-the-shair.herokuapp.com/)**

***or***

**Run Locally:**</br>
You will need a *.env* file with contents:
* PORT
* DB_FILE
* JWT_SECRET
* JWT_EXPIRES_IN
* AWS_ACCESS_KEY_ID
* AWS_SECRET_ACCESS_KEY

You can obtain the last two &uarr; when you create your own *[AWS](https://aws.amazon.com/) S3 Bucket*


### Welcome:
<img width="718" alt="welcome" src="https://github.com/janjovellanos/SoundCloud/blob/main/docs/images/welcome.png">

### Home:
<img width="718" alt="home" src="https://github.com/janjovellanos/SoundCloud/blob/main/docs/images/home.png">

### Stream:
<img width="718" alt="stream" src="https://github.com/janjovellanos/SoundCloud/blob/main/docs/images/stream.png">

### Technologies:
* Express.js
* Node.js
* Csurf.js
* BCrypt.js
* React/Redux
* Sequelize
* AWS S3
* React H5 Audio Player
* SQLite3 (Development)
* Postgres (Production)

### Features:
* Signup, login, logout, and demo login
* Create, read, update, and delete songs
* Create, read, update, and delete albums
* Upload image and audio files
* Default image provided if not presented
* Choice of uploading solo songs versus uploading to an album
* Navigate with continuous music

### Technical Implementation Details:
Shair allows specified user manipulation on content by watching the current user and matching their identifier with that of a particular entity's -
```
    if (song?.userId === user?.id) {
        songEditBtns = (
            <>
                <EditSongFormModal />
                <button onClick={() => handleDeleteBtn(songId)}>Delete</button>
            </>
        );
    }
```
When uploading audio and images, the label for the current input will change to display the file name by
setting state variables -
```
    const updateAudFile = (e) => {
        const audFile = e.target.files[0];
        if (audFile) {
            setAudioUrl(audFile);
            setAudioText(audFile.name);
        }
    };
  ...
    return (
  ...
      <label htmlFor='audioUrl'>{audioText || 'Audio'}</label>
          <input type='file' name='audioUrl' onChange={e => updateAudFile(e)} />
  ...  
);
```


### To-Do:
* [ ] Comments
* [ ] Playlists
* [ ] Profile Page
* [ ] Likes & Follows
* [ ] Search

[Original Design Docs](https://github.com/janjovellanos/SoundCloud/blob/main/docs/README.md)
