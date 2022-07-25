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