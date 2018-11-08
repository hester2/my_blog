/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : my_blog

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-11-08 21:34:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for articles
-- ----------------------------
DROP TABLE IF EXISTS `articles`;
CREATE TABLE `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `ctime` varchar(255) NOT NULL,
  `author_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of articles
-- ----------------------------
INSERT INTO `articles` VALUES ('1', '程序员', '##程序员之蜕变历史', '2018-11-06 19:49:03', '1');
INSERT INTO `articles` VALUES ('2', '王伟是猪', '###王伟他从小受到鄙视，发誓长大后要比人高出一截，却不曾想到这个誓言一到上课就实现不了，两眼直视，四肢发软，我吴刘欣作为他的同桌，要接收监督他的任务，不然以后他没出息也不是作为同桌的我愿意看到的!谢谢审核，\r\n\r\n\r\n                          --程序员的蜕变  1----', '2018-11-08 21:29:44', '4');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `ctime` varchar(255) NOT NULL,
  `isdel` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'wlx', '123', '小姐姐', '', '0');
INSERT INTO `user` VALUES ('2', '吴刘欣', '123', '小姐姐', '2018-11-05 20:05:08', '0');
INSERT INTO `user` VALUES ('3', '王伟', '123', '小弟弟', '2018-11-05 20:07:13', '0');
INSERT INTO `user` VALUES ('4', '芒果味的小欣欣', '$2b$10$SC.CT10WO0PELBNDByNpduCcPe.Ra0AFJ7IiMhUI0wMw300gLPfJK', 'wwwwwlx', '2018-11-08 21:22:02', '0');
