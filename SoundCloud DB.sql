CREATE TABLE `users` (
  `id` int PRIMARY KEY,
  `firstName` varchar(255),
  `lastName` varchar(255),
  `email` varchar(255),
  `username` varchar(255)
);

CREATE TABLE `songs` (
  `id` int PRIMARY KEY,
  `userId` int,
  `albumId` int,
  `title` varchar(255),
  `description` varchar(255),
  `url` varchar(255),
  `createdAt` timestamp,
  `updatedAt` timestamp,
  `imageId` int
);

CREATE TABLE `albums` (
  `id` int PRIMARY KEY,
  `userId` int,
  `artistId` int,
  `title` varchar(255),
  `description` varchar(255),
  `createdAt` timestamp,
  `updatedAt` timestamp,
  `imageId` int
);

CREATE TABLE `comments` (
  `id` int PRIMARY KEY,
  `userId` int,
  `songId` int,
  `body` varchar(255),
  `createdAt` timestamp,
  `updatedAt` timestamp
);

CREATE TABLE `artists` (
  `id` int PRIMARY KEY,
  `username` varchar(255),
  `totalSongs` int,
  `imageId` int
);

CREATE TABLE `playlists` (
  `id` int PRIMARY KEY,
  `userId` int,
  `name` varchar(255),
  `createdAt` timestamp,
  `updatedAt` timestamp,
  `imageId` int
);

CREATE TABLE `userPlaylists` (
  `id` int PRIMARY KEY,
  `userId` int,
  `playlistId` int
);

CREATE TABLE `images` (
  `id` int PRIMARY KEY
);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `userPlaylists` (`userId`);

ALTER TABLE `songs` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `users` ADD FOREIGN KEY (`id`) REFERENCES `albums` (`userId`);

ALTER TABLE `songs` ADD FOREIGN KEY (`albumId`) REFERENCES `albums` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`userId`) REFERENCES `users` (`id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`songId`) REFERENCES `songs` (`id`);

ALTER TABLE `albums` ADD FOREIGN KEY (`artistId`) REFERENCES `artists` (`id`);

ALTER TABLE `playlists` ADD FOREIGN KEY (`id`) REFERENCES `userPlaylists` (`playlistId`);

ALTER TABLE `images` ADD FOREIGN KEY (`id`) REFERENCES `songs` (`imageId`);

ALTER TABLE `images` ADD FOREIGN KEY (`id`) REFERENCES `artists` (`imageId`);

ALTER TABLE `images` ADD FOREIGN KEY (`id`) REFERENCES `playlists` (`imageId`);
