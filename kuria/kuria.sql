-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 07 Mars 2018 à 07:29
-- Version du serveur :  10.1.13-MariaDB
-- Version de PHP :  7.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `kuria`
--

-- --------------------------------------------------------

--
-- Structure de la table `t_img_plats`
--

CREATE TABLE `t_img_plats` (
  `id` int(11) NOT NULL,
  `id_plat` int(11) NOT NULL,
  `nom_img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `t_plats`
--

CREATE TABLE `t_plats` (
  `id` int(11) NOT NULL,
  `nom` text NOT NULL,
  `details` text NOT NULL,
  `ingredients` text NOT NULL,
  `explications` text NOT NULL,
  `date_ajout` date NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_plats`
--

INSERT INTO `t_plats` (`id`, `nom`, `details`, `ingredients`, `explications`, `date_ajout`, `id_user`) VALUES
(1, 'ghgj', 'jjjjjjjjjjjjjjj', 'jghh', 'jhhjhjh', '2018-02-24', 1),
(2, 'nbnb', '0n0bn', 'vb', 'vbb', '2018-02-24', 1),
(3, 'xxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxx', 'xxxxxxxxxxxxxxxxxxxxxxx', '2018-02-24', 1),
(4, 'jhggjgjjgh', 'hjgjg', 'ghjghjgh', 'ghjgjg', '2018-02-24', 1),
(5, 'dfgdgdfgdfgddfggdg', 'fgdfg', 'dfgdfg', 'dfgdgg', '2018-02-24', 1),
(6, 'vccxvxv', 'vcxvxv', 'xcvxvv', 'xvxv', '2018-02-24', 1),
(7, 'jghjjgjjh', 'hjghjghj', 'jhgjg', 'ghjghjgjgj', '2018-02-24', 1),
(8, ' cx1hxchgh1gc', 'cxbcnxvcbnxvcbxv', 'cbnvbvxxcnbcvxbncvxnbcv', 'c1gshgyf2sgf2ygffs', '2018-02-24', 1),
(9, 'cbcvbvcbcvbvcvbcvbc', 'cvbcvbcvbbcvbcvbbcvbcvbcvbbbcvbcbc', 'bcvbcvbvcvb', 'cvbcvbcvbcvbcvbcvb', '2018-02-24', 1),
(10, 'nvbnvvnbvnb', 'nvbnvbnvb', 'bnvvbnvb', 'vbnvvbnbv', '2018-02-24', 1),
(11, 'nvbnvvnbvnb', 'nvbnvbnvb', 'bnvvbnvb', 'vbnvvbnbv', '2018-02-24', 1),
(12, 'jjjjjjj', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjj', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', 'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', '2018-02-25', 1),
(13, 'b', 'n', 'n', '11', '2018-02-25', 1),
(14, 'nb', 'n', 'n', '11', '2018-02-25', 1),
(15, 'klhjhjkhj', 'klhjhjkhjhj', 'hfgghfghfgh', 'dfgdfgdf', '2018-02-28', 1),
(16, 'ghrtgtjketgehjgjtgrtjgfkdgdjkgdfjhgd', 'cbnnvvcnbmxcvbcmnvbmnxcbmncbvmbx', 'er7e654utye78y587y78r5y6r', 'r78e45yt67ryetjh', '2018-02-28', 1),
(17, 'lkl121', 'yty', 'ttyt', 'tytyt', '2018-02-28', 1),
(18, 'jha', 'ajkh', 'ajkh', 'ajkh', '2018-02-28', 1),
(19, 'uiyiuyi', 'iuyiy', 'iui', 'iyui', '2018-02-28', 1),
(20, 'hjyuuetetertej', 'jghjhg', 'jhghg', 'hgjgj', '2018-02-28', 1),
(21, 'opopopopop', 'coucou', 'yep', 'olololo', '2018-03-02', 1),
(22, 'vvvvvvv', 'vvvv', 'vvvv', 'vvvv', '2018-03-03', 1),
(23, 'Hehhejej', 'Brjrjee', 'Bebebe', 'Rbrbnrnr', '2018-03-05', 1),
(24, 'Hehhejex', 'Brjrjee', 'Bebebe', 'Rbrbnrnr', '2018-03-05', 1),
(25, 'czcz', 'zxcc', 'zxczx', 'zxczc', '2018-03-05', 1),
(26, 'fdd', 'gdfg', 'fdgdd', 'dgd', '2018-03-05', 1),
(27, 'bnv', 'nbn', 'nb0n', '1b', '2018-03-05', 1),
(28, 'v vbvb', 'hgng', 'hg1', '1hg', '2018-03-05', 1),
(29, 'bvbn0  ', '0nb', '0b', '0b', '2018-03-05', 1),
(30, 'nbn0b', 'b0nbb0n', 'nb0nb', '0nbbn', '2018-03-05', 1),
(31, 'gggggggggggggfg', 'fdg', 'df', 'df', '2018-03-06', 1),
(32, 'hv', 'nbv', 'nbvbv', 'nbn', '2018-03-06', 1),
(33, 'utru', 'uuyt', 'tyu', 'tyut', '2018-03-06', 1);

-- --------------------------------------------------------

--
-- Structure de la table `t_users`
--

CREATE TABLE `t_users` (
  `id` int(11) NOT NULL,
  `nom_complet` varchar(255) NOT NULL,
  `telephone` varchar(13) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `motdepasse` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Contenu de la table `t_users`
--

INSERT INTO `t_users` (`id`, `nom_complet`, `telephone`, `email`, `motdepasse`) VALUES
(1, 'andrick', '0990666768', NULL, '7110eda4d09e062aa5e4a390b0a572ac0d2c0220');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `t_img_plats`
--
ALTER TABLE `t_img_plats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `t_plats`
--
ALTER TABLE `t_plats`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `t_users`
--
ALTER TABLE `t_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `t_img_plats`
--
ALTER TABLE `t_img_plats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `t_plats`
--
ALTER TABLE `t_plats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT pour la table `t_users`
--
ALTER TABLE `t_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
