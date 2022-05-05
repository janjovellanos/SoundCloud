CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  username VARCHAR(255),
  totalSongs INTEGER, -- ???
  totalAlbums INTEGER
)

CREATE TABLE Songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  albumId INTEGER,
  title VARCHAR(255),
  description VARCHAR(255),
  url text,
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  imageUrl text
  FOREIGN KEY (userId) REFERENCES Users(id)
  FOREIGN KEY (albumId) REFERENCES Albums(id)
)

CREATE TABLE Albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  title VARCHAR(255),
  description VARCHAR(255),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  imageUrl text
  FOREIGN KEY (userId) REFERENCES Users(id)
)

CREATE TABLE Comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  songId INTEGER,
  body VARCHAR(255),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP
  FOREIGN KEY (userId) REFERENCES Users(id)
  FOREIGN KEY (songId) REFERENCES Songs(id)
)

CREATE TABLE Playlists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER
  name VARCHAR(255),
  createdAt TIMESTAMP,
  updatedAt TIMESTAMP,
  imageUrl text,
  FOREIGN KEY (userId) REFERENCES Users(id)
)

CREATE TABLE playlistSongs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  playlistId INTEGER,
  songId INTEGER,
  FOREIGN KEY (playlistId) REFERENCES Playlists(id)
  FOREIGN KEY (songId) REFERENCES Songs(id)
)
