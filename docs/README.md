## Minimum Viable Product

**Shair** is a web application inspired by SoundCloud and was built using Express & React.

Shair gives users the ability to:

* Create an account
* Log in and log out
* Test the application as a guest
* Upload image and audio files to create new songs & albums
* Create, read, update, delete, and play songs
* Create, read, update, and delete albums

## DB Schema
<img width="718" alt="schema" src="https://github.com/janjovellanos/SoundCloud/blob/main/db-diagram.JPEG">

## Implementation Timeline

### Phase 1: DB Schema & Sequelize Setup (1 day)

I will start by exploring possible database schemas using [Dbdiagram.io](https://www.dbdiagram.io/). 
Once a final draft has been decided, I will implement said schema and create the models & migrations, 
as well as the seed data appropriate for this application.

### Phase 2: Backend Setup for User Authorization and API Routes (3 days)

In this phase, I will create all routes needed for the features I will implement and 
require user authorization in routes which should only pertain to the logged in user by making use of
[JWT](https://jwt.io/introduction)'s. I will also handle any validation errors within a POST or PUT requests
using Express' [validator](https://express-validator.github.io/docs/).

[*API Routes*](https://github.com/janjovellanos/SoundCloud/blob/main/backend/README.md)

### Phase 3: Frontend Authentication and Setup  (2 days)

Next I will begin setting up a React frontend that will employ the backend's API routes to handle client requests such as:
* Login, Signup, and Logout
* Upload, Read/Play, Edit, and Delete songs 
* Create, Read, Edit, and Delete albums
  
 I will also manage the application's state by creating a Redux store, constructing the necessary reducers and actions to update & display the app's current state.

### Phase 4: Components (3 days)

In this phase, I will create an app-wide navigation component with links that route to all components needed 
to successfuly sign up, log in/out, and perform CRUD actions on songs & albums. I will also be utilizing [React H5 Audio Player](https://www.npmjs.com/package/react-h5-audio-player)
to create a player component fixed to the bottom of the page. In this phase, I will also style said components to create a layout similar to SoundCloud.

[*Functional Component List*](https://github.com/janjovellanos/SoundCloud/tree/main/frontend/src/components)

### Phase 5: File Uploads (1 day)

By this phase, both create actions for songs and albums will be functioning and I will update them to accept image
and audio file uploads from the client through [AWS](https://aws.amazon.com/).

*No empty images*
I've provided a default image, using state, on the frontend for all creations. If an image is not provided, the uploaded song/album
will have a neat default.
```
// backend
    let { title, description, albumId, imageUrl, audioUrl } = req.body;

    if (req.files.imageUrl) {
        imageUrl = await singlePublicFileUpload(req.files.imageUrl[0]);
    }
    if (req.files.audioUrl) {
        audioUrl = await singlePublicFileUpload(req.files.audioUrl[0]);
    }
    
        const newSong = await Song.create({
        title,
        description,
        audioUrl,
        imageUrl,
        albumId
    });
```

### Phase 6: Deploy Application

Now, I will deploy the functioning application.

### Bonus Features (TBD)

- [ ] Comments
- [ ] Playlists
- [ ] Likes & Follows
- [ ] Profile Page
- [ ] Search for artists and songs
