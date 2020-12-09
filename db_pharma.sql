-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2019 at 10:48 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_pharma`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_medicine`
--

CREATE TABLE IF NOT EXISTS `tbl_medicine` (
  `code` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `detail` varchar(1000) NOT NULL,
  `price` varchar(100) NOT NULL,
  `img` varchar(100) NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `tbl_medicine`
--

INSERT INTO `tbl_medicine` (`code`, `name`, `detail`, `price`, `img`) VALUES
(1, 'Bioderma', 'Developed specifically for sensitive skin, the Sensibio H2O Solution from Bioderma effectively removes dirt and makeup from the face and eye area...', 'Tk 310.00', 'product_01.png'),
(2, 'Chanca Piedra', 'Organika Chanca Piedra 500mg Details Traditionally used in Ayurveda as a diuretic (Mutrala) to help relieve mild urinary tract infections.', 'Tk 470.00', 'product_02.png'),
(3, 'Umcka Cold Care', 'Homeopathic Feel better Faster! Clinically tested Umcka shortens the duraton and reduces the severity of throat, sinus and bronchial irritations.', 'Tk 720.00', 'product_03.png'),
(4, 'Cetyl Pure', 'Natrol CetylPure contains cetyl myristoleate, a naturally occurring fatty acid. This revolutionary compound works to lubricate joints and helps to promote mobile joint function.', 'Tk 120.00', 'product_04.png'),
(5, 'CLA Core', 'MusclePharm´s medical team took it one step further by building the ultimate CLA product. This blend perfectly complements your weight-loss plan—or jumpstarts a new one if that´s what you need. Only the highest quality, purity and potency blends of CLA are used.', 'Tk 230.00', 'product_05.png'),
(6, 'Poo Pourri', 'A blend of essential oils & other natural compounds that eliminates bathroom odors by creating a protective film on the waters surface.', 'Tk 200.00', 'product_06.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE IF NOT EXISTS `tbl_order` (
  `Order` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(100) NOT NULL,
  `LastName` varchar(1000) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone` text NOT NULL,
  `Product` varchar(100) NOT NULL,
  `Total` int(11) NOT NULL,
  PRIMARY KEY (`Order`),
  KEY `Email` (`Email`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `tbl_order`
--

INSERT INTO `tbl_order` (`Order`, `FirstName`, `LastName`, `Address`, `Email`, `Phone`, `Product`, `Total`) VALUES
(29, 'Nafia', 'Mahjabin', 'Para 130,Dargha,sylhet', 'mahjabinnafia@gmail.com', '01731333088', 'Umcka Cold Care', 2);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE IF NOT EXISTS `tbl_user` (
  `User` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Address` text NOT NULL,
  `Email` varchar(100) NOT NULL,
  `Phone` text NOT NULL,
  `Password` text NOT NULL,
  `Salt` text NOT NULL,
  PRIMARY KEY (`User`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=16 ;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`User`, `Name`, `Address`, `Email`, `Phone`, `Password`, `Salt`) VALUES
(12, 'Kallol Dhar', 'Sadipur', 'kalloldhar270@gmail.com', '12345678', '$2b$10$NRrIX.33bIG5q.a/.mkajerafdRv23lgklrGNHzl0Fs7WLGCYWFl2', '$2b$10$NRrIX.33bIG5q.a/.mkaje'),
(14, 'nafiamahjabin', 'Para 130,Dargha,sylhet', 'mahjabinnafia@gmail.com', '01731333088', '$2b$10$41COoLC7v1TgTb3vr8KZN.q/GFmTDbC2j8LsQ.pM0PYZyMmz4rL82', '$2b$10$41COoLC7v1TgTb3vr8KZN.'),
(15, 'Kollol', 'Sylhet', 'admin@gmail.com', '0100000000', '$2b$10$cUu1/./50SipMA6Ku6OSROKDv.L1BSoZuoi4jSmbag/gosno1/opa', '$2b$10$cUu1/./50SipMA6Ku6OSRO');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
