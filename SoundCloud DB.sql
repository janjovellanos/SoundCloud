CREATE TABLE Users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  firstName VARCHAR(50) NOT NULL,
  lastName VARCHAR(50),
  email VARCHAR(255) NOT NULL,
  hashedPassword VARCHAR(255),
  username VARCHAR(50) NOT NULL
)

CREATE TABLE Songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  albumId INTEGER,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  audioUrl text,
  createdAt DATETIME,
  updatedAt DATETIME,
  imageUrl text
  FOREIGN KEY (userId) REFERENCES Users(id)
  FOREIGN KEY (albumId) REFERENCES Albums(id)
)

CREATE TABLE Albums (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  createdAt DATETIME,
  updatedAt DATETIME,
  imageUrl text
  FOREIGN KEY (userId) REFERENCES Users(id)
)

CREATE TABLE Comments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER,
  songId INTEGER,
  body VARCHAR(255) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME
  FOREIGN KEY (userId) REFERENCES Users(id)
  FOREIGN KEY (songId) REFERENCES Songs(id)
)

CREATE TABLE Playlists (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  userId INTEGER
  name VARCHAR(255) NOT NULL,
  createdAt DATETIME,
  updatedAt DATETIME,
  imageUrl text,
  FOREIGN KEY (userId) REFERENCES Users(id)
)

CREATE TABLE PlaylistSongs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  playlistId INTEGER,
  songId INTEGER,
  FOREIGN KEY (playlistId) REFERENCES Playlists(id)
  FOREIGN KEY (songId) REFERENCES Songs(id)
)
