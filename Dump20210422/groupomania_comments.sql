-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: groupomania
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `comment` varchar(255) NOT NULL,
  `signale` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  `postId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `postId` (`postId`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=194 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (182,'J’en veux','J’en veux une. ',0,'2021-04-22 04:20:49','2021-04-22 04:20:49',9,143),(183,'Que la fête ','Que la fête commence.',1,'2021-04-22 04:21:22','2021-04-22 04:26:00',9,142),(184,'Du bénéfice ','Du bénéfice cette année.',1,'2021-04-22 04:21:41','2021-04-22 04:26:10',9,141),(185,'Il y en avait ','Il y en avait besoin.',0,'2021-04-22 04:22:05','2021-04-22 04:22:05',9,140),(186,'Je n’aime pas ','Je n’aime pas ce logo il est nul.',0,'2021-04-22 04:22:33','2021-04-22 04:22:33',9,139),(187,'Ok ','Ok cool.',1,'2021-04-22 04:22:57','2021-04-22 04:25:52',9,138),(188,'Elles sont belles ','Elles sont belles les voitures.',1,'2021-04-22 04:23:23','2021-04-22 04:27:39',21,143),(189,'Du disco!!!','Du disco pour tout le monde.',1,'2021-04-22 04:23:49','2021-04-22 04:27:44',21,142),(190,'Peut-être ','Peut-être une prime.',0,'2021-04-22 04:24:12','2021-04-22 04:24:12',21,141),(191,'A quand','A quand les notre.',1,'2021-04-22 04:24:45','2021-04-22 04:27:50',21,140),(192,'Il est beau ','Il est beau le logo.',0,'2021-04-22 04:25:10','2021-04-22 04:25:10',21,139),(193,'Super','Super nouvelle.',0,'2021-04-22 04:25:46','2021-04-22 04:25:46',21,138);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-22  8:29:11
