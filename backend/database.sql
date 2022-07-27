--
-- Structure de la table `users`
--
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `email` VARCHAR(255) UNIQUE NOT NULL,
  `password` VARCHAR(255) NOT NULL
);

INSERT INTO `users` (`email`, `password`) VALUES
('elie.matthieu2@gmail.com', '$argon2d$v=19$m=12,t=3,p=1$N3VicHpma2w0M3IwMDAwMA$TJ/hOauZkQxrEKz+0VXsPw');

--
-- Structure de la table `favorites`
--

CREATE TABLE `favorites` (
  `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `pokemon_id` INT NOT NULL,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
);

INSERT INTO `favorites` (`user_id`, `pokemon_id`) VALUES
(1, 6),
(1, 25),
(1, 94),
(1, 157);
