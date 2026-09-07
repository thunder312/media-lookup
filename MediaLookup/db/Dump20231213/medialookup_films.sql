-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: medialookup
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `films`
--

DROP TABLE IF EXISTS `films`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `films` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `year` varchar(255) DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `notes` varchar(200) DEFAULT NULL,
  `location` int DEFAULT NULL,
  `media` int DEFAULT NULL,
  `url` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rating_idx` (`rating`),
  KEY `location_idx` (`location`),
  KEY `media_idx` (`media`),
  CONSTRAINT `location` FOREIGN KEY (`location`) REFERENCES `location` (`id`),
  CONSTRAINT `media` FOREIGN KEY (`media`) REFERENCES `media` (`id`),
  CONSTRAINT `rating` FOREIGN KEY (`rating`) REFERENCES `rating` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `films`
--

LOCK TABLES `films` WRITE;
/*!40000 ALTER TABLE `films` DISABLE KEYS */;
INSERT INTO `films` VALUES (1,'A million ways to die in the west','2014-05-29',6,'',1,1,NULL,NULL,NULL),(2,'ALF - Die komplette Serie','1990-03-24',9,'4 Staffeln; 102 Episoden ',1,1,NULL,NULL,NULL),(3,'American Pie 1 - Wie ein heißer Apfelkuchen','2000-01-06',9,'Platinum Edition mit Zusatz DVD',1,1,'https://www.imdb.com/title/tt0163651/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_American%2520Pie',NULL,NULL),(4,'American Pie 2','2001-09-27',8,'Collectors Edition - Ungekürzt',1,1,'https://www.imdb.com/title/tt0252866/?ref_=fn_al_tt_1',NULL,NULL),(5,'American Pie 3 - Jetzt wird geheiratet','2003-08-21',8,'Unzensiert; 25 Minuten extra',1,1,'https://www.imdb.com/title/tt0328828/?ref_=fn_al_tt_1',NULL,NULL),(6,'American Pie 4 - Das Klassentreffen','2012-04-26',9,'plus Digital Copy',1,2,'https://www.imdb.com/title/tt0328828/?ref_=fn_al_tt_1',NULL,NULL);
/*!40000 ALTER TABLE `films` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-13 21:55:34
