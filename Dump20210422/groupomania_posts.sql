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
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `signale` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `userId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (138,'Enfin une bonne nouvelle ','Enfin une bonne nouvelle nous allons pouvoir nous retrouver cette année au séminaire et faire connaissance avec les nouvelles recrues. En plus les nouvelles annoncées cette année sont excellentes.',1,'2021-04-22 04:18:42','2021-04-22 04:27:29',21),(139,'Le service marketing annonce','Le service marketing annonce que le nouveau logo de la société est enfin prêt.  Nous allons pouvoir donner notre avis sur ce nouveau logo et adopter la version que nous préférons.',1,'2021-04-22 04:19:03','2021-04-22 04:27:22',21),(140,'Toutes les imprimantes du service comptabilité','Toutes les imprimantes du service comptabilité vont être remplacées par des imprimantes beaucoup plus performantes.',0,'2021-04-22 04:19:16','2021-04-22 04:19:16',21),(141,'Le bilan comptable de l\'année 2021','Le bilan comptable de l\'année 2021 est disponible vous pouvez tous aller le consulter.',1,'2021-04-22 04:19:32','2021-04-22 04:27:11',21),(142,'Les devis pour la soirée de fin d\'année','Les devis pour la soirée de fin d\'année nous sont enfin parvenus nous allons devoir prendre une décision sur une prestation.',1,'2021-04-22 04:20:00','2021-04-22 04:26:42',9),(143,'Les nouvelles voitures des commerciaux','Les nouvelles voitures des commerciaux ont été marquées avec le nouveau logo de la société ainsi que l\'adresse du nouveau site web.',1,'2021-04-22 04:20:11','2021-04-22 04:26:36',9);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
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
