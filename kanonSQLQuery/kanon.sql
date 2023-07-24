-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Main Machine: localhost:3306
-- Production Time: 22 Tem 2023, 12:14:19
-- Server Version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Veritabanı: `kanon`
--

-- --------------------------------------------------------

--
-- `casinos`
--

CREATE TABLE `casinos` (
  `casino_id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- `casinos`
--

INSERT INTO `casinos` (`casino_id`, `name`) VALUES
(1, 'Casino A'),
(2, 'Casino B');

-- --------------------------------------------------------

--
-- `countries`
--

CREATE TABLE `countries` (
  `country_id` int NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- `countries`
--

INSERT INTO `countries` (`country_id`, `name`) VALUES
(1, 'Malta'),
(2, 'Türkiye'),
(3, 'Italy');

-- --------------------------------------------------------

--
-- `games`
--

CREATE TABLE `games` (
  `game_id` int NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `casino_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- `games`
--

INSERT INTO `games` (`game_id`, `type`, `casino_id`) VALUES
(1, 'SLOT', 1),
(2, 'BLACKJACK', 2),
(3, 'ROULETTE', 1);

-- --------------------------------------------------------

--
-- `game_countries`
--

CREATE TABLE `game_countries` (
  `game_id` int NOT NULL,
  `country_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- `game_countries`
--

INSERT INTO `game_countries` (`game_id`, `country_id`) VALUES
(1, 1),
(3, 1),
(1, 2),
(2, 2),
(3, 3);

-- --------------------------------------------------------

--
-- `players`
--

CREATE TABLE `players` (
  `player_id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `favorite_game_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- `players`
--

INSERT INTO `players` (`player_id`, `name`, `favorite_game_id`) VALUES
(1, 'Max', 1),
(2, 'Celine', 2),
(3, 'Ury', 1),
(4, 'Melissa', 3);

--
-- Indexes
--

--
-- Indexes for `casinos`
--
ALTER TABLE `casinos`
  ADD PRIMARY KEY (`casino_id`);

--
-- Indexes for `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`game_id`),
  ADD KEY `casino_id` (`casino_id`);

--
-- Indexes for `game_countries`
--
ALTER TABLE `game_countries`
  ADD PRIMARY KEY (`game_id`,`country_id`),
  ADD KEY `country_id` (`country_id`);

--
-- Indexes for `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`player_id`),
  ADD KEY `favorite_game_id` (`favorite_game_id`);

--
--
--

--
-- `games`
--
ALTER TABLE `games`
  ADD CONSTRAINT `games_ibfk_1` FOREIGN KEY (`casino_id`) REFERENCES `casinos` (`casino_id`);

--
-- `game_countries`
--
ALTER TABLE `game_countries`
  ADD CONSTRAINT `game_countries_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `games` (`game_id`),
  ADD CONSTRAINT `game_countries_ibfk_2` FOREIGN KEY (`country_id`) REFERENCES `countries` (`country_id`);

--
-- `players`
--
ALTER TABLE `players`
  ADD CONSTRAINT `players_ibfk_1` FOREIGN KEY (`favorite_game_id`) REFERENCES `games` (`game_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


