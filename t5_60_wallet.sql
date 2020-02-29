-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 29, 2020 at 12:00 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `t5_60_wallet`
--

-- --------------------------------------------------------

--
-- Table structure for table `t5w_account`
--

CREATE TABLE `t5w_account` (
  `ac_id` int(11) NOT NULL COMMENT 'pk for account',
  `ac_fname` varchar(255) NOT NULL COMMENT 'frist name user',
  `ac_lname` varchar(255) NOT NULL COMMENT 'last name user',
  `ac_max_cost` int(11) NOT NULL COMMENT 'max cost'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `t5w_account`
--

INSERT INTO `t5w_account` (`ac_id`, `ac_fname`, `ac_lname`, `ac_max_cost`) VALUES
(2, '0', '0', 1000),
(3, '0', '0', 1000),
(4, '0', '0', 1000),
(5, 'er', '0', 100044),
(6, 'test', ' tset', 100044);

-- --------------------------------------------------------

--
-- Table structure for table `t5w_record`
--

CREATE TABLE `t5w_record` (
  `rc_id` int(11) NOT NULL COMMENT 'pk for recoed',
  `rc_balance` int(11) NOT NULL COMMENT 'balane monny',
  `rc_ac_id` int(11) NOT NULL COMMENT 'fk account',
  `rc_date` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp() COMMENT 'date on day for record'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t5w_transaction`
--

CREATE TABLE `t5w_transaction` (
  `ts_id` int(11) NOT NULL COMMENT 'pk for transaction',
  `ts_name` varchar(255) NOT NULL COMMENT 'name''s transaction',
  `ts_cost` int(11) NOT NULL COMMENT 'cost for transaction ',
  `ts_date` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp() COMMENT 'date on day for transaction ',
  `ts_detail` varchar(255) NOT NULL COMMENT 'transaction  detail',
  `ts_category` varchar(2) NOT NULL COMMENT 'transaction  category',
  `ts_rc_id` int(11) NOT NULL COMMENT 'fk record ',
  `ts_type_id` int(11) NOT NULL COMMENT 'fk tpye_transaction '
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `t5w_transaction_type`
--

CREATE TABLE `t5w_transaction_type` (
  `type_id` int(11) NOT NULL COMMENT 'pk for type',
  `type_name` varchar(255) NOT NULL COMMENT 'name''s type'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `t5w_account`
--
ALTER TABLE `t5w_account`
  ADD PRIMARY KEY (`ac_id`);

--
-- Indexes for table `t5w_record`
--
ALTER TABLE `t5w_record`
  ADD PRIMARY KEY (`rc_id`);

--
-- Indexes for table `t5w_transaction`
--
ALTER TABLE `t5w_transaction`
  ADD PRIMARY KEY (`ts_id`);

--
-- Indexes for table `t5w_transaction_type`
--
ALTER TABLE `t5w_transaction_type`
  ADD PRIMARY KEY (`type_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `t5w_account`
--
ALTER TABLE `t5w_account`
  MODIFY `ac_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'pk for account', AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `t5w_record`
--
ALTER TABLE `t5w_record`
  MODIFY `rc_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'pk for recoed';

--
-- AUTO_INCREMENT for table `t5w_transaction`
--
ALTER TABLE `t5w_transaction`
  MODIFY `ts_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'pk for transaction';

--
-- AUTO_INCREMENT for table `t5w_transaction_type`
--
ALTER TABLE `t5w_transaction_type`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'pk for type';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
