# SQL-Front 5.1  (Build 4.16)

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE */;
/*!40101 SET SQL_MODE='NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES */;
/*!40103 SET SQL_NOTES='ON' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS */;
/*!40014 SET FOREIGN_KEY_CHECKS=0 */;


# Host: localhost    Database: ht28
# ------------------------------------------------------
# Server version 5.5.35

#
# Source for table lovevi_action
#

DROP TABLE IF EXISTS `lovevi_action`;
CREATE TABLE `lovevi_action` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` char(30) NOT NULL DEFAULT '' COMMENT '行为唯一标识',
  `title` char(80) NOT NULL DEFAULT '' COMMENT '行为说明',
  `remark` char(140) NOT NULL DEFAULT '' COMMENT '行为描述',
  `rule` text COMMENT '行为规则',
  `log` text COMMENT '日志规则',
  `type` tinyint(2) unsigned NOT NULL DEFAULT '1' COMMENT '类型',
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '状态',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '修改时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC COMMENT='系统行为表';

#
# Dumping data for table lovevi_action
#

LOCK TABLES `lovevi_action` WRITE;
/*!40000 ALTER TABLE `lovevi_action` DISABLE KEYS */;
INSERT INTO `lovevi_action` VALUES (1,'user_login','用户登录','积分+10，每天一次','table:member|field:score|condition:uid={$self} AND status>-1|rule:score+10|cycle:24|max:1;','[user|get_nickname]在[time|time_format]登录了后台',1,1,1387181220);
INSERT INTO `lovevi_action` VALUES (2,'add_article','发布文章','积分+5，每天上限5次','table:member|field:score|condition:uid={$self}|rule:score+5|cycle:24|max:5','',2,0,1380173180);
INSERT INTO `lovevi_action` VALUES (3,'review','评论','评论积分+1，无限制','table:member|field:score|condition:uid={$self}|rule:score+1','',2,1,1383285646);
INSERT INTO `lovevi_action` VALUES (4,'add_document','发表文档','积分+10，每天上限5次','table:member|field:score|condition:uid={$self}|rule:score+10|cycle:24|max:5','[user|get_nickname]在[time|time_format]发表了一篇文章。\r\n表[model]，记录编号[record]。',2,0,1386139726);
INSERT INTO `lovevi_action` VALUES (5,'add_document_topic','发表讨论','积分+5，每天上限10次','table:member|field:score|condition:uid={$self}|rule:score+5|cycle:24|max:10','',2,0,1383285551);
INSERT INTO `lovevi_action` VALUES (6,'update_config','更新配置','新增或修改或删除配置','','',1,1,1383294988);
INSERT INTO `lovevi_action` VALUES (7,'update_model','更新模型','新增或修改模型','','',1,1,1383295057);
INSERT INTO `lovevi_action` VALUES (8,'update_attribute','更新属性','新增或更新或删除属性','','',1,1,1383295963);
INSERT INTO `lovevi_action` VALUES (9,'update_channel','更新导航','新增或修改或删除导航','','',1,1,1383296301);
INSERT INTO `lovevi_action` VALUES (10,'update_menu','更新菜单','新增或修改或删除菜单','','',1,1,1383296392);
INSERT INTO `lovevi_action` VALUES (11,'update_category','更新分类','新增或修改或删除分类','','',1,1,1383296765);
/*!40000 ALTER TABLE `lovevi_action` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_action_log
#

DROP TABLE IF EXISTS `lovevi_action_log`;
CREATE TABLE `lovevi_action_log` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `action_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '行为id',
  `user_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '执行用户id',
  `action_ip` bigint(20) NOT NULL COMMENT '执行行为者ip',
  `model` varchar(50) NOT NULL DEFAULT '' COMMENT '触发行为的表',
  `record_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '触发行为的数据id',
  `remark` varchar(255) NOT NULL DEFAULT '' COMMENT '日志备注',
  `status` tinyint(2) NOT NULL DEFAULT '1' COMMENT '状态',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '执行行为的时间',
  PRIMARY KEY (`id`),
  KEY `action_ip_ix` (`action_ip`),
  KEY `action_id_ix` (`action_id`),
  KEY `user_id_ix` (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=377 DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED COMMENT='行为日志表';

#
# Dumping data for table lovevi_action_log
#

LOCK TABLES `lovevi_action_log` WRITE;
/*!40000 ALTER TABLE `lovevi_action_log` DISABLE KEYS */;
INSERT INTO `lovevi_action_log` VALUES (54,10,1,1904257316,'Menu',106,'操作url：/admin.php?s=/Menu/edit.html',1,1485161512);
INSERT INTO `lovevi_action_log` VALUES (55,1,1,1904257316,'member',1,'admin在2017-01-23 17:00登录了后台',1,1485162003);
INSERT INTO `lovevi_action_log` VALUES (56,1,3,1904257316,'member',3,'test1在2017-01-23 17:02登录了后台',1,1485162149);
INSERT INTO `lovevi_action_log` VALUES (57,1,1,1904257316,'member',1,'admin在2017-01-23 17:02登录了后台',1,1485162161);
INSERT INTO `lovevi_action_log` VALUES (58,1,2,1904257316,'member',2,'test在2017-01-23 17:04登录了后台',1,1485162294);
INSERT INTO `lovevi_action_log` VALUES (59,1,1,1904257316,'member',1,'admin在2017-01-23 17:16登录了后台',1,1485162971);
INSERT INTO `lovevi_action_log` VALUES (60,1,1,248250542,'member',1,'admin在2017-01-23 17:45登录了后台',1,1485164731);
INSERT INTO `lovevi_action_log` VALUES (61,1,1,1904257316,'member',1,'admin在2017-01-23 17:47登录了后台',1,1485164837);
INSERT INTO `lovevi_action_log` VALUES (62,1,1,1904257316,'member',1,'admin在2017-01-23 20:58登录了后台',1,1485176311);
INSERT INTO `lovevi_action_log` VALUES (63,1,1,-593283591,'member',1,'admin在2017-01-23 21:14登录了后台',1,1485177297);
INSERT INTO `lovevi_action_log` VALUES (64,1,1,2073528891,'member',1,'admin在2017-01-23 21:38登录了后台',1,1485178702);
INSERT INTO `lovevi_action_log` VALUES (65,1,1,-593283591,'member',1,'admin在2017-01-23 22:38登录了后台',1,1485182325);
INSERT INTO `lovevi_action_log` VALUES (66,1,4,-593283591,'member',4,'dczj123在2017-01-23 22:42登录了后台',1,1485182566);
INSERT INTO `lovevi_action_log` VALUES (67,1,1,-593283591,'member',1,'admin在2017-01-23 22:52登录了后台',1,1485183120);
INSERT INTO `lovevi_action_log` VALUES (68,1,1,236004752,'member',1,'admin在2017-01-24 11:31登录了后台',1,1485228712);
INSERT INTO `lovevi_action_log` VALUES (69,1,1,1904259022,'member',1,'admin在2017-02-04 09:11登录了后台',1,1486170704);
INSERT INTO `lovevi_action_log` VALUES (70,1,1,1904259022,'member',1,'admin在2017-02-05 14:49登录了后台',1,1486277355);
INSERT INTO `lovevi_action_log` VALUES (71,1,5,1904259022,'member',5,'test在2017-02-05 14:51登录了后台',1,1486277487);
INSERT INTO `lovevi_action_log` VALUES (72,1,1,1904259022,'member',1,'admin在2017-02-05 14:51登录了后台',1,1486277510);
INSERT INTO `lovevi_action_log` VALUES (73,1,5,1904259022,'member',5,'test在2017-02-05 14:52登录了后台',1,1486277533);
INSERT INTO `lovevi_action_log` VALUES (74,1,1,1904259022,'member',1,'admin在2017-02-10 10:12登录了后台',1,1486692731);
INSERT INTO `lovevi_action_log` VALUES (75,1,1,2047087142,'member',1,'admin在2017-02-13 12:23登录了后台',1,1486959802);
INSERT INTO `lovevi_action_log` VALUES (76,10,1,2047087142,'Menu',137,'操作url：/admin.php?s=/Menu/add.html',1,1486962119);
INSERT INTO `lovevi_action_log` VALUES (77,10,1,2047087142,'Menu',138,'操作url：/admin.php?s=/Menu/add.html',1,1486962148);
INSERT INTO `lovevi_action_log` VALUES (78,1,1,976761770,'member',1,'admin在2017-02-13 15:19登录了后台',1,1486970372);
INSERT INTO `lovevi_action_log` VALUES (79,1,1,976761770,'member',1,'admin在2017-02-13 16:01登录了后台',1,1486972907);
INSERT INTO `lovevi_action_log` VALUES (80,1,1,2047087142,'member',1,'admin在2017-02-13 18:33登录了后台',1,1486982015);
INSERT INTO `lovevi_action_log` VALUES (81,1,1,2047087142,'member',1,'admin在2017-02-13 19:46登录了后台',1,1486986377);
INSERT INTO `lovevi_action_log` VALUES (82,1,1,976761770,'member',1,'admin在2017-02-14 10:01登录了后台',1,1487037660);
INSERT INTO `lovevi_action_log` VALUES (83,1,1,-546787470,'member',1,'admin在2017-02-14 10:19登录了后台',1,1487038781);
INSERT INTO `lovevi_action_log` VALUES (84,1,1,236004752,'member',1,'admin在2017-02-14 10:50登录了后台',1,1487040658);
INSERT INTO `lovevi_action_log` VALUES (85,1,1,236004754,'member',1,'admin在2017-02-14 10:56登录了后台',1,1487040982);
INSERT INTO `lovevi_action_log` VALUES (86,1,1,992881753,'member',1,'admin在2017-02-14 18:14登录了后台',1,1487067299);
INSERT INTO `lovevi_action_log` VALUES (87,1,1,976761770,'member',1,'admin在2017-02-15 09:17登录了后台',1,1487121427);
INSERT INTO `lovevi_action_log` VALUES (88,1,1,-611116538,'member',1,'admin在2017-02-16 16:28登录了后台',1,1487233711);
INSERT INTO `lovevi_action_log` VALUES (89,1,1,2047087142,'member',1,'admin在2017-02-16 17:35登录了后台',1,1487237705);
INSERT INTO `lovevi_action_log` VALUES (90,1,1,-611116538,'member',1,'admin在2017-02-16 17:52登录了后台',1,1487238760);
INSERT INTO `lovevi_action_log` VALUES (91,10,1,2047087142,'Menu',139,'操作url：/admin.php?s=/Menu/add.html',1,1487240708);
INSERT INTO `lovevi_action_log` VALUES (92,10,1,2047087142,'Menu',139,'操作url：/admin.php?s=/Menu/edit.html',1,1487240727);
INSERT INTO `lovevi_action_log` VALUES (93,1,1,1879470195,'member',1,'admin在2017-02-16 19:25登录了后台',1,1487244332);
INSERT INTO `lovevi_action_log` VALUES (94,1,12,-546784285,'member',12,'qwe123在2017-02-16 20:27登录了后台',1,1487248027);
INSERT INTO `lovevi_action_log` VALUES (95,1,12,-546784285,'member',12,'qwe123在2017-02-16 20:27登录了后台',1,1487248075);
INSERT INTO `lovevi_action_log` VALUES (96,1,12,-546784285,'member',12,'qwe123在2017-02-16 20:30登录了后台',1,1487248248);
INSERT INTO `lovevi_action_log` VALUES (97,1,12,-546784285,'member',12,'qwe123在2017-02-16 20:31登录了后台',1,1487248292);
INSERT INTO `lovevi_action_log` VALUES (98,1,1,2047087142,'member',1,'admin在2017-02-22 18:49登录了后台',1,1487760581);
INSERT INTO `lovevi_action_log` VALUES (99,1,1,-593283769,'member',1,'admin在2017-02-23 15:16登录了后台',1,1487834209);
INSERT INTO `lovevi_action_log` VALUES (100,1,1,-593283769,'member',1,'admin在2017-02-23 15:25登录了后台',1,1487834707);
INSERT INTO `lovevi_action_log` VALUES (101,1,1,2047087142,'member',1,'admin在2017-02-23 17:12登录了后台',1,1487841179);
INSERT INTO `lovevi_action_log` VALUES (102,1,1,-593283769,'member',1,'admin在2017-02-23 18:48登录了后台',1,1487846914);
INSERT INTO `lovevi_action_log` VALUES (103,1,1,-1225422099,'member',1,'admin在2017-02-24 08:36登录了后台',1,1487896593);
INSERT INTO `lovevi_action_log` VALUES (104,1,1,-593283769,'member',1,'admin在2017-02-24 11:28登录了后台',1,1487906907);
INSERT INTO `lovevi_action_log` VALUES (105,1,1,-593283769,'member',1,'admin在2017-02-24 13:27登录了后台',1,1487914037);
INSERT INTO `lovevi_action_log` VALUES (106,1,18,-593283769,'member',18,'老大在2017-02-24 14:30登录了后台',1,1487917840);
INSERT INTO `lovevi_action_log` VALUES (107,1,17,-593283769,'member',17,'冲锋车在2017-02-24 14:35登录了后台',1,1487918109);
INSERT INTO `lovevi_action_log` VALUES (108,1,16,-593283769,'member',16,'钢铁侠在2017-02-24 14:38登录了后台',1,1487918303);
INSERT INTO `lovevi_action_log` VALUES (109,1,15,-593283769,'member',15,'超人在2017-02-24 14:41登录了后台',1,1487918464);
INSERT INTO `lovevi_action_log` VALUES (110,1,14,-593283769,'member',14,'大圣在2017-02-24 14:41登录了后台',1,1487918517);
INSERT INTO `lovevi_action_log` VALUES (111,1,14,-593283769,'member',14,'大圣在2017-02-24 15:13登录了后台',1,1487920426);
INSERT INTO `lovevi_action_log` VALUES (112,1,1,-593283769,'member',1,'admin在2017-02-24 20:35登录了后台',1,1487939749);
INSERT INTO `lovevi_action_log` VALUES (113,1,18,-593283769,'member',18,'老大在2017-02-24 20:43登录了后台',1,1487940186);
INSERT INTO `lovevi_action_log` VALUES (114,1,1,-593283769,'member',1,'admin在2017-02-24 21:05登录了后台',1,1487941549);
INSERT INTO `lovevi_action_log` VALUES (115,1,1,2074868148,'member',1,'admin在2017-02-25 06:38登录了后台',1,1487975938);
INSERT INTO `lovevi_action_log` VALUES (116,10,1,2074868148,'Menu',75,'操作url：/admin.php?s=/Menu/edit.html',1,1487977436);
INSERT INTO `lovevi_action_log` VALUES (117,1,1,-1225606523,'member',1,'admin在2017-02-25 09:34登录了后台',1,1487986453);
INSERT INTO `lovevi_action_log` VALUES (118,1,1,-1225606523,'member',1,'admin在2017-02-25 16:01登录了后台',1,1488009709);
INSERT INTO `lovevi_action_log` VALUES (119,1,18,-1225606523,'member',18,'老大在2017-02-25 16:20登录了后台',1,1488010800);
INSERT INTO `lovevi_action_log` VALUES (120,1,18,-1225606523,'member',18,'老大在2017-02-25 16:23登录了后台',1,1488011021);
INSERT INTO `lovevi_action_log` VALUES (121,1,1,-1225606523,'member',1,'admin在2017-02-25 16:25登录了后台',1,1488011150);
INSERT INTO `lovevi_action_log` VALUES (122,1,18,-1225606523,'member',18,'老大在2017-02-25 16:27登录了后台',1,1488011264);
INSERT INTO `lovevi_action_log` VALUES (123,1,18,-1225606523,'member',18,'老大在2017-02-25 17:19登录了后台',1,1488014358);
INSERT INTO `lovevi_action_log` VALUES (124,1,18,-1225606523,'member',18,'老大在2017-02-25 17:37登录了后台',1,1488015435);
INSERT INTO `lovevi_action_log` VALUES (125,1,15,-1225606523,'member',15,'超人在2017-02-25 18:29登录了后台',1,1488018579);
INSERT INTO `lovevi_action_log` VALUES (126,1,1,2074868148,'member',1,'admin在2017-02-25 19:57登录了后台',1,1488023855);
INSERT INTO `lovevi_action_log` VALUES (127,1,19,2074868148,'member',19,'test在2017-02-25 19:58登录了后台',1,1488023919);
INSERT INTO `lovevi_action_log` VALUES (128,1,18,-1225606523,'member',18,'老大在2017-02-25 21:03登录了后台',1,1488027816);
INSERT INTO `lovevi_action_log` VALUES (129,1,16,-1225606523,'member',16,'钢铁侠在2017-02-25 22:55登录了后台',1,1488034519);
INSERT INTO `lovevi_action_log` VALUES (130,1,1,-1225606523,'member',1,'admin在2017-02-25 22:56登录了后台',1,1488034581);
INSERT INTO `lovevi_action_log` VALUES (131,1,20,-1225606523,'member',20,'大哥大在2017-02-25 23:43登录了后台',1,1488037400);
INSERT INTO `lovevi_action_log` VALUES (132,1,1,-1225606523,'member',1,'admin在2017-02-26 00:11登录了后台',1,1488039101);
INSERT INTO `lovevi_action_log` VALUES (133,1,1,2074868148,'member',1,'admin在2017-02-26 08:42登录了后台',1,1488069726);
INSERT INTO `lovevi_action_log` VALUES (134,1,19,2074868148,'member',19,'test在2017-02-26 08:42登录了后台',1,1488069745);
INSERT INTO `lovevi_action_log` VALUES (135,1,18,-1225606523,'member',18,'老大在2017-02-26 10:57登录了后台',1,1488077831);
INSERT INTO `lovevi_action_log` VALUES (136,1,1,2074868148,'member',1,'admin在2017-02-26 11:30登录了后台',1,1488079815);
INSERT INTO `lovevi_action_log` VALUES (137,10,1,2074868148,'Menu',27,'操作url：/admin.php?s=/Menu/edit.html',1,1488079832);
INSERT INTO `lovevi_action_log` VALUES (138,10,1,2074868148,'Menu',27,'操作url：/admin.php?s=/Menu/edit.html',1,1488079880);
INSERT INTO `lovevi_action_log` VALUES (139,1,18,-1225606523,'member',18,'老大在2017-02-26 11:34登录了后台',1,1488080044);
INSERT INTO `lovevi_action_log` VALUES (140,1,1,-1225606523,'member',1,'admin在2017-02-26 11:36登录了后台',1,1488080165);
INSERT INTO `lovevi_action_log` VALUES (141,1,18,-1225606523,'member',18,'老大在2017-02-26 11:44登录了后台',1,1488080690);
INSERT INTO `lovevi_action_log` VALUES (142,1,1,-1225606523,'member',1,'admin在2017-02-26 11:50登录了后台',1,1488081023);
INSERT INTO `lovevi_action_log` VALUES (143,1,15,-1225606523,'member',15,'超人在2017-02-26 12:17登录了后台',1,1488082647);
INSERT INTO `lovevi_action_log` VALUES (144,1,16,-1225606523,'member',16,'钢铁侠在2017-02-26 12:18登录了后台',1,1488082720);
INSERT INTO `lovevi_action_log` VALUES (145,1,17,-1225606523,'member',17,'冲锋车在2017-02-26 12:20登录了后台',1,1488082810);
INSERT INTO `lovevi_action_log` VALUES (146,1,18,-1225606523,'member',18,'老大在2017-02-26 12:21登录了后台',1,1488082890);
INSERT INTO `lovevi_action_log` VALUES (147,1,1,-1225606523,'member',1,'admin在2017-02-26 12:22登录了后台',1,1488082961);
INSERT INTO `lovevi_action_log` VALUES (148,1,1,-1347972490,'member',1,'admin在2017-02-26 15:50登录了后台',1,1488095421);
INSERT INTO `lovevi_action_log` VALUES (149,1,24,1934914434,'member',24,'可口可乐在2017-02-26 15:54登录了后台',1,1488095676);
INSERT INTO `lovevi_action_log` VALUES (150,1,1,-1225606523,'member',1,'admin在2017-02-26 16:47登录了后台',1,1488098875);
INSERT INTO `lovevi_action_log` VALUES (151,1,24,1934914434,'member',24,'可口可乐在2017-02-26 17:27登录了后台',1,1488101222);
INSERT INTO `lovevi_action_log` VALUES (152,1,1,-1225606523,'member',1,'admin在2017-02-26 19:50登录了后台',1,1488109852);
INSERT INTO `lovevi_action_log` VALUES (153,1,1,976761770,'member',1,'admin在2017-02-27 10:55登录了后台',1,1488164128);
INSERT INTO `lovevi_action_log` VALUES (154,1,1,-1225606798,'member',1,'admin在2017-02-27 12:34登录了后台',1,1488170059);
INSERT INTO `lovevi_action_log` VALUES (155,1,23,1934914423,'member',23,'美能达在2017-02-27 12:35登录了后台',1,1488170132);
INSERT INTO `lovevi_action_log` VALUES (156,1,1,-1225606798,'member',1,'admin在2017-02-27 13:36登录了后台',1,1488173779);
INSERT INTO `lovevi_action_log` VALUES (157,1,18,-1225606798,'member',18,'老大在2017-02-27 13:38登录了后台',1,1488173902);
INSERT INTO `lovevi_action_log` VALUES (158,1,1,-1225606798,'member',1,'admin在2017-02-27 13:40登录了后台',1,1488174032);
INSERT INTO `lovevi_action_log` VALUES (159,1,15,-1225606798,'member',15,'超人在2017-02-27 13:51登录了后台',1,1488174688);
INSERT INTO `lovevi_action_log` VALUES (160,1,16,-1225606798,'member',16,'钢铁侠在2017-02-27 13:52登录了后台',1,1488174756);
INSERT INTO `lovevi_action_log` VALUES (161,1,17,-1225606798,'member',17,'冲锋车在2017-02-27 13:53登录了后台',1,1488174839);
INSERT INTO `lovevi_action_log` VALUES (162,1,18,-1225606798,'member',18,'老大在2017-02-27 13:54登录了后台',1,1488174884);
INSERT INTO `lovevi_action_log` VALUES (163,1,20,-1225606798,'member',20,'大哥大在2017-02-27 13:55登录了后台',1,1488174926);
INSERT INTO `lovevi_action_log` VALUES (164,1,1,-1225606798,'member',1,'admin在2017-02-27 13:55登录了后台',1,1488174951);
INSERT INTO `lovevi_action_log` VALUES (165,1,13,-1225606798,'member',13,'zckj8899在2017-02-27 14:00登录了后台',1,1488175212);
INSERT INTO `lovevi_action_log` VALUES (166,1,1,-1225606798,'member',1,'admin在2017-02-27 14:00登录了后台',1,1488175241);
INSERT INTO `lovevi_action_log` VALUES (167,1,13,-1225606798,'member',13,'zckj8899在2017-02-27 14:01登录了后台',1,1488175282);
INSERT INTO `lovevi_action_log` VALUES (168,1,1,-1225606798,'member',1,'admin在2017-02-27 14:04登录了后台',1,1488175440);
INSERT INTO `lovevi_action_log` VALUES (169,1,1,1782137973,'member',1,'admin在2017-02-27 16:09登录了后台',1,1488182944);
INSERT INTO `lovevi_action_log` VALUES (170,1,1,1782390402,'member',1,'admin在2017-02-28 22:35登录了后台',1,1488292531);
INSERT INTO `lovevi_action_log` VALUES (171,1,1,1782390402,'member',1,'admin在2017-02-28 22:40登录了后台',1,1488292823);
INSERT INTO `lovevi_action_log` VALUES (172,1,23,1934914699,'member',23,'美能达在2017-02-28 22:56登录了后台',1,1488293769);
INSERT INTO `lovevi_action_log` VALUES (173,1,18,1886659939,'member',18,'老大在2017-03-01 14:21登录了后台',1,1488349263);
INSERT INTO `lovevi_action_log` VALUES (174,1,1,1886659939,'member',1,'admin在2017-03-01 14:22登录了后台',1,1488349330);
INSERT INTO `lovevi_action_log` VALUES (175,1,1,1934914699,'member',1,'admin在2017-03-01 14:29登录了后台',1,1488349745);
INSERT INTO `lovevi_action_log` VALUES (176,1,1,1934914699,'member',1,'admin在2017-03-01 14:39登录了后台',1,1488350380);
INSERT INTO `lovevi_action_log` VALUES (177,1,1,-593238745,'member',1,'admin在2017-03-01 15:02登录了后台',1,1488351741);
INSERT INTO `lovevi_action_log` VALUES (178,1,1,1934914699,'member',1,'admin在2017-03-01 17:06登录了后台',1,1488359213);
INSERT INTO `lovevi_action_log` VALUES (179,1,18,2000605510,'member',18,'老大在2017-03-01 21:18登录了后台',1,1488374316);
INSERT INTO `lovevi_action_log` VALUES (180,1,23,1934915503,'member',23,'美能达在2017-03-01 21:35登录了后台',1,1488375348);
INSERT INTO `lovevi_action_log` VALUES (181,1,1,1934915503,'member',1,'admin在2017-03-01 21:42登录了后台',1,1488375726);
INSERT INTO `lovevi_action_log` VALUES (182,1,1,1886659939,'member',1,'admin在2017-03-02 11:42登录了后台',1,1488426174);
INSERT INTO `lovevi_action_log` VALUES (183,1,16,-593238745,'member',16,'钢铁侠在2017-03-02 11:49登录了后台',1,1488426540);
INSERT INTO `lovevi_action_log` VALUES (184,1,18,1886656470,'member',18,'老大在2017-03-02 15:51登录了后台',1,1488441069);
INSERT INTO `lovevi_action_log` VALUES (185,1,18,1886656470,'member',18,'老大在2017-03-02 15:55登录了后台',1,1488441300);
INSERT INTO `lovevi_action_log` VALUES (186,1,18,1886656470,'member',18,'老大在2017-03-02 16:39登录了后台',1,1488443957);
INSERT INTO `lovevi_action_log` VALUES (187,1,18,2000583875,'member',18,'老大在2017-03-02 19:40登录了后台',1,1488454837);
INSERT INTO `lovevi_action_log` VALUES (188,1,1,1949795652,'member',1,'admin在2017-03-02 20:46登录了后台',1,1488458762);
INSERT INTO `lovevi_action_log` VALUES (189,1,1,1949795652,'member',1,'admin在2017-03-02 20:56登录了后台',1,1488459415);
INSERT INTO `lovevi_action_log` VALUES (190,1,16,1949795652,'member',16,'钢铁侠在2017-03-02 21:12登录了后台',1,1488460354);
INSERT INTO `lovevi_action_log` VALUES (191,1,1,1949795652,'member',1,'admin在2017-03-02 21:13登录了后台',1,1488460427);
INSERT INTO `lovevi_action_log` VALUES (192,1,1,-896951258,'member',1,'admin在2017-03-02 22:03登录了后台',1,1488463382);
INSERT INTO `lovevi_action_log` VALUES (193,1,18,1886656470,'member',18,'老大在2017-03-03 13:27登录了后台',1,1488518876);
INSERT INTO `lovevi_action_log` VALUES (194,1,18,2000583758,'member',18,'老大在2017-03-03 19:32登录了后台',1,1488540723);
INSERT INTO `lovevi_action_log` VALUES (195,1,18,2000604365,'member',18,'老大在2017-03-03 21:13登录了后台',1,1488546838);
INSERT INTO `lovevi_action_log` VALUES (196,1,18,2000583758,'member',18,'老大在2017-03-03 23:01登录了后台',1,1488553311);
INSERT INTO `lovevi_action_log` VALUES (197,1,18,2000604365,'member',18,'老大在2017-03-04 07:44登录了后台',1,1488584684);
INSERT INTO `lovevi_action_log` VALUES (198,1,18,1886656470,'member',18,'老大在2017-03-04 11:01登录了后台',1,1488596503);
INSERT INTO `lovevi_action_log` VALUES (199,1,18,2000604403,'member',18,'老大在2017-03-05 13:29登录了后台',1,1488691758);
INSERT INTO `lovevi_action_log` VALUES (200,1,18,-1220725790,'member',18,'老大在2017-03-05 13:51登录了后台',1,1488693114);
INSERT INTO `lovevi_action_log` VALUES (201,1,18,-1220725825,'member',18,'老大在2017-03-05 14:05登录了后台',1,1488693927);
INSERT INTO `lovevi_action_log` VALUES (202,1,18,2000604403,'member',18,'老大在2017-03-05 14:18登录了后台',1,1488694683);
INSERT INTO `lovevi_action_log` VALUES (203,1,18,2000605495,'member',18,'老大在2017-03-05 19:22登录了后台',1,1488712953);
INSERT INTO `lovevi_action_log` VALUES (204,1,1,-1225606818,'member',1,'admin在2017-03-05 22:29登录了后台',1,1488724157);
INSERT INTO `lovevi_action_log` VALUES (205,1,1,-593282747,'member',1,'admin在2017-03-06 10:59登录了后台',1,1488769149);
INSERT INTO `lovevi_action_log` VALUES (206,1,1,-593282747,'member',1,'admin在2017-03-06 11:04登录了后台',1,1488769489);
INSERT INTO `lovevi_action_log` VALUES (207,1,1,-593282747,'member',1,'admin在2017-03-06 14:40登录了后台',1,1488782412);
INSERT INTO `lovevi_action_log` VALUES (208,1,27,1934915576,'member',27,'七彩跑道在2017-03-06 15:34登录了后台',1,1488785672);
INSERT INTO `lovevi_action_log` VALUES (209,1,28,-593282747,'member',28,'散客平台在2017-03-06 15:43登录了后台',1,1488786224);
INSERT INTO `lovevi_action_log` VALUES (210,1,28,-593282747,'member',28,'散客平台在2017-03-06 15:45登录了后台',1,1488786304);
INSERT INTO `lovevi_action_log` VALUES (211,1,28,-593282747,'member',28,'散客平台在2017-03-06 15:45登录了后台',1,1488786345);
INSERT INTO `lovevi_action_log` VALUES (212,1,1,-593282747,'member',1,'admin在2017-03-06 15:46登录了后台',1,1488786381);
INSERT INTO `lovevi_action_log` VALUES (213,1,28,-593282747,'member',28,'散客平台在2017-03-06 15:47登录了后台',1,1488786449);
INSERT INTO `lovevi_action_log` VALUES (214,1,1,-593282747,'member',1,'admin在2017-03-06 15:48登录了后台',1,1488786519);
INSERT INTO `lovevi_action_log` VALUES (215,1,28,-593282747,'member',28,'散客平台在2017-03-06 15:56登录了后台',1,1488786996);
INSERT INTO `lovevi_action_log` VALUES (216,1,1,-593282747,'member',1,'admin在2017-03-06 15:58登录了后台',1,1488787124);
INSERT INTO `lovevi_action_log` VALUES (217,1,28,-593282747,'member',28,'散客平台在2017-03-06 16:02登录了后台',1,1488787325);
INSERT INTO `lovevi_action_log` VALUES (218,1,1,-593282747,'member',1,'admin在2017-03-06 16:02登录了后台',1,1488787370);
INSERT INTO `lovevi_action_log` VALUES (219,1,28,-593282747,'member',28,'散客平台在2017-03-06 17:10登录了后台',1,1488791432);
INSERT INTO `lovevi_action_log` VALUES (220,1,1,-593282747,'member',1,'admin在2017-03-06 18:14登录了后台',1,1488795297);
INSERT INTO `lovevi_action_log` VALUES (221,1,27,-593282747,'member',27,'七彩跑道在2017-03-06 19:16登录了后台',1,1488798983);
INSERT INTO `lovevi_action_log` VALUES (222,1,1,-593282747,'member',1,'admin在2017-03-06 20:07登录了后台',1,1488802070);
INSERT INTO `lovevi_action_log` VALUES (223,1,27,-593282747,'member',27,'七彩跑道在2017-03-06 20:27登录了后台',1,1488803268);
INSERT INTO `lovevi_action_log` VALUES (224,1,27,-593282747,'member',27,'七彩跑道在2017-03-06 21:54登录了后台',1,1488808476);
INSERT INTO `lovevi_action_log` VALUES (225,1,1,-593282747,'member',1,'admin在2017-03-06 22:07登录了后台',1,1488809220);
INSERT INTO `lovevi_action_log` VALUES (226,1,27,-593282747,'member',27,'七彩跑道在2017-03-06 22:09登录了后台',1,1488809346);
INSERT INTO `lovevi_action_log` VALUES (227,1,1,-593282673,'member',1,'admin在2017-03-07 08:46登录了后台',1,1488847603);
INSERT INTO `lovevi_action_log` VALUES (228,1,27,-593282673,'member',27,'七彩跑道在2017-03-07 08:47登录了后台',1,1488847670);
INSERT INTO `lovevi_action_log` VALUES (229,1,27,-593282673,'member',27,'七彩跑道在2017-03-07 09:52登录了后台',1,1488851533);
INSERT INTO `lovevi_action_log` VALUES (230,1,1,1904225587,'member',1,'admin在2017-03-13 18:41登录了后台',1,1489401690);
INSERT INTO `lovevi_action_log` VALUES (231,1,1,976761770,'member',1,'admin在2017-03-16 08:48登录了后台',1,1489625291);
INSERT INTO `lovevi_action_log` VALUES (232,10,1,976761770,'Menu',140,'操作url：/admin.php?s=/Menu/add.html',1,1489625562);
INSERT INTO `lovevi_action_log` VALUES (233,10,1,976761770,'Menu',141,'操作url：/admin.php?s=/Menu/add.html',1,1489625608);
INSERT INTO `lovevi_action_log` VALUES (234,10,1,976761770,'Menu',141,'操作url：/admin.php?s=/Menu/edit.html',1,1489625642);
INSERT INTO `lovevi_action_log` VALUES (235,1,1,976761770,'member',1,'admin在2017-03-16 09:53登录了后台',1,1489629180);
INSERT INTO `lovevi_action_log` VALUES (236,1,1,1904225587,'member',1,'admin在2017-03-16 11:43登录了后台',1,1489635797);
INSERT INTO `lovevi_action_log` VALUES (237,1,1,1904225587,'member',1,'admin在2017-03-16 16:51登录了后台',1,1489654308);
INSERT INTO `lovevi_action_log` VALUES (238,1,1,1904225587,'member',1,'admin在2017-03-16 19:29登录了后台',1,1489663793);
INSERT INTO `lovevi_action_log` VALUES (239,1,1,976761770,'member',1,'admin在2017-03-17 09:03登录了后台',1,1489712627);
INSERT INTO `lovevi_action_log` VALUES (240,1,1,1904225587,'member',1,'admin在2017-03-17 12:46登录了后台',1,1489725978);
INSERT INTO `lovevi_action_log` VALUES (241,10,1,1904225587,'Menu',141,'操作url：/admin.php?s=/Menu/edit.html',1,1489726406);
INSERT INTO `lovevi_action_log` VALUES (242,1,1,976761770,'member',1,'admin在2017-03-17 14:45登录了后台',1,1489733143);
INSERT INTO `lovevi_action_log` VALUES (243,1,1,1904295548,'member',1,'admin在2017-03-17 14:49登录了后台',1,1489733369);
INSERT INTO `lovevi_action_log` VALUES (244,1,1,976761770,'member',1,'admin在2017-03-17 16:10登录了后台',1,1489738237);
INSERT INTO `lovevi_action_log` VALUES (245,1,1,1904225587,'member',1,'admin在2017-03-17 16:51登录了后台',1,1489740712);
INSERT INTO `lovevi_action_log` VALUES (246,1,1,976761770,'member',1,'admin在2017-03-23 15:44登录了后台',1,1490255081);
INSERT INTO `lovevi_action_log` VALUES (247,1,1,1904225587,'member',1,'admin在2017-03-24 20:31登录了后台',1,1490358690);
INSERT INTO `lovevi_action_log` VALUES (248,1,1,1904225587,'member',1,'admin在2017-03-25 13:27登录了后台',1,1490419655);
INSERT INTO `lovevi_action_log` VALUES (249,1,1,1967868805,'member',1,'admin在2017-03-25 19:08登录了后台',1,1490440100);
INSERT INTO `lovevi_action_log` VALUES (250,1,1,1967868805,'member',1,'admin在2017-03-25 19:18登录了后台',1,1490440694);
INSERT INTO `lovevi_action_log` VALUES (251,1,1,1967868805,'member',1,'admin在2017-03-25 19:51登录了后台',1,1490442717);
INSERT INTO `lovevi_action_log` VALUES (252,1,1,1967868805,'member',1,'admin在2017-03-26 10:59登录了后台',1,1490497159);
INSERT INTO `lovevi_action_log` VALUES (253,1,32,1967868805,'member',32,'titi在2017-03-26 16:26登录了后台',1,1490516775);
INSERT INTO `lovevi_action_log` VALUES (254,1,1,1967868805,'member',1,'admin在2017-03-27 21:47登录了后台',1,1490622476);
INSERT INTO `lovevi_action_log` VALUES (255,1,1,1967868805,'member',1,'admin在2017-03-28 09:22登录了后台',1,1490664143);
INSERT INTO `lovevi_action_log` VALUES (256,1,1,1904225587,'member',1,'admin在2017-03-28 19:31登录了后台',1,1490700677);
INSERT INTO `lovevi_action_log` VALUES (257,1,1,976761770,'member',1,'admin在2017-03-29 09:05登录了后台',1,1490749556);
INSERT INTO `lovevi_action_log` VALUES (258,1,1,1967868805,'member',1,'admin在2017-03-29 11:39登录了后台',1,1490758796);
INSERT INTO `lovevi_action_log` VALUES (259,1,1,1967868805,'member',1,'admin在2017-03-29 20:27登录了后台',1,1490790477);
INSERT INTO `lovevi_action_log` VALUES (260,1,1,1967868805,'member',1,'admin在2017-03-31 10:50登录了后台',1,1490928616);
INSERT INTO `lovevi_action_log` VALUES (261,1,34,1967868805,'member',34,'dog在2017-03-31 12:40登录了后台',1,1490935246);
INSERT INTO `lovevi_action_log` VALUES (262,1,1,1967868805,'member',1,'admin在2017-03-31 13:42登录了后台',1,1490938936);
INSERT INTO `lovevi_action_log` VALUES (263,1,1,2074868964,'member',1,'admin在2017-04-01 21:00登录了后台',1,1491051616);
INSERT INTO `lovevi_action_log` VALUES (264,1,1,2074868964,'member',1,'admin在2017-04-02 19:23登录了后台',1,1491132227);
INSERT INTO `lovevi_action_log` VALUES (265,10,1,2074868964,'Menu',142,'操作url：/admin.php?s=/Menu/add.html',1,1491132395);
INSERT INTO `lovevi_action_log` VALUES (266,10,1,2074868964,'Menu',142,'操作url：/admin.php?s=/Menu/edit.html',1,1491132408);
INSERT INTO `lovevi_action_log` VALUES (267,10,1,2074868964,'Menu',142,'操作url：/admin.php?s=/Menu/edit.html',1,1491132417);
INSERT INTO `lovevi_action_log` VALUES (268,1,1,1967869860,'member',1,'admin在2017-04-02 21:20登录了后台',1,1491139247);
INSERT INTO `lovevi_action_log` VALUES (269,1,34,1967869860,'member',34,'dog在2017-04-02 21:24登录了后台',1,1491139464);
INSERT INTO `lovevi_action_log` VALUES (270,1,1,1967854364,'member',1,'admin在2017-04-06 15:10登录了后台',1,1491462649);
INSERT INTO `lovevi_action_log` VALUES (271,1,1,976761770,'member',1,'admin在2017-04-07 08:04登录了后台',1,1491523481);
INSERT INTO `lovevi_action_log` VALUES (272,1,1,976761770,'member',1,'admin在2017-04-07 09:22登录了后台',1,1491528137);
INSERT INTO `lovevi_action_log` VALUES (273,1,1,976761770,'member',1,'admin在2017-04-07 10:42登录了后台',1,1491532927);
INSERT INTO `lovevi_action_log` VALUES (274,1,1,976761770,'member',1,'admin在2017-04-07 11:36登录了后台',1,1491536172);
INSERT INTO `lovevi_action_log` VALUES (275,1,1,2047087409,'member',1,'admin在2017-04-11 18:57登录了后台',1,1491908259);
INSERT INTO `lovevi_action_log` VALUES (276,1,1,2047087409,'member',1,'admin在2017-04-12 20:15登录了后台',1,1491999325);
INSERT INTO `lovevi_action_log` VALUES (277,1,1,2047087409,'member',1,'admin在2017-04-23 20:17登录了后台',1,1492949833);
INSERT INTO `lovevi_action_log` VALUES (278,1,1,976761770,'member',1,'admin在2017-04-25 16:33登录了后台',1,1493109200);
INSERT INTO `lovevi_action_log` VALUES (279,1,1,2047087409,'member',1,'admin在2017-04-25 18:54登录了后台',1,1493117696);
INSERT INTO `lovevi_action_log` VALUES (280,1,1,2047087409,'member',1,'admin在2017-04-25 21:14登录了后台',1,1493126096);
INSERT INTO `lovevi_action_log` VALUES (281,1,1,2047087409,'member',1,'admin在2017-04-26 13:15登录了后台',1,1493183717);
INSERT INTO `lovevi_action_log` VALUES (282,1,1,2047087409,'member',1,'admin在2017-04-30 16:42登录了后台',1,1493541748);
INSERT INTO `lovevi_action_log` VALUES (283,1,1,2047087409,'member',1,'admin在2017-05-22 14:08登录了后台',1,1495433280);
INSERT INTO `lovevi_action_log` VALUES (284,1,1,-1263724288,'member',1,'admin在2017-05-22 14:09登录了后台',1,1495433380);
INSERT INTO `lovevi_action_log` VALUES (285,1,1,2090915900,'member',1,'admin在2017-05-30 20:23登录了后台',1,1496147039);
INSERT INTO `lovevi_action_log` VALUES (286,1,1,1904225400,'member',1,'admin在2017-07-17 12:00登录了后台',1,1500264017);
INSERT INTO `lovevi_action_log` VALUES (287,1,1,720607571,'member',1,'admin在2017-07-17 12:01登录了后台',1,1500264097);
INSERT INTO `lovevi_action_log` VALUES (288,1,1,1904257798,'member',1,'admin在2017-08-03 14:58登录了后台',1,1501743508);
INSERT INTO `lovevi_action_log` VALUES (289,1,1,1904257798,'member',1,'admin在2017-08-05 20:14登录了后台',1,1501935262);
INSERT INTO `lovevi_action_log` VALUES (290,10,1,1904257798,'Menu',143,'操作url：/admin.php?s=/Menu/add.html',1,1501939405);
INSERT INTO `lovevi_action_log` VALUES (291,10,1,1904257798,'Menu',143,'操作url：/admin.php?s=/Menu/edit.html',1,1501939419);
INSERT INTO `lovevi_action_log` VALUES (292,10,1,1904257798,'Menu',144,'操作url：/admin.php?s=/Menu/add.html',1,1501939433);
INSERT INTO `lovevi_action_log` VALUES (293,10,1,1904257798,'Menu',145,'操作url：/admin.php?s=/Menu/add.html',1,1501939466);
INSERT INTO `lovevi_action_log` VALUES (294,10,1,1904257798,'Menu',146,'操作url：/admin.php?s=/Menu/add.html',1,1501939493);
INSERT INTO `lovevi_action_log` VALUES (295,10,1,1904257798,'Menu',147,'操作url：/admin.php?s=/Menu/add.html',1,1501939528);
INSERT INTO `lovevi_action_log` VALUES (296,10,1,1904257798,'Menu',148,'操作url：/admin.php?s=/Menu/add.html',1,1501939549);
INSERT INTO `lovevi_action_log` VALUES (297,10,1,1904257798,'Menu',149,'操作url：/admin.php?s=/Menu/add.html',1,1501939622);
INSERT INTO `lovevi_action_log` VALUES (298,10,1,1904257798,'Menu',150,'操作url：/admin.php?s=/Menu/add.html',1,1501939672);
INSERT INTO `lovevi_action_log` VALUES (299,10,1,1904257798,'Menu',151,'操作url：/admin.php?s=/Menu/add.html',1,1501939696);
INSERT INTO `lovevi_action_log` VALUES (300,1,1,1904257798,'member',1,'admin在2017-08-06 09:16登录了后台',1,1501982205);
INSERT INTO `lovevi_action_log` VALUES (301,10,1,1904257798,'Menu',144,'操作url：/admin.php?s=/Menu/edit.html',1,1501984114);
INSERT INTO `lovevi_action_log` VALUES (302,10,1,1904257798,'Menu',152,'操作url：/admin.php?s=/Menu/add.html',1,1501984141);
INSERT INTO `lovevi_action_log` VALUES (303,10,1,1904257798,'Menu',153,'操作url：/admin.php?s=/Menu/add.html',1,1501984157);
INSERT INTO `lovevi_action_log` VALUES (304,10,1,1904257798,'Menu',143,'操作url：/admin.php?s=/Menu/edit.html',1,1501984173);
INSERT INTO `lovevi_action_log` VALUES (305,10,1,1904257798,'Menu',134,'操作url：/admin.php?s=/Menu/edit.html',1,1501985071);
INSERT INTO `lovevi_action_log` VALUES (306,10,1,1904257798,'Menu',133,'操作url：/admin.php?s=/Menu/edit.html',1,1502002147);
INSERT INTO `lovevi_action_log` VALUES (307,10,1,1904257798,'Menu',149,'操作url：/admin.php?s=/Menu/edit.html',1,1502002163);
INSERT INTO `lovevi_action_log` VALUES (308,10,1,1904257798,'Menu',154,'操作url：/admin.php?s=/Menu/add.html',1,1502002182);
INSERT INTO `lovevi_action_log` VALUES (309,10,1,1904257798,'Menu',150,'操作url：/admin.php?s=/Menu/edit.html',1,1502002597);
INSERT INTO `lovevi_action_log` VALUES (310,1,1,1904257798,'member',1,'admin在2017-08-07 11:15登录了后台',1,1502075721);
INSERT INTO `lovevi_action_log` VALUES (311,1,1,1904257798,'member',1,'admin在2017-08-08 14:49登录了后台',1,1502174941);
INSERT INTO `lovevi_action_log` VALUES (312,1,1,1904257890,'member',1,'admin在2017-08-10 11:36登录了后台',1,1502336193);
INSERT INTO `lovevi_action_log` VALUES (313,1,1,1904257890,'member',1,'admin在2017-08-13 12:25登录了后台',1,1502598335);
INSERT INTO `lovevi_action_log` VALUES (314,10,1,1904257890,'Menu',16,'操作url：/admin.php?s=/Menu/edit.html',1,1502598377);
INSERT INTO `lovevi_action_log` VALUES (315,10,1,1904257890,'Menu',142,'操作url：/admin.php?s=/Menu/edit.html',1,1502598388);
INSERT INTO `lovevi_action_log` VALUES (316,10,1,1904257890,'Menu',140,'操作url：/admin.php?s=/Menu/edit.html',1,1502598400);
INSERT INTO `lovevi_action_log` VALUES (317,10,1,1904257890,'Menu',127,'操作url：/admin.php?s=/Menu/edit.html',1,1502598407);
INSERT INTO `lovevi_action_log` VALUES (318,10,1,1904257890,'Menu',126,'操作url：/admin.php?s=/Menu/edit.html',1,1502598412);
INSERT INTO `lovevi_action_log` VALUES (319,10,1,1904257890,'Menu',139,'操作url：/admin.php?s=/Menu/edit.html',1,1502598426);
INSERT INTO `lovevi_action_log` VALUES (320,10,1,1904257890,'Menu',138,'操作url：/admin.php?s=/Menu/edit.html',1,1502598433);
INSERT INTO `lovevi_action_log` VALUES (321,10,1,1904257890,'Menu',137,'操作url：/admin.php?s=/Menu/edit.html',1,1502598438);
INSERT INTO `lovevi_action_log` VALUES (322,1,1,1904257890,'member',1,'admin在2017-08-14 13:33登录了后台',1,1502688811);
INSERT INTO `lovevi_action_log` VALUES (323,1,1,242845404,'member',1,'admin在2017-08-14 13:37登录了后台',1,1502689058);
INSERT INTO `lovevi_action_log` VALUES (324,10,1,2074867920,'Menu',149,'操作url：/admin.php?s=/Menu/edit.html',1,1513167174);
INSERT INTO `lovevi_action_log` VALUES (325,10,1,2074867920,'Menu',155,'操作url：/admin.php?s=/Menu/add.html',1,1513170683);
INSERT INTO `lovevi_action_log` VALUES (326,1,1,976761770,'member',1,'admin在2017-12-14 08:17登录了后台',1,1513210672);
INSERT INTO `lovevi_action_log` VALUES (327,10,1,976761770,'Menu',134,'操作url：/admin.php?s=/Menu/edit.html',1,1513211897);
INSERT INTO `lovevi_action_log` VALUES (328,10,1,976761770,'Menu',156,'操作url：/admin.php?s=/Menu/add.html',1,1513211992);
INSERT INTO `lovevi_action_log` VALUES (329,10,1,976761770,'Menu',157,'操作url：/admin.php?s=/Menu/add.html',1,1513212011);
INSERT INTO `lovevi_action_log` VALUES (330,10,1,976761770,'Menu',135,'操作url：/admin.php?s=/Menu/edit.html',1,1513212018);
INSERT INTO `lovevi_action_log` VALUES (331,10,1,976761770,'Menu',134,'操作url：/admin.php?s=/Menu/edit.html',1,1513212052);
INSERT INTO `lovevi_action_log` VALUES (332,10,1,976761770,'Menu',158,'操作url：/admin.php?s=/Menu/add.html',1,1513212152);
INSERT INTO `lovevi_action_log` VALUES (333,1,1,976761770,'member',1,'admin在2017-12-14 08:52登录了后台',1,1513212743);
INSERT INTO `lovevi_action_log` VALUES (334,1,1,2074867920,'member',1,'admin在2017-12-14 19:09登录了后台',1,1513249794);
INSERT INTO `lovevi_action_log` VALUES (335,1,1,1904225794,'member',1,'admin在2017-12-17 12:54登录了后台',1,1513486447);
INSERT INTO `lovevi_action_log` VALUES (336,10,1,1904225794,'Menu',159,'操作url：/admin.php?s=/Menu/add.html',1,1513486517);
INSERT INTO `lovevi_action_log` VALUES (337,10,1,1904225794,'Menu',160,'操作url：/admin.php?s=/Menu/add.html',1,1513486553);
INSERT INTO `lovevi_action_log` VALUES (338,1,1,1904225794,'member',1,'admin在2017-12-24 06:26登录了后台',1,1514067967);
INSERT INTO `lovevi_action_log` VALUES (339,10,1,1904225794,'Menu',137,'操作url：/admin.php?s=/Menu/edit.html',1,1514068035);
INSERT INTO `lovevi_action_log` VALUES (340,10,1,1904225794,'Menu',138,'操作url：/admin.php?s=/Menu/edit.html',1,1514068042);
INSERT INTO `lovevi_action_log` VALUES (341,1,1,1904257883,'member',1,'admin在2017-12-26 18:46登录了后台',1,1514285173);
INSERT INTO `lovevi_action_log` VALUES (342,1,1,1904257883,'member',1,'admin在2017-12-27 18:50登录了后台',1,1514371829);
INSERT INTO `lovevi_action_log` VALUES (343,1,1,976761770,'member',1,'admin在2017-12-28 09:49登录了后台',1,1514425750);
INSERT INTO `lovevi_action_log` VALUES (344,1,1,1904257883,'member',1,'admin在2017-12-28 20:27登录了后台',1,1514464066);
INSERT INTO `lovevi_action_log` VALUES (345,1,1,1904257883,'member',1,'admin在2017-12-29 21:33登录了后台',1,1514554408);
INSERT INTO `lovevi_action_log` VALUES (346,1,1,1904257883,'member',1,'admin在2017-12-30 18:43登录了后台',1,1514630611);
INSERT INTO `lovevi_action_log` VALUES (347,1,1,1904257883,'member',1,'admin在2017-12-31 16:26登录了后台',1,1514708774);
INSERT INTO `lovevi_action_log` VALUES (348,1,1,1904257883,'member',1,'admin在2017-12-31 16:36登录了后台',1,1514709402);
INSERT INTO `lovevi_action_log` VALUES (349,1,1,1904257883,'member',1,'admin在2018-01-01 17:58登录了后台',1,1514800684);
INSERT INTO `lovevi_action_log` VALUES (350,1,1,1904257883,'member',1,'admin在2018-01-01 18:13登录了后台',1,1514801607);
INSERT INTO `lovevi_action_log` VALUES (351,1,1,1904257883,'member',1,'admin在2018-01-01 19:20登录了后台',1,1514805613);
INSERT INTO `lovevi_action_log` VALUES (352,1,1,1904257883,'member',1,'admin在2018-01-02 11:32登录了后台',1,1514863926);
INSERT INTO `lovevi_action_log` VALUES (353,1,1,1904258219,'member',1,'admin在2018-01-02 18:02登录了后台',1,1514887359);
INSERT INTO `lovevi_action_log` VALUES (354,1,1,1904258219,'member',1,'admin在2018-01-02 21:13登录了后台',1,1514898796);
INSERT INTO `lovevi_action_log` VALUES (355,1,1,993728074,'member',1,'admin在2018-01-04 14:49登录了后台',1,1515048555);
INSERT INTO `lovevi_action_log` VALUES (356,1,1,993728074,'member',1,'admin在2018-01-04 14:52登录了后台',1,1515048766);
INSERT INTO `lovevi_action_log` VALUES (357,1,1,993728074,'member',1,'admin在2018-01-04 14:57登录了后台',1,1515049022);
INSERT INTO `lovevi_action_log` VALUES (358,1,1,993728074,'member',1,'admin在2018-01-04 15:02登录了后台',1,1515049336);
INSERT INTO `lovevi_action_log` VALUES (359,10,1,993728074,'Menu',134,'操作url：/admin.php?s=/Menu/edit.html',1,1515049835);
INSERT INTO `lovevi_action_log` VALUES (360,10,1,993728074,'Menu',135,'操作url：/admin.php?s=/Menu/edit.html',1,1515050050);
INSERT INTO `lovevi_action_log` VALUES (361,1,1,976761770,'member',1,'admin在2018-01-04 16:02登录了后台',1,1515052932);
INSERT INTO `lovevi_action_log` VALUES (362,1,1,1904258219,'member',1,'admin在2018-01-04 20:34登录了后台',1,1515069261);
INSERT INTO `lovevi_action_log` VALUES (363,1,1,1904258219,'member',1,'admin在2018-01-04 21:50登录了后台',1,1515073802);
INSERT INTO `lovevi_action_log` VALUES (364,10,1,1904258219,'Menu',135,'操作url：/admin.php?s=/Menu/edit.html',1,1515074627);
INSERT INTO `lovevi_action_log` VALUES (365,1,1,1904258219,'member',1,'admin在2018-01-04 22:56登录了后台',1,1515077774);
INSERT INTO `lovevi_action_log` VALUES (366,1,1,1904258219,'member',1,'admin在2018-01-05 12:17登录了后台',1,1515125824);
INSERT INTO `lovevi_action_log` VALUES (367,10,1,1904258219,'Menu',134,'操作url：/admin.php?s=/Menu/edit.html',1,1515126579);
INSERT INTO `lovevi_action_log` VALUES (368,1,1,993728074,'member',1,'admin在2018-01-05 13:57登录了后台',1,1515131831);
INSERT INTO `lovevi_action_log` VALUES (369,1,1,993728074,'member',1,'admin在2018-01-05 14:07登录了后台',1,1515132441);
INSERT INTO `lovevi_action_log` VALUES (370,1,1,-546830743,'member',1,'admin在2018-01-06 16:01登录了后台',1,1515225713);
INSERT INTO `lovevi_action_log` VALUES (371,1,1,463285421,'member',1,'admin在2018-01-07 15:31登录了后台',1,1515310312);
INSERT INTO `lovevi_action_log` VALUES (372,1,1,1904258219,'member',1,'admin在2018-01-07 19:28登录了后台',1,1515324498);
INSERT INTO `lovevi_action_log` VALUES (373,1,1,463285421,'member',1,'admin在2018-01-08 12:03登录了后台',1,1515384214);
INSERT INTO `lovevi_action_log` VALUES (374,1,1,1904258219,'member',1,'admin在2018-01-08 19:46登录了后台',1,1515411998);
INSERT INTO `lovevi_action_log` VALUES (375,1,1,976761770,'member',1,'admin在2018-01-09 10:50登录了后台',1,1515466204);
INSERT INTO `lovevi_action_log` VALUES (376,10,1,976761770,'Menu',134,'操作url：/admin.php?s=/Menu/edit.html',1,1515466231);
INSERT INTO `lovevi_action_log` VALUES (377,1,1,976761770,'member',1,'admin在2018-01-09 11:38登录了后台',1,1515469084);
INSERT INTO `lovevi_action_log` VALUES (378,1,1,1904258219,'member',1,'admin在2018-01-09 12:34登录了后台',1,1515472479);
/*!40000 ALTER TABLE `lovevi_action_log` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_addons
#

DROP TABLE IF EXISTS `lovevi_addons`;
CREATE TABLE `lovevi_addons` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(40) NOT NULL COMMENT '插件名或标识',
  `title` varchar(20) NOT NULL DEFAULT '' COMMENT '中文名',
  `description` text COMMENT '插件描述',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态',
  `config` text COMMENT '配置',
  `author` varchar(40) DEFAULT '' COMMENT '作者',
  `version` varchar(20) DEFAULT '' COMMENT '版本号',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '安装时间',
  `has_adminlist` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否有后台列表',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COMMENT='插件表';

#
# Dumping data for table lovevi_addons
#

LOCK TABLES `lovevi_addons` WRITE;
/*!40000 ALTER TABLE `lovevi_addons` DISABLE KEYS */;
INSERT INTO `lovevi_addons` VALUES (2,'SiteStat','站点统计信息','统计站点的基础信息',1,'{\"title\":\"\\u7cfb\\u7edf\\u4fe1\\u606f\",\"width\":\"1\",\"display\":\"1\",\"status\":\"0\"}','thinkphp','0.1',1379512015,0);
INSERT INTO `lovevi_addons` VALUES (3,'DevTeam','开发团队信息','开发团队成员信息',1,'{\"title\":\"OneThink\\u5f00\\u53d1\\u56e2\\u961f\",\"width\":\"2\",\"display\":\"1\"}','thinkphp','0.1',1379512022,0);
INSERT INTO `lovevi_addons` VALUES (4,'SystemInfo','系统环境信息','用于显示一些服务器的信息',1,'{\"title\":\"\\u7cfb\\u7edf\\u4fe1\\u606f\",\"width\":\"2\",\"display\":\"1\"}','thinkphp','0.1',1379512036,0);
INSERT INTO `lovevi_addons` VALUES (5,'Editor','前台编辑器','用于增强整站长文本的输入和显示',1,'{\"editor_type\":\"2\",\"editor_wysiwyg\":\"1\",\"editor_height\":\"300px\",\"editor_resize_type\":\"1\"}','thinkphp','0.1',1379830910,0);
INSERT INTO `lovevi_addons` VALUES (6,'Attachment','附件','用于文档模型上传附件',1,'null','thinkphp','0.1',1379842319,1);
INSERT INTO `lovevi_addons` VALUES (9,'SocialComment','通用社交化评论','集成了各种社交化评论插件，轻松集成到系统中。',1,'{\"comment_type\":\"1\",\"comment_uid_youyan\":\"\",\"comment_short_name_duoshuo\":\"\",\"comment_data_list_duoshuo\":\"\"}','thinkphp','0.1',1380273962,0);
INSERT INTO `lovevi_addons` VALUES (15,'EditorForAdmin','后台编辑器','用于增强整站长文本的输入和显示',1,'{\"editor_type\":\"2\",\"editor_wysiwyg\":\"1\",\"editor_height\":\"500px\",\"editor_resize_type\":\"1\"}','thinkphp','0.1',1383126253,0);
/*!40000 ALTER TABLE `lovevi_addons` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_attachment
#

DROP TABLE IF EXISTS `lovevi_attachment`;
CREATE TABLE `lovevi_attachment` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '用户ID',
  `title` char(30) NOT NULL DEFAULT '' COMMENT '附件显示名',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '附件类型',
  `source` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '资源ID',
  `record_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '关联记录ID',
  `download` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '下载次数',
  `size` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '附件大小',
  `dir` int(12) unsigned NOT NULL DEFAULT '0' COMMENT '上级目录ID',
  `sort` int(8) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态',
  PRIMARY KEY (`id`),
  KEY `idx_record_status` (`record_id`,`status`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='附件表';

#
# Dumping data for table lovevi_attachment
#

LOCK TABLES `lovevi_attachment` WRITE;
/*!40000 ALTER TABLE `lovevi_attachment` DISABLE KEYS */;
/*!40000 ALTER TABLE `lovevi_attachment` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_attribute
#

DROP TABLE IF EXISTS `lovevi_attribute`;
CREATE TABLE `lovevi_attribute` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '字段名',
  `title` varchar(100) NOT NULL DEFAULT '' COMMENT '字段注释',
  `field` varchar(100) NOT NULL DEFAULT '' COMMENT '字段定义',
  `type` varchar(20) NOT NULL DEFAULT '' COMMENT '数据类型',
  `value` varchar(100) NOT NULL DEFAULT '' COMMENT '字段默认值',
  `remark` varchar(100) NOT NULL DEFAULT '' COMMENT '备注',
  `is_show` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '是否显示',
  `extra` varchar(255) NOT NULL DEFAULT '' COMMENT '参数',
  `model_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '模型id',
  `is_must` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否必填',
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '状态',
  `update_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `create_time` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `validate_rule` varchar(255) NOT NULL DEFAULT '',
  `validate_time` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `error_info` varchar(100) NOT NULL DEFAULT '',
  `validate_type` varchar(25) NOT NULL DEFAULT '',
  `auto_rule` varchar(100) NOT NULL DEFAULT '',
  `auto_time` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `auto_type` varchar(25) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  KEY `model_id` (`model_id`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COMMENT='模型属性表';

#
# Dumping data for table lovevi_attribute
#

LOCK TABLES `lovevi_attribute` WRITE;
/*!40000 ALTER TABLE `lovevi_attribute` DISABLE KEYS */;
INSERT INTO `lovevi_attribute` VALUES (1,'uid','用户ID','int(10) unsigned NOT NULL ','num','0','',0,'',1,0,1,1384508362,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (2,'name','标识','char(40) NOT NULL ','string','','同一根节点下标识不重复',1,'',1,0,1,1383894743,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (3,'title','标题','char(80) NOT NULL ','string','','文档标题',1,'',1,0,1,1383894778,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (4,'category_id','所属分类','int(10) unsigned NOT NULL ','string','','',0,'',1,0,1,1384508336,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (5,'description','描述','char(140) NOT NULL ','textarea','','',1,'',1,0,1,1383894927,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (6,'root','根节点','int(10) unsigned NOT NULL ','num','0','该文档的顶级文档编号',0,'',1,0,1,1384508323,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (7,'pid','所属ID','int(10) unsigned NOT NULL ','num','0','父文档编号',0,'',1,0,1,1384508543,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (8,'model_id','内容模型ID','tinyint(3) unsigned NOT NULL ','num','0','该文档所对应的模型',0,'',1,0,1,1384508350,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (9,'type','内容类型','tinyint(3) unsigned NOT NULL ','select','2','',1,'1:目录\r\n2:主题\r\n3:段落',1,0,1,1384511157,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (10,'position','推荐位','smallint(5) unsigned NOT NULL ','checkbox','0','多个推荐则将其推荐值相加',1,'[DOCUMENT_POSITION]',1,0,1,1383895640,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (11,'link_id','外链','int(10) unsigned NOT NULL ','num','0','0-非外链，大于0-外链ID,需要函数进行链接与编号的转换',1,'',1,0,1,1383895757,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (12,'cover_id','封面','int(10) unsigned NOT NULL ','picture','0','0-无封面，大于0-封面图片ID，需要函数处理',1,'',1,0,1,1384147827,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (13,'display','可见性','tinyint(3) unsigned NOT NULL ','radio','1','',1,'0:不可见\r\n1:所有人可见',1,0,1,1386662271,1383891233,'',0,'','regex','',0,'function');
INSERT INTO `lovevi_attribute` VALUES (14,'deadline','截至时间','int(10) unsigned NOT NULL ','datetime','0','0-永久有效',1,'',1,0,1,1387163248,1383891233,'',0,'','regex','',0,'function');
INSERT INTO `lovevi_attribute` VALUES (15,'attach','附件数量','tinyint(3) unsigned NOT NULL ','num','0','',0,'',1,0,1,1387260355,1383891233,'',0,'','regex','',0,'function');
INSERT INTO `lovevi_attribute` VALUES (16,'view','浏览量','int(10) unsigned NOT NULL ','num','0','',1,'',1,0,1,1383895835,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (17,'comment','评论数','int(10) unsigned NOT NULL ','num','0','',1,'',1,0,1,1383895846,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (18,'extend','扩展统计字段','int(10) unsigned NOT NULL ','num','0','根据需求自行使用',0,'',1,0,1,1384508264,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (19,'level','优先级','int(10) unsigned NOT NULL ','num','0','越高排序越靠前',1,'',1,0,1,1383895894,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (20,'create_time','创建时间','int(10) unsigned NOT NULL ','datetime','0','',1,'',1,0,1,1383895903,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (21,'update_time','更新时间','int(10) unsigned NOT NULL ','datetime','0','',0,'',1,0,1,1384508277,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (22,'status','数据状态','tinyint(4) NOT NULL ','radio','0','',0,'-1:删除\r\n0:禁用\r\n1:正常\r\n2:待审核\r\n3:草稿',1,0,1,1384508496,1383891233,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (23,'parse','内容解析类型','tinyint(3) unsigned NOT NULL ','select','0','',0,'0:html\r\n1:ubb\r\n2:markdown',2,0,1,1384511049,1383891243,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (24,'content','文章内容','text NOT NULL ','editor','','',1,'',2,0,1,1383896225,1383891243,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (25,'template','详情页显示模板','varchar(100) NOT NULL ','string','','参照display方法参数的定义',1,'',2,0,1,1383896190,1383891243,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (26,'bookmark','收藏数','int(10) unsigned NOT NULL ','num','0','',1,'',2,0,1,1383896103,1383891243,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (27,'parse','内容解析类型','tinyint(3) unsigned NOT NULL ','select','0','',0,'0:html\r\n1:ubb\r\n2:markdown',3,0,1,1387260461,1383891252,'',0,'','regex','',0,'function');
INSERT INTO `lovevi_attribute` VALUES (28,'content','下载详细描述','text NOT NULL ','editor','','',1,'',3,0,1,1383896438,1383891252,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (29,'template','详情页显示模板','varchar(100) NOT NULL ','string','','',1,'',3,0,1,1383896429,1383891252,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (30,'file_id','文件ID','int(10) unsigned NOT NULL ','file','0','需要函数处理',1,'',3,0,1,1383896415,1383891252,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (31,'download','下载次数','int(10) unsigned NOT NULL ','num','0','',1,'',3,0,1,1383896380,1383891252,'',0,'','','',0,'');
INSERT INTO `lovevi_attribute` VALUES (32,'size','文件大小','bigint(20) unsigned NOT NULL ','num','0','单位bit',1,'',3,0,1,1383896371,1383891252,'',0,'','','',0,'');
/*!40000 ALTER TABLE `lovevi_attribute` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_auth_extend
#

DROP TABLE IF EXISTS `lovevi_auth_extend`;
CREATE TABLE `lovevi_auth_extend` (
  `group_id` mediumint(10) unsigned NOT NULL COMMENT '用户id',
  `extend_id` mediumint(8) unsigned NOT NULL COMMENT '扩展表中数据的id',
  `type` tinyint(1) unsigned NOT NULL COMMENT '扩展类型标识 1:栏目分类权限;2:模型权限',
  UNIQUE KEY `group_extend_type` (`group_id`,`extend_id`,`type`),
  KEY `uid` (`group_id`),
  KEY `group_id` (`extend_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='用户组与分类的对应关系表';

#
# Dumping data for table lovevi_auth_extend
#

LOCK TABLES `lovevi_auth_extend` WRITE;
/*!40000 ALTER TABLE `lovevi_auth_extend` DISABLE KEYS */;
INSERT INTO `lovevi_auth_extend` VALUES (1,1,1);
INSERT INTO `lovevi_auth_extend` VALUES (1,1,2);
INSERT INTO `lovevi_auth_extend` VALUES (1,2,1);
INSERT INTO `lovevi_auth_extend` VALUES (1,2,2);
INSERT INTO `lovevi_auth_extend` VALUES (1,3,1);
INSERT INTO `lovevi_auth_extend` VALUES (1,3,2);
INSERT INTO `lovevi_auth_extend` VALUES (1,4,1);
INSERT INTO `lovevi_auth_extend` VALUES (1,37,1);
/*!40000 ALTER TABLE `lovevi_auth_extend` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_auth_group
#

DROP TABLE IF EXISTS `lovevi_auth_group`;
CREATE TABLE `lovevi_auth_group` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户组id,自增主键',
  `module` varchar(20) NOT NULL DEFAULT '' COMMENT '用户组所属模块',
  `type` tinyint(4) NOT NULL DEFAULT '0' COMMENT '组类型',
  `title` char(20) NOT NULL DEFAULT '' COMMENT '用户组中文名称',
  `description` varchar(80) NOT NULL DEFAULT '' COMMENT '描述信息',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '用户组状态：为1正常，为0禁用,-1为删除',
  `rules` varchar(500) NOT NULL DEFAULT '' COMMENT '用户组拥有的规则id，多个规则 , 隔开',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_auth_group
#

LOCK TABLES `lovevi_auth_group` WRITE;
/*!40000 ALTER TABLE `lovevi_auth_group` DISABLE KEYS */;
INSERT INTO `lovevi_auth_group` VALUES (1,'admin',1,'默认用户组','',-1,'1,2,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,79,80,81,82,83,84,86,87,88,89,90,91,92,93,94,95,96,97,100,102,103,105,106');
INSERT INTO `lovevi_auth_group` VALUES (2,'admin',1,'测试用户','测试用户',-1,'1,2,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,79,80,82,83,84,88,89,90,91,92,93,96,97,100,102,103,195');
INSERT INTO `lovevi_auth_group` VALUES (3,'admin',1,'代理用户','代理用户',1,'1,108,219,220,221,223,224,225,226,227');
/*!40000 ALTER TABLE `lovevi_auth_group` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_auth_group_access
#

DROP TABLE IF EXISTS `lovevi_auth_group_access`;
CREATE TABLE `lovevi_auth_group_access` (
  `uid` int(10) unsigned NOT NULL COMMENT '用户id',
  `group_id` mediumint(8) unsigned NOT NULL COMMENT '用户组id',
  UNIQUE KEY `uid_group_id` (`uid`,`group_id`),
  KEY `uid` (`uid`),
  KEY `group_id` (`group_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_auth_group_access
#

LOCK TABLES `lovevi_auth_group_access` WRITE;
/*!40000 ALTER TABLE `lovevi_auth_group_access` DISABLE KEYS */;
INSERT INTO `lovevi_auth_group_access` VALUES (2,3);
INSERT INTO `lovevi_auth_group_access` VALUES (4,3);
INSERT INTO `lovevi_auth_group_access` VALUES (5,3);
INSERT INTO `lovevi_auth_group_access` VALUES (8,3);
INSERT INTO `lovevi_auth_group_access` VALUES (12,3);
INSERT INTO `lovevi_auth_group_access` VALUES (13,3);
INSERT INTO `lovevi_auth_group_access` VALUES (14,3);
INSERT INTO `lovevi_auth_group_access` VALUES (15,3);
INSERT INTO `lovevi_auth_group_access` VALUES (16,3);
INSERT INTO `lovevi_auth_group_access` VALUES (17,3);
INSERT INTO `lovevi_auth_group_access` VALUES (18,3);
INSERT INTO `lovevi_auth_group_access` VALUES (19,3);
INSERT INTO `lovevi_auth_group_access` VALUES (20,3);
INSERT INTO `lovevi_auth_group_access` VALUES (21,3);
INSERT INTO `lovevi_auth_group_access` VALUES (22,3);
INSERT INTO `lovevi_auth_group_access` VALUES (23,3);
INSERT INTO `lovevi_auth_group_access` VALUES (24,3);
INSERT INTO `lovevi_auth_group_access` VALUES (25,3);
INSERT INTO `lovevi_auth_group_access` VALUES (26,3);
INSERT INTO `lovevi_auth_group_access` VALUES (27,3);
INSERT INTO `lovevi_auth_group_access` VALUES (28,3);
INSERT INTO `lovevi_auth_group_access` VALUES (29,3);
INSERT INTO `lovevi_auth_group_access` VALUES (30,3);
INSERT INTO `lovevi_auth_group_access` VALUES (33,3);
INSERT INTO `lovevi_auth_group_access` VALUES (34,3);
INSERT INTO `lovevi_auth_group_access` VALUES (35,3);
/*!40000 ALTER TABLE `lovevi_auth_group_access` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_auth_rule
#

DROP TABLE IF EXISTS `lovevi_auth_rule`;
CREATE TABLE `lovevi_auth_rule` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT COMMENT '规则id,自增主键',
  `module` varchar(20) NOT NULL COMMENT '规则所属module',
  `type` tinyint(2) NOT NULL DEFAULT '1' COMMENT '1-url;2-主菜单',
  `name` char(80) NOT NULL DEFAULT '' COMMENT '规则唯一英文标识',
  `title` char(20) NOT NULL DEFAULT '' COMMENT '规则中文描述',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '是否有效(0:无效,1:有效)',
  `condition` varchar(300) NOT NULL DEFAULT '' COMMENT '规则附加条件',
  PRIMARY KEY (`id`),
  KEY `module` (`module`,`status`,`type`)
) ENGINE=MyISAM AUTO_INCREMENT=236 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_auth_rule
#

LOCK TABLES `lovevi_auth_rule` WRITE;
/*!40000 ALTER TABLE `lovevi_auth_rule` DISABLE KEYS */;
INSERT INTO `lovevi_auth_rule` VALUES (1,'admin',2,'Admin/Index/index','首页',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (2,'admin',2,'Admin/Article/index','内容',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (3,'admin',2,'Admin/User/index','代理会员',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (4,'admin',2,'Admin/Addons/index','扩展',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (5,'admin',2,'Admin/Config/group','系统',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (7,'admin',1,'Admin/article/add','新增',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (8,'admin',1,'Admin/article/edit','编辑',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (9,'admin',1,'Admin/article/setStatus','改变状态',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (10,'admin',1,'Admin/article/update','保存',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (11,'admin',1,'Admin/article/autoSave','保存草稿',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (12,'admin',1,'Admin/article/move','移动',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (13,'admin',1,'Admin/article/copy','复制',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (14,'admin',1,'Admin/article/paste','粘贴',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (15,'admin',1,'Admin/article/permit','还原',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (16,'admin',1,'Admin/article/clear','清空',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (17,'admin',1,'Admin/Article/examine','审核列表',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (18,'admin',1,'Admin/article/recycle','回收站',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (19,'admin',1,'Admin/User/addaction','新增用户行为',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (20,'admin',1,'Admin/User/editaction','编辑用户行为',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (21,'admin',1,'Admin/User/saveAction','保存用户行为',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (22,'admin',1,'Admin/User/setStatus','变更行为状态',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (23,'admin',1,'Admin/User/changeStatus?method=forbidUser','禁用会员',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (24,'admin',1,'Admin/User/changeStatus?method=resumeUser','启用会员',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (25,'admin',1,'Admin/User/changeStatus?method=deleteUser','删除会员',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (26,'admin',1,'Admin/User/index','用户信息',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (27,'admin',1,'Admin/User/action','用户行为',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (28,'admin',1,'Admin/AuthManager/changeStatus?method=deleteGroup','删除',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (29,'admin',1,'Admin/AuthManager/changeStatus?method=forbidGroup','禁用',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (30,'admin',1,'Admin/AuthManager/changeStatus?method=resumeGroup','恢复',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (31,'admin',1,'Admin/AuthManager/createGroup','新增',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (32,'admin',1,'Admin/AuthManager/editGroup','编辑',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (33,'admin',1,'Admin/AuthManager/writeGroup','保存用户组',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (34,'admin',1,'Admin/AuthManager/group','授权',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (35,'admin',1,'Admin/AuthManager/access','访问授权',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (36,'admin',1,'Admin/AuthManager/user','成员授权',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (37,'admin',1,'Admin/AuthManager/removeFromGroup','解除授权',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (38,'admin',1,'Admin/AuthManager/addToGroup','保存成员授权',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (39,'admin',1,'Admin/AuthManager/category','分类授权',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (40,'admin',1,'Admin/AuthManager/addToCategory','保存分类授权',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (41,'admin',1,'Admin/AuthManager/index','权限管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (42,'admin',1,'Admin/Addons/create','创建',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (43,'admin',1,'Admin/Addons/checkForm','检测创建',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (44,'admin',1,'Admin/Addons/preview','预览',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (45,'admin',1,'Admin/Addons/build','快速生成插件',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (46,'admin',1,'Admin/Addons/config','设置',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (47,'admin',1,'Admin/Addons/disable','禁用',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (48,'admin',1,'Admin/Addons/enable','启用',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (49,'admin',1,'Admin/Addons/install','安装',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (50,'admin',1,'Admin/Addons/uninstall','卸载',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (51,'admin',1,'Admin/Addons/saveconfig','更新配置',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (52,'admin',1,'Admin/Addons/adminList','插件后台列表',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (53,'admin',1,'Admin/Addons/execute','URL方式访问插件',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (54,'admin',1,'Admin/Addons/index','插件管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (55,'admin',1,'Admin/Addons/hooks','钩子管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (56,'admin',1,'Admin/model/add','新增',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (57,'admin',1,'Admin/model/edit','编辑',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (58,'admin',1,'Admin/model/setStatus','改变状态',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (59,'admin',1,'Admin/model/update','保存数据',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (60,'admin',1,'Admin/Model/index','模型管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (61,'admin',1,'Admin/Config/edit','编辑',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (62,'admin',1,'Admin/Config/del','删除',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (63,'admin',1,'Admin/Config/add','新增',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (64,'admin',1,'Admin/Config/save','保存',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (65,'admin',1,'Admin/Config/group','网站设置',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (66,'admin',1,'Admin/Config/index','配置管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (67,'admin',1,'Admin/Channel/add','新增',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (68,'admin',1,'Admin/Channel/edit','编辑',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (69,'admin',1,'Admin/Channel/del','删除',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (70,'admin',1,'Admin/Channel/index','导航管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (71,'admin',1,'Admin/Category/edit','编辑',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (72,'admin',1,'Admin/Category/add','新增',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (73,'admin',1,'Admin/Category/remove','删除',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (74,'admin',1,'Admin/Category/index','分类管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (75,'admin',1,'Admin/file/upload','上传控件',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (76,'admin',1,'Admin/file/uploadPicture','上传图片',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (77,'admin',1,'Admin/file/download','下载',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (79,'admin',1,'Admin/article/batchOperate','导入',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (80,'admin',1,'Admin/Database/index?type=export','备份数据库',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (81,'admin',1,'Admin/Database/index?type=import','还原数据库',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (82,'admin',1,'Admin/Database/export','备份',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (83,'admin',1,'Admin/Database/optimize','优化表',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (84,'admin',1,'Admin/Database/repair','修复表',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (86,'admin',1,'Admin/Database/import','恢复',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (87,'admin',1,'Admin/Database/del','删除',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (88,'admin',1,'Admin/User/add','新增用户',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (89,'admin',1,'Admin/Attribute/index','属性管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (90,'admin',1,'Admin/Attribute/add','新增',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (91,'admin',1,'Admin/Attribute/edit','编辑',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (92,'admin',1,'Admin/Attribute/setStatus','改变状态',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (93,'admin',1,'Admin/Attribute/update','保存数据',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (94,'admin',1,'Admin/AuthManager/modelauth','模型授权',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (95,'admin',1,'Admin/AuthManager/addToModel','保存模型授权',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (96,'admin',1,'Admin/Category/move','移动',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (97,'admin',1,'Admin/Category/merge','合并',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (98,'admin',1,'Admin/Config/menu','后台菜单管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (99,'admin',1,'Admin/Article/mydocument','内容',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (100,'admin',1,'Admin/Menu/index','菜单管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (101,'admin',1,'Admin/other','其他',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (102,'admin',1,'Admin/Menu/add','新增',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (103,'admin',1,'Admin/Menu/edit','编辑',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (104,'admin',1,'Admin/Think/lists?model=article','文章管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (105,'admin',1,'Admin/Think/lists?model=download','下载管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (106,'admin',1,'Admin/Think/lists?model=config','配置管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (107,'admin',1,'Admin/Action/actionlog','行为日志',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (108,'admin',1,'Admin/User/updatePassword','修改密码',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (109,'admin',1,'Admin/User/updateNickname','修改昵称',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (110,'admin',1,'Admin/action/edit','查看行为日志',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (111,'admin',2,'Admin/article/index','文档列表',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (112,'admin',2,'Admin/article/add','新增',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (113,'admin',2,'Admin/article/edit','编辑',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (114,'admin',2,'Admin/article/setStatus','改变状态',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (115,'admin',2,'Admin/article/update','保存',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (116,'admin',2,'Admin/article/autoSave','保存草稿',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (117,'admin',2,'Admin/article/move','移动',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (118,'admin',2,'Admin/article/copy','复制',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (119,'admin',2,'Admin/article/paste','粘贴',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (120,'admin',2,'Admin/article/batchOperate','导入',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (121,'admin',2,'Admin/article/recycle','回收站',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (122,'admin',2,'Admin/article/permit','还原',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (123,'admin',2,'Admin/article/clear','清空',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (124,'admin',2,'Admin/User/add','新增用户',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (125,'admin',2,'Admin/User/action','用户行为',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (126,'admin',2,'Admin/User/addAction','新增用户行为',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (127,'admin',2,'Admin/User/editAction','编辑用户行为',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (128,'admin',2,'Admin/User/saveAction','保存用户行为',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (129,'admin',2,'Admin/User/setStatus','变更行为状态',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (130,'admin',2,'Admin/User/changeStatus?method=forbidUser','禁用会员',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (131,'admin',2,'Admin/User/changeStatus?method=resumeUser','启用会员',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (132,'admin',2,'Admin/User/changeStatus?method=deleteUser','删除会员',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (133,'admin',2,'Admin/AuthManager/index','权限管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (134,'admin',2,'Admin/AuthManager/changeStatus?method=deleteGroup','删除',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (135,'admin',2,'Admin/AuthManager/changeStatus?method=forbidGroup','禁用',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (136,'admin',2,'Admin/AuthManager/changeStatus?method=resumeGroup','恢复',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (137,'admin',2,'Admin/AuthManager/createGroup','新增',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (138,'admin',2,'Admin/AuthManager/editGroup','编辑',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (139,'admin',2,'Admin/AuthManager/writeGroup','保存用户组',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (140,'admin',2,'Admin/AuthManager/group','授权',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (141,'admin',2,'Admin/AuthManager/access','访问授权',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (142,'admin',2,'Admin/AuthManager/user','成员授权',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (143,'admin',2,'Admin/AuthManager/removeFromGroup','解除授权',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (144,'admin',2,'Admin/AuthManager/addToGroup','保存成员授权',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (145,'admin',2,'Admin/AuthManager/category','分类授权',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (146,'admin',2,'Admin/AuthManager/addToCategory','保存分类授权',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (147,'admin',2,'Admin/AuthManager/modelauth','模型授权',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (148,'admin',2,'Admin/AuthManager/addToModel','保存模型授权',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (149,'admin',2,'Admin/Addons/create','创建',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (150,'admin',2,'Admin/Addons/checkForm','检测创建',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (151,'admin',2,'Admin/Addons/preview','预览',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (152,'admin',2,'Admin/Addons/build','快速生成插件',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (153,'admin',2,'Admin/Addons/config','设置',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (154,'admin',2,'Admin/Addons/disable','禁用',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (155,'admin',2,'Admin/Addons/enable','启用',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (156,'admin',2,'Admin/Addons/install','安装',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (157,'admin',2,'Admin/Addons/uninstall','卸载',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (158,'admin',2,'Admin/Addons/saveconfig','更新配置',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (159,'admin',2,'Admin/Addons/adminList','插件后台列表',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (160,'admin',2,'Admin/Addons/execute','URL方式访问插件',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (161,'admin',2,'Admin/Addons/hooks','钩子管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (162,'admin',2,'Admin/Model/index','模型管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (163,'admin',2,'Admin/model/add','新增',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (164,'admin',2,'Admin/model/edit','编辑',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (165,'admin',2,'Admin/model/setStatus','改变状态',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (166,'admin',2,'Admin/model/update','保存数据',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (167,'admin',2,'Admin/Attribute/index','属性管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (168,'admin',2,'Admin/Attribute/add','新增',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (169,'admin',2,'Admin/Attribute/edit','编辑',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (170,'admin',2,'Admin/Attribute/setStatus','改变状态',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (171,'admin',2,'Admin/Attribute/update','保存数据',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (172,'admin',2,'Admin/Config/index','配置管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (173,'admin',2,'Admin/Config/edit','编辑',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (174,'admin',2,'Admin/Config/del','删除',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (175,'admin',2,'Admin/Config/add','新增',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (176,'admin',2,'Admin/Config/save','保存',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (177,'admin',2,'Admin/Menu/index','菜单管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (178,'admin',2,'Admin/Channel/index','导航管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (179,'admin',2,'Admin/Channel/add','新增',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (180,'admin',2,'Admin/Channel/edit','编辑',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (181,'admin',2,'Admin/Channel/del','删除',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (182,'admin',2,'Admin/Category/index','分类管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (183,'admin',2,'Admin/Category/edit','编辑',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (184,'admin',2,'Admin/Category/add','新增',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (185,'admin',2,'Admin/Category/remove','删除',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (186,'admin',2,'Admin/Category/move','移动',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (187,'admin',2,'Admin/Category/merge','合并',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (188,'admin',2,'Admin/Database/index?type=export','备份数据库',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (189,'admin',2,'Admin/Database/export','备份',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (190,'admin',2,'Admin/Database/optimize','优化表',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (191,'admin',2,'Admin/Database/repair','修复表',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (192,'admin',2,'Admin/Database/index?type=import','还原数据库',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (193,'admin',2,'Admin/Database/import','恢复',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (194,'admin',2,'Admin/Database/del','删除',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (195,'admin',2,'Admin/other','其他',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (196,'admin',2,'Admin/Menu/add','新增',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (197,'admin',2,'Admin/Menu/edit','编辑',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (198,'admin',2,'Admin/Think/lists?model=article','应用',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (199,'admin',2,'Admin/Think/lists?model=download','下载管理',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (200,'admin',2,'Admin/Think/lists?model=config','应用',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (201,'admin',2,'Admin/Action/actionlog','行为日志',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (202,'admin',2,'Admin/User/updatePassword','修改密码',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (203,'admin',2,'Admin/User/updateNickname','修改昵称',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (204,'admin',2,'Admin/action/edit','查看行为日志',-1,'');
INSERT INTO `lovevi_auth_rule` VALUES (205,'admin',1,'Admin/think/add','新增数据',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (206,'admin',1,'Admin/think/edit','编辑数据',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (207,'admin',1,'Admin/Menu/import','导入',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (208,'admin',1,'Admin/Model/generate','生成',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (209,'admin',1,'Admin/Addons/addHook','新增钩子',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (210,'admin',1,'Admin/Addons/edithook','编辑钩子',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (211,'admin',1,'Admin/Article/sort','文档排序',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (212,'admin',1,'Admin/Config/sort','排序',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (213,'admin',1,'Admin/Menu/sort','排序',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (214,'admin',1,'Admin/Channel/sort','排序',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (215,'admin',1,'Admin/Category/operate/type/move','移动',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (216,'admin',1,'Admin/Category/operate/type/merge','合并',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (217,'admin',1,'Admin/article/index','文档列表',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (218,'admin',1,'Admin/think/lists','数据列表',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (219,'admin',2,'Admin/tuser/lists','用户管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (220,'admin',1,'Admin/tuser/lists','会员列表',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (221,'admin',1,'Admin/tuser/sms','消息列表',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (222,'admin',1,'Admin/tuser/sendsms','发送信息',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (223,'admin',2,'Admin/money/lists','财务流水',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (224,'admin',1,'Admin/money/add','转账',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (225,'admin',1,'Admin/money/lists','资金流水',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (226,'admin',2,'Admin/game/lists','彩票设置',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (227,'admin',1,'Admin/game/lists','开奖记录',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (228,'admin',1,'Admin/game/peilv','赔率设置',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (229,'admin',2,'Admin/machine/set','机器人',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (230,'admin',1,'Admin/machine/set','机器人设置',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (231,'admin',1,'Admin/user/recharge','代理转账',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (232,'admin',2,'Admin/Database/index/type/export','系统',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (233,'admin',1,'Admin/money/recharge/type/1','充值管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (234,'admin',1,'Admin/money/recharge/type/2','提现管理',1,'');
INSERT INTO `lovevi_auth_rule` VALUES (235,'admin',1,'Admin/money/lists1','每日流水',1,'');
/*!40000 ALTER TABLE `lovevi_auth_rule` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_banner
#

DROP TABLE IF EXISTS `lovevi_banner`;
CREATE TABLE `lovevi_banner` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `pic` varchar(255) NOT NULL COMMENT '图片',
  `url` varchar(255) NOT NULL COMMENT '地址',
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Dumping data for table lovevi_banner
#

LOCK TABLES `lovevi_banner` WRITE;
/*!40000 ALTER TABLE `lovevi_banner` DISABLE KEYS */;
INSERT INTO `lovevi_banner` VALUES (5,'/Uploads/Picture/2017-08-06/59867fed6e122.jpg','#','1');
INSERT INTO `lovevi_banner` VALUES (6,'/Uploads/Picture/2017-08-06/59867f5e88c61.jpg','#','2');
/*!40000 ALTER TABLE `lovevi_banner` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_betlog
#

DROP TABLE IF EXISTS `lovevi_betlog`;
CREATE TABLE `lovevi_betlog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uid` int(10) unsigned NOT NULL COMMENT '用户id',
  `no` varchar(20) NOT NULL DEFAULT '0' COMMENT '期号',
  `type` int(10) unsigned NOT NULL COMMENT '类型',
  `givepoints` float(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '投注金额',
  `getpoints` float(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '中奖金额',
  `kjtime` int(10) unsigned NOT NULL COMMENT '开奖时间',
  `pid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1273 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Dumping data for table lovevi_betlog
#

LOCK TABLES `lovevi_betlog` WRITE;
/*!40000 ALTER TABLE `lovevi_betlog` DISABLE KEYS */;
INSERT INTO `lovevi_betlog` VALUES (1273,2170,'866126',1,100,200,1515472800,NULL);
INSERT INTO `lovevi_betlog` VALUES (1274,2170,'660699',4,20,0,1515472920,NULL);
/*!40000 ALTER TABLE `lovevi_betlog` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_betting
#

DROP TABLE IF EXISTS `lovevi_betting`;
CREATE TABLE `lovevi_betting` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `no` varchar(20) NOT NULL DEFAULT '0' COMMENT '期号',
  `type` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '类型',
  `uid` int(10) unsigned NOT NULL COMMENT '用户id',
  `betnum` int(10) unsigned NOT NULL COMMENT '投注数字',
  `betpoints` int(10) unsigned NOT NULL COMMENT '投注金额',
  `kjtime` int(11) unsigned DEFAULT '0',
  `time` int(11) DEFAULT NULL,
  `show` varchar(50) DEFAULT NULL,
  `rid` int(11) DEFAULT '0' COMMENT '房间id',
  `odds` varchar(255) DEFAULT NULL,
  `state` int(11) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2302 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Dumping data for table lovevi_betting
#

LOCK TABLES `lovevi_betting` WRITE;
/*!40000 ALTER TABLE `lovevi_betting` DISABLE KEYS */;
INSERT INTO `lovevi_betting` VALUES (2302,'866126',1,2170,29,100,1515472800,1515472520,'7,3,2',0,'11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,2,2,2,2,4.2,4.6,4.6,4.2,11,11',1);
INSERT INTO `lovevi_betting` VALUES (2303,'660699',4,2170,2,10,1515472920,1515472742,'6,9,5,1,4,10,8,3,2,7',0,'2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2',1);
INSERT INTO `lovevi_betting` VALUES (2304,'660699',4,2170,7,10,1515472920,1515472742,'6,9,5,1,4,10,8,3,2,7',0,'2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2',1);
/*!40000 ALTER TABLE `lovevi_betting` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_category
#

DROP TABLE IF EXISTS `lovevi_category`;
CREATE TABLE `lovevi_category` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '分类ID',
  `name` varchar(30) NOT NULL COMMENT '标志',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上级分类ID',
  `sort` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '排序（同级有效）',
  `list_row` tinyint(3) unsigned NOT NULL DEFAULT '10' COMMENT '列表每页行数',
  `meta_title` varchar(50) NOT NULL DEFAULT '' COMMENT 'SEO的网页标题',
  `keywords` varchar(255) NOT NULL DEFAULT '' COMMENT '关键字',
  `description` varchar(255) NOT NULL DEFAULT '' COMMENT '描述',
  `template_index` varchar(100) NOT NULL DEFAULT '' COMMENT '频道页模板',
  `template_lists` varchar(100) NOT NULL DEFAULT '' COMMENT '列表页模板',
  `template_detail` varchar(100) NOT NULL DEFAULT '' COMMENT '详情页模板',
  `template_edit` varchar(100) NOT NULL DEFAULT '' COMMENT '编辑页模板',
  `model` varchar(100) NOT NULL DEFAULT '' COMMENT '列表绑定模型',
  `model_sub` varchar(100) NOT NULL DEFAULT '' COMMENT '子文档绑定模型',
  `type` varchar(100) NOT NULL DEFAULT '' COMMENT '允许发布的内容类型',
  `link_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '外链',
  `allow_publish` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否允许发布内容',
  `display` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '可见性',
  `reply` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '是否允许回复',
  `check` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '发布的文章是否需要审核',
  `reply_model` varchar(100) NOT NULL DEFAULT '',
  `extend` text COMMENT '扩展设置',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '数据状态',
  `icon` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '分类图标',
  `groups` varchar(255) NOT NULL DEFAULT '' COMMENT '分组定义',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_name` (`name`),
  KEY `pid` (`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COMMENT='分类表';

#
# Dumping data for table lovevi_category
#

LOCK TABLES `lovevi_category` WRITE;
/*!40000 ALTER TABLE `lovevi_category` DISABLE KEYS */;
INSERT INTO `lovevi_category` VALUES (1,'blog','博客',0,0,10,'','','','','','','','2,3','2','2,1',0,0,1,0,0,'1','',1379474947,1382701539,1,0,'');
INSERT INTO `lovevi_category` VALUES (2,'default_blog','默认分类',1,1,10,'','','','','','','','2,3','2','2,1,3',0,1,1,0,1,'1','',1379475028,1386839751,1,0,'');
/*!40000 ALTER TABLE `lovevi_category` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_channel
#

DROP TABLE IF EXISTS `lovevi_channel`;
CREATE TABLE `lovevi_channel` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '频道ID',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上级频道ID',
  `title` char(30) NOT NULL COMMENT '频道标题',
  `url` char(100) NOT NULL COMMENT '频道连接',
  `sort` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '导航排序',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态',
  `target` tinyint(2) unsigned NOT NULL DEFAULT '0' COMMENT '新窗口打开',
  PRIMARY KEY (`id`),
  KEY `pid` (`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_channel
#

LOCK TABLES `lovevi_channel` WRITE;
/*!40000 ALTER TABLE `lovevi_channel` DISABLE KEYS */;
INSERT INTO `lovevi_channel` VALUES (1,0,'首页','Index/index',1,1379475111,1379923177,1,0);
INSERT INTO `lovevi_channel` VALUES (2,0,'博客','Article/index?category=blog',2,1379475131,1379483713,1,0);
INSERT INTO `lovevi_channel` VALUES (3,0,'官网','http://www.onethink.cn',3,1379475154,1387163458,1,0);
/*!40000 ALTER TABLE `lovevi_channel` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_chatlist
#

DROP TABLE IF EXISTS `lovevi_chatlist`;
CREATE TABLE `lovevi_chatlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pic` varchar(255) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `content` text,
  `type` int(11) DEFAULT '1' COMMENT '4用户3克服',
  `uid` int(11) unsigned DEFAULT '0',
  `issys` varchar(255) DEFAULT '0',
  `state` int(11) DEFAULT '0',
  `gtype` int(11) DEFAULT '0',
  `machine` int(11) DEFAULT '0',
  `no` int(11) DEFAULT NULL COMMENT '期号',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=19933 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_chatlist
#

LOCK TABLES `lovevi_chatlist` WRITE;
/*!40000 ALTER TABLE `lovevi_chatlist` DISABLE KEYS */;
INSERT INTO `lovevi_chatlist` VALUES (19933,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515469440,'小二','大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19934,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515469382,'小三','大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19935,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515469264,'我的啊','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19936,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515469480,'大一','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19937,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515469424,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19938,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515469544,'小二','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19939,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515469518,'小三','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19940,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515469560,'我的啊','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19941,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515469657,'大一','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19942,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515469686,'大二','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19943,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515469934,'小二','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19944,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515469977,'小三','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19945,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515469886,'我的啊','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19946,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515469861,'大一','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19947,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515469834,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19948,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515470060,'大一','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19949,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515470147,'大二','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19950,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515470288,'小二','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19951,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515470335,'小三','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19952,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515470249,'我的啊','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19953,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515470260,'大一','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19954,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515470320,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19955,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515470589,'小二','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19956,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515470464,'小三','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19957,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515470514,'我的啊','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19958,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515470547,'大一','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19959,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515470485,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19960,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515470788,'大一','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19961,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515470782,'大二','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19962,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515470739,'小二','大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19963,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515470767,'小三','大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19964,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515470767,'我的啊','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19965,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515470959,'大一','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19966,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515470950,'大二','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19967,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515471150,'小二','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19968,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515471052,'小三','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19969,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515471168,'我的啊','大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19970,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515471093,'大一','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19971,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515471106,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19972,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515471362,'大一','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19973,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515471345,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19974,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515471467,'小二','大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19975,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515471338,'小三','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19976,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515471444,'我的啊','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19977,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515471592,'大一','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19978,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515471552,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19979,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515471795,'小二','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19980,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515471822,'小三','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19981,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515471636,'我的啊','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19982,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515471800,'大一','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19983,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515471728,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19984,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515472031,'小二','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19985,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515471991,'小三','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19986,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515471919,'我的啊','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19987,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515471967,'大一','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19988,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515471985,'大二','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19989,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515472155,'大一','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19990,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515472241,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19991,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515472418,'小二','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19992,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515472422,'小三','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19993,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515472285,'我的啊','小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19994,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515472402,'大一','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19995,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515472401,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19996,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515472549,'小二','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19997,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515472641,'小三','大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19998,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515472559,'我的啊','11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (19999,'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK32DdzqHrZNGztKenTibia1x7pdYQVWOVKTjF3msUbMXOcS0KjlduGc7hKeaKmibQkFS5Gbtb1aeazw/0',1515472520,'晓晨','<span class=\"pk_qi\">866126期:</span><br>投注内容：小/100',1,2170,'0',0,1,0,866126);
INSERT INTO `lovevi_chatlist` VALUES (20000,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515472639,'大一','22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20001,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515472627,'大二','23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20002,'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK32DdzqHrZNGztKenTibia1x7pdYQVWOVKTjF3msUbMXOcS0KjlduGc7hKeaKmibQkFS5Gbtb1aeazw/0',1515472742,'晓晨','<span class=\"pk_qi\">660699期:</span><br>投注内容：冠军/单2/10',1,2170,'0',0,4,0,660699);
INSERT INTO `lovevi_chatlist` VALUES (20003,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515472796,'大一','<span class=\"pk_qi\">2233991期:</span><br>投注内容：23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20004,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515472840,'大二','<span class=\"pk_qi\">2233991期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20005,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515472857,'小二','<span class=\"pk_qi\">866127期:</span><br>投注内容：11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20006,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515472887,'小三','<span class=\"pk_qi\">866127期:</span><br>投注内容：11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20007,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515473004,'我的啊','<span class=\"pk_qi\">866127期:</span><br>投注内容：大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20008,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515473069,'大一','<span class=\"pk_qi\">2233992期:</span><br>投注内容：23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20009,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515473022,'大二','<span class=\"pk_qi\">2233992期:</span><br>投注内容：23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20010,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515473248,'小二','<span class=\"pk_qi\">866128期:</span><br>投注内容：小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20011,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515473204,'小三','<span class=\"pk_qi\">866128期:</span><br>投注内容：小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20012,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515473178,'我的啊','<span class=\"pk_qi\">866128期:</span><br>投注内容：大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20013,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515473252,'大一','<span class=\"pk_qi\">2233993期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20014,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515473251,'大二','<span class=\"pk_qi\">2233993期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20015,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515473499,'大一','<span class=\"pk_qi\">2233994期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20016,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515473516,'大二','<span class=\"pk_qi\">2233994期:</span><br>投注内容：23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20017,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515473614,'小二','<span class=\"pk_qi\">866129期:</span><br>投注内容：11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20018,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515473605,'小三','<span class=\"pk_qi\">866129期:</span><br>投注内容：大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20019,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515473579,'我的啊','<span class=\"pk_qi\">866129期:</span><br>投注内容：大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20020,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515473612,'大一','<span class=\"pk_qi\">2233995期:</span><br>投注内容：23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20021,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515473709,'大二','<span class=\"pk_qi\">2233995期:</span><br>投注内容：23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20022,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515473715,'小二','<span class=\"pk_qi\">866130期:</span><br>投注内容：11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20023,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515473911,'小三','<span class=\"pk_qi\">866130期:</span><br>投注内容：小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20024,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515473827,'我的啊','<span class=\"pk_qi\">866130期:</span><br>投注内容：11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20025,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515473921,'大一','<span class=\"pk_qi\">2233996期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20026,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515473829,'大二','<span class=\"pk_qi\">2233996期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20027,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515474070,'大一','<span class=\"pk_qi\">2233997期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20028,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515474136,'大二','<span class=\"pk_qi\">2233997期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20029,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515474160,'小二','<span class=\"pk_qi\">866131期:</span><br>投注内容：11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20030,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515474068,'小三','<span class=\"pk_qi\">866131期:</span><br>投注内容：11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20031,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515474060,'我的啊','<span class=\"pk_qi\">866131期:</span><br>投注内容：11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20032,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515474344,'大一','<span class=\"pk_qi\">2233998期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20033,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515474302,'大二','<span class=\"pk_qi\">2233998期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20034,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515474334,'小二','<span class=\"pk_qi\">866132期:</span><br>投注内容：大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20035,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515474478,'小三','<span class=\"pk_qi\">866132期:</span><br>投注内容：大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20036,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515474505,'我的啊','<span class=\"pk_qi\">866132期:</span><br>投注内容：小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20037,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515474489,'大一','<span class=\"pk_qi\">2233999期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20038,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515474484,'大二','<span class=\"pk_qi\">2233999期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20039,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1515474767,'小二','<span class=\"pk_qi\">866133期:</span><br>投注内容：小',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20040,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1515474640,'小三','<span class=\"pk_qi\">866133期:</span><br>投注内容：大',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20041,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1515474644,'我的啊','<span class=\"pk_qi\">866133期:</span><br>投注内容：11',2,0,'0',0,1,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20042,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',1515474695,'大一','<span class=\"pk_qi\">2234000期:</span><br>投注内容：23',2,0,'0',0,2,1,NULL);
INSERT INTO `lovevi_chatlist` VALUES (20043,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',1515474695,'大二','<span class=\"pk_qi\">2234000期:</span><br>投注内容：22',2,0,'0',0,2,1,NULL);
/*!40000 ALTER TABLE `lovevi_chatlist` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_config
#

DROP TABLE IF EXISTS `lovevi_config`;
CREATE TABLE `lovevi_config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '配置ID',
  `name` varchar(30) NOT NULL DEFAULT '' COMMENT '配置名称',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '配置类型',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '配置说明',
  `group` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '配置分组',
  `extra` varchar(255) NOT NULL DEFAULT '' COMMENT '配置值',
  `remark` varchar(100) NOT NULL DEFAULT '' COMMENT '配置说明',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '状态',
  `value` text COMMENT '配置值',
  `sort` smallint(3) unsigned NOT NULL DEFAULT '0' COMMENT '排序',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_name` (`name`),
  KEY `type` (`type`),
  KEY `group` (`group`)
) ENGINE=MyISAM AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_config
#

LOCK TABLES `lovevi_config` WRITE;
/*!40000 ALTER TABLE `lovevi_config` DISABLE KEYS */;
INSERT INTO `lovevi_config` VALUES (1,'WEB_SITE_TITLE',1,'网站标题',1,'','网站标题前台显示标题',1378898976,1379235274,1,'Lovevi内容管理框架，技术支持QQ：66329180',0);
INSERT INTO `lovevi_config` VALUES (2,'WEB_SITE_DESCRIPTION',2,'网站描述',1,'','网站搜索引擎描述',1378898976,1379235841,1,'Lovevi内容管理框架,技术支持QQ：66329180',1);
INSERT INTO `lovevi_config` VALUES (3,'WEB_SITE_KEYWORD',2,'网站关键字',1,'','网站搜索引擎关键字',1378898976,1381390100,1,'ThinkPHP,Lovevi',8);
INSERT INTO `lovevi_config` VALUES (4,'WEB_SITE_CLOSE',4,'关闭站点',1,'0:关闭,1:开启','站点关闭后其他用户不能访问，管理员可以正常访问',1378898976,1379235296,1,'1',1);
INSERT INTO `lovevi_config` VALUES (9,'CONFIG_TYPE_LIST',3,'配置类型列表',4,'','主要用于数据解析和页面表单的生成',1378898976,1379235348,1,'0:数字\r\n1:字符\r\n2:文本\r\n3:数组\r\n4:枚举',2);
INSERT INTO `lovevi_config` VALUES (10,'WEB_SITE_ICP',1,'网站备案号',1,'','设置在网站底部显示的备案号，如“沪ICP备12007941号-2',1378900335,1379235859,1,'',9);
INSERT INTO `lovevi_config` VALUES (11,'DOCUMENT_POSITION',3,'文档推荐位',2,'','文档推荐位，推荐到多个位置KEY值相加即可',1379053380,1379235329,1,'1:列表推荐\r\n2:频道推荐\r\n4:首页推荐',3);
INSERT INTO `lovevi_config` VALUES (12,'DOCUMENT_DISPLAY',3,'文档可见性',2,'','文章可见性仅影响前台显示，后台不收影响',1379056370,1379235322,1,'0:所有人可见\r\n1:仅注册会员可见\r\n2:仅管理员可见',4);
INSERT INTO `lovevi_config` VALUES (13,'COLOR_STYLE',4,'后台色系',1,'default_color:默认\r\nblue_color:紫罗兰','后台颜色风格',1379122533,1379235904,1,'default_color',10);
INSERT INTO `lovevi_config` VALUES (20,'CONFIG_GROUP_LIST',3,'配置分组',4,'','配置分组',1379228036,1384418383,1,'1:基本\r\n2:内容\r\n3:用户\r\n4:系统',4);
INSERT INTO `lovevi_config` VALUES (21,'HOOKS_TYPE',3,'钩子的类型',4,'','类型 1-用于扩展显示内容，2-用于扩展业务处理',1379313397,1379313407,1,'1:视图\r\n2:控制器',6);
INSERT INTO `lovevi_config` VALUES (22,'AUTH_CONFIG',3,'Auth配置',4,'','自定义Auth.class.php类配置',1379409310,1379409564,1,'AUTH_ON:1\r\nAUTH_TYPE:2',8);
INSERT INTO `lovevi_config` VALUES (23,'OPEN_DRAFTBOX',4,'是否开启草稿功能',2,'0:关闭草稿功能\r\n1:开启草稿功能\r\n','新增文章时的草稿功能配置',1379484332,1379484591,1,'1',1);
INSERT INTO `lovevi_config` VALUES (24,'DRAFT_AOTOSAVE_INTERVAL',0,'自动保存草稿时间',2,'','自动保存草稿的时间间隔，单位：秒',1379484574,1386143323,1,'60',2);
INSERT INTO `lovevi_config` VALUES (25,'LIST_ROWS',0,'后台每页记录数',2,'','后台数据每页显示记录数',1379503896,1380427745,1,'10',10);
INSERT INTO `lovevi_config` VALUES (26,'USER_ALLOW_REGISTER',4,'是否允许用户注册',3,'0:关闭注册\r\n1:允许注册','是否开放用户注册',1379504487,1379504580,1,'1',3);
INSERT INTO `lovevi_config` VALUES (27,'CODEMIRROR_THEME',4,'预览插件的CodeMirror主题',4,'3024-day:3024 day\r\n3024-night:3024 night\r\nambiance:ambiance\r\nbase16-dark:base16 dark\r\nbase16-light:base16 light\r\nblackboard:blackboard\r\ncobalt:cobalt\r\neclipse:eclipse\r\nelegant:elegant\r\nerlang-dark:erlang-dark\r\nlesser-dark:lesser-dark\r\nmidnight:midnight','详情见CodeMirror官网',1379814385,1384740813,1,'ambiance',3);
INSERT INTO `lovevi_config` VALUES (28,'DATA_BACKUP_PATH',1,'数据库备份根路径',4,'','路径必须以 / 结尾',1381482411,1381482411,1,'./Data/',5);
INSERT INTO `lovevi_config` VALUES (29,'DATA_BACKUP_PART_SIZE',0,'数据库备份卷大小',4,'','该值用于限制压缩后的分卷最大长度。单位：B；建议设置20M',1381482488,1381729564,1,'20971520',7);
INSERT INTO `lovevi_config` VALUES (30,'DATA_BACKUP_COMPRESS',4,'数据库备份文件是否启用压缩',4,'0:不压缩\r\n1:启用压缩','压缩备份文件需要PHP环境支持gzopen,gzwrite函数',1381713345,1381729544,1,'1',9);
INSERT INTO `lovevi_config` VALUES (31,'DATA_BACKUP_COMPRESS_LEVEL',4,'数据库备份文件压缩级别',4,'1:普通\r\n4:一般\r\n9:最高','数据库备份文件的压缩级别，该配置在开启压缩时生效',1381713408,1381713408,1,'9',10);
INSERT INTO `lovevi_config` VALUES (32,'DEVELOP_MODE',4,'开启开发者模式',4,'0:关闭\r\n1:开启','是否开启开发者模式',1383105995,1383291877,1,'1',11);
INSERT INTO `lovevi_config` VALUES (33,'ALLOW_VISIT',3,'不受限控制器方法',0,'','',1386644047,1386644741,1,'0:article/draftbox\r\n1:article/mydocument\r\n2:Category/tree\r\n3:Index/verify\r\n4:file/upload\r\n5:file/download\r\n6:user/updatePassword\r\n7:user/updateNickname\r\n8:user/submitPassword\r\n9:user/submitNickname\r\n10:file/uploadpicture',0);
INSERT INTO `lovevi_config` VALUES (34,'DENY_VISIT',3,'超管专限控制器方法',0,'','仅超级管理员可访问的控制器方法',1386644141,1386644659,1,'0:Addons/addhook\r\n1:Addons/edithook\r\n2:Addons/delhook\r\n3:Addons/updateHook\r\n4:Admin/getMenus\r\n5:Admin/recordList\r\n6:AuthManager/updateRules\r\n7:AuthManager/tree',0);
INSERT INTO `lovevi_config` VALUES (35,'REPLY_LIST_ROWS',0,'回复列表每页条数',2,'','',1386645376,1387178083,1,'10',0);
INSERT INTO `lovevi_config` VALUES (36,'ADMIN_ALLOW_IP',2,'后台允许访问IP',4,'','多个用逗号分隔，如果不配置表示不限制IP访问',1387165454,1387165553,1,'',12);
INSERT INTO `lovevi_config` VALUES (37,'SHOW_PAGE_TRACE',4,'是否显示页面Trace',4,'0:关闭\r\n1:开启','是否显示页面Trace信息',1387165685,1387165685,1,'0',1);
/*!40000 ALTER TABLE `lovevi_config` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_document
#

DROP TABLE IF EXISTS `lovevi_document`;
CREATE TABLE `lovevi_document` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文档ID',
  `uid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '用户ID',
  `name` char(40) NOT NULL DEFAULT '' COMMENT '标识',
  `title` char(80) NOT NULL DEFAULT '' COMMENT '标题',
  `category_id` int(10) unsigned NOT NULL COMMENT '所属分类',
  `group_id` smallint(3) unsigned NOT NULL COMMENT '所属分组',
  `description` char(140) NOT NULL DEFAULT '' COMMENT '描述',
  `root` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '根节点',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '所属ID',
  `model_id` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '内容模型ID',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '2' COMMENT '内容类型',
  `position` smallint(5) unsigned NOT NULL DEFAULT '0' COMMENT '推荐位',
  `link_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '外链',
  `cover_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '封面',
  `display` tinyint(3) unsigned NOT NULL DEFAULT '1' COMMENT '可见性',
  `deadline` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '截至时间',
  `attach` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '附件数量',
  `view` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '浏览量',
  `comment` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '评论数',
  `extend` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '扩展统计字段',
  `level` int(10) NOT NULL DEFAULT '0' COMMENT '优先级',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '数据状态',
  PRIMARY KEY (`id`),
  KEY `idx_category_status` (`category_id`,`status`),
  KEY `idx_status_type_pid` (`status`,`uid`,`pid`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='文档模型基础表';

#
# Dumping data for table lovevi_document
#

LOCK TABLES `lovevi_document` WRITE;
/*!40000 ALTER TABLE `lovevi_document` DISABLE KEYS */;
INSERT INTO `lovevi_document` VALUES (1,1,'','Lovevi1.1开发版发布',2,0,'期待已久的Lovevi最新版发布',0,0,2,2,0,0,0,1,0,0,8,0,0,0,1406001360,1483327270,1);
/*!40000 ALTER TABLE `lovevi_document` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_document_article
#

DROP TABLE IF EXISTS `lovevi_document_article`;
CREATE TABLE `lovevi_document_article` (
  `id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '文档ID',
  `parse` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '内容解析类型',
  `content` text NOT NULL COMMENT '文章内容',
  `template` varchar(100) NOT NULL DEFAULT '' COMMENT '详情页显示模板',
  `bookmark` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '收藏数',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='文档模型文章表';

#
# Dumping data for table lovevi_document_article
#

LOCK TABLES `lovevi_document_article` WRITE;
/*!40000 ALTER TABLE `lovevi_document_article` DISABLE KEYS */;
INSERT INTO `lovevi_document_article` VALUES (1,0,'<h1>\r\n\t技术支持QQ：66329180<br />\r\n</h1>\r\n<h2>\r\n\t主要特性：\r\n</h2>\r\n<p>\r\n\t1. 基于ThinkPHP最新3.2版本。\r\n</p>\r\n<p>\r\n\t2. 模块化：全新的架构和模块化的开发机制，便于灵活扩展和二次开发。&nbsp;\r\n</p>\r\n<p>\r\n\t3. 文档模型/分类体系：通过和文档模型绑定，以及不同的文档类型，不同分类可以实现差异化的功能，轻松实现诸如资讯、下载、讨论和图片等功能。\r\n</p>\r\n<p>\r\n\t4. 开源免费：OneThink遵循Apache2开源协议,免费提供使用。&nbsp;\r\n</p>\r\n<p>\r\n\t5. 用户行为：支持自定义用户行为，可以对单个用户或者群体用户的行为进行记录及分享，为您的运营决策提供有效参考数据。\r\n</p>\r\n<p>\r\n\t6. 云端部署：通过驱动的方式可以轻松支持平台的部署，让您的网站无缝迁移，内置已经支持SAE和BAE3.0。\r\n</p>\r\n<p>\r\n\t7. 云服务支持：即将启动支持云存储、云安全、云过滤和云统计等服务，更多贴心的服务让您的网站更安心。\r\n</p>\r\n<p>\r\n\t8. 安全稳健：提供稳健的安全策略，包括备份恢复、容错、防止恶意攻击登录，网页防篡改等多项安全管理功能，保证系统安全，可靠、稳定的运行。&nbsp;\r\n</p>\r\n<p>\r\n\t9. 应用仓库：官方应用仓库拥有大量来自第三方插件和应用模块、模板主题，有众多来自开源社区的贡献，让您的网站“One”美无缺。&nbsp;\r\n</p>\r\n<p>\r\n\t<br />\r\n</p>\r\n<p>\r\n\t<br />\r\n</p>','',0);
/*!40000 ALTER TABLE `lovevi_document_article` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_document_download
#

DROP TABLE IF EXISTS `lovevi_document_download`;
CREATE TABLE `lovevi_document_download` (
  `id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '文档ID',
  `parse` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '内容解析类型',
  `content` text NOT NULL COMMENT '下载详细描述',
  `template` varchar(100) NOT NULL DEFAULT '' COMMENT '详情页显示模板',
  `file_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '文件ID',
  `download` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '下载次数',
  `size` bigint(20) unsigned NOT NULL DEFAULT '0' COMMENT '文件大小',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='文档模型下载表';

#
# Dumping data for table lovevi_document_download
#

LOCK TABLES `lovevi_document_download` WRITE;
/*!40000 ALTER TABLE `lovevi_document_download` DISABLE KEYS */;
/*!40000 ALTER TABLE `lovevi_document_download` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_file
#

DROP TABLE IF EXISTS `lovevi_file`;
CREATE TABLE `lovevi_file` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文件ID',
  `name` char(30) NOT NULL DEFAULT '' COMMENT '原始文件名',
  `savename` char(20) NOT NULL DEFAULT '' COMMENT '保存名称',
  `savepath` char(30) NOT NULL DEFAULT '' COMMENT '文件保存路径',
  `ext` char(5) NOT NULL DEFAULT '' COMMENT '文件后缀',
  `mime` char(40) NOT NULL DEFAULT '' COMMENT '文件mime类型',
  `size` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '文件大小',
  `md5` char(32) NOT NULL DEFAULT '' COMMENT '文件md5',
  `sha1` char(40) NOT NULL DEFAULT '' COMMENT '文件 sha1编码',
  `location` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '文件保存位置',
  `url` varchar(255) NOT NULL DEFAULT '' COMMENT '远程地址',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上传时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_md5` (`md5`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='文件表';

#
# Dumping data for table lovevi_file
#

LOCK TABLES `lovevi_file` WRITE;
/*!40000 ALTER TABLE `lovevi_file` DISABLE KEYS */;
/*!40000 ALTER TABLE `lovevi_file` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_games
#

DROP TABLE IF EXISTS `lovevi_games`;
CREATE TABLE `lovevi_games` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `no` varchar(15) NOT NULL DEFAULT '0' COMMENT '期号',
  `kjtime` int(10) unsigned NOT NULL COMMENT '开奖时间',
  `type` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '开奖类型',
  `num` varchar(50) NOT NULL DEFAULT '0' COMMENT '开奖结果',
  `state` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '状态',
  `givepoints` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '投注金额',
  `givenum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '投注人数',
  `getpoints` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '中奖金额',
  `getnum` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '中奖人数',
  `show` varchar(255) DEFAULT NULL,
  `colnum` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39846 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Dumping data for table lovevi_games
#

LOCK TABLES `lovevi_games` WRITE;
/*!40000 ALTER TABLE `lovevi_games` DISABLE KEYS */;
INSERT INTO `lovevi_games` VALUES (39856,'866114',1515469200,1,'1,8,1',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39857,'866115',1515469500,1,'1,0,7',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39858,'109141',1515469200,3,'6,8,9',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39859,'109142',1515469500,3,'1,8,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39860,'660687',1515469320,4,'9,7,6,4,3,8,1,5,2,10',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39861,'660688',1515469620,4,'3,5,8,6,2,10,1,4,7,9',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39862,'109001',1515474300,5,'8,5,2,6,4,1,7,10,3,9',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39863,'109002',1515474600,5,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39864,'2233974',1515469380,2,'5,1,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39865,'2233975',1515469590,2,'4,9,8',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39866,'866116',1515469800,1,'8,1,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39867,'109143',1515469800,3,'6,4,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39868,'660689',1515469920,4,'10,8,2,9,6,4,1,5,3,7',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39869,'2233976',1515469800,2,'4,0,0',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39870,'866117',1515470100,1,'7,7,1',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39871,'109144',1515470100,3,'2,9,1',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39872,'2233977',1515470010,2,'9,7,6',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39873,'660690',1515470220,4,'9,2,4,8,6,5,1,3,7,10',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39874,'866118',1515470400,1,'3,7,4',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39875,'109145',1515470400,3,'2,5,9',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39876,'2233978',1515470220,2,'2,6,4',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39877,'660691',1515470520,4,'7,5,6,8,10,4,2,1,3,9',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39878,'2233979',1515470430,2,'7,1,2',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39879,'866119',1515470700,1,'9,6,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39880,'109146',1515470700,3,'6,8,2',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39881,'660692',1515470820,4,'7,6,10,1,5,9,8,2,4,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39882,'2233980',1515470640,2,'3,3,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39883,'866120',1515471000,1,'9,7,2',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39884,'109147',1515471000,3,'8,0,1',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39885,'2233981',1515470850,2,'6,6,8',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39886,'660693',1515471120,4,'1,10,4,3,7,5,8,9,6,2',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39887,'2233982',1515471060,2,'0,9,9',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39888,'866121',1515471300,1,'4,2,4',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39889,'109148',1515471300,3,'8,1,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39890,'660694',1515471420,4,'1,6,8,10,9,2,4,3,7,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39891,'2233983',1515471270,2,'5,8,8',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39892,'866122',1515471600,1,'9,9,6',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39893,'109149',1515471600,3,'9,8,0',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39894,'2233984',1515471480,2,'8,1,7',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39895,'660695',1515471720,4,'1,5,4,2,8,9,6,3,7,10',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39896,'2233985',1515471690,2,'3,5,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39897,'866123',1515471900,1,'4,8,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39898,'109150',1515471900,3,'4,7,2',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39899,'660696',1515472020,4,'2,7,5,4,9,6,1,3,8,10',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39900,'2233986',1515471900,2,'3,0,6',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39901,'866124',1515472200,1,'7,6,7',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39902,'109151',1515472200,3,'4,6,6',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39903,'2233987',1515472110,2,'2,1,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39904,'660697',1515472320,4,'4,10,7,9,1,6,5,2,3,8',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39905,'866125',1515472500,1,'9,3,8',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39906,'109152',1515472500,3,'5,3,6',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39907,'2233988',1515472320,2,'6,2,0',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39908,'660698',1515472620,4,'9,3,4,8,10,7,2,6,1,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39909,'2233989',1515472530,2,'6,7,1',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39910,'866126',1515472800,1,'7,3,2',1,100,1,200,1,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39911,'109153',1515472800,3,'1,1,8',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39912,'660699',1515472920,4,'6,9,5,1,4,10,8,3,2,7',1,20,2,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39913,'2233990',1515472740,2,'6,2,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39914,'866127',1515473100,1,'4,3,6',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39915,'109154',1515473100,3,'5,6,0',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39916,'2233991',1515472950,2,'6,3,0',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39917,'660700',1515473220,4,'8,7,1,9,10,6,4,2,5,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39918,'2233992',1515473160,2,'4,1,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39919,'866128',1515473400,1,'6,4,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39920,'109155',1515473400,3,'6,0,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39921,'660701',1515473520,4,'4,10,6,5,9,2,7,8,1,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39922,'2233993',1515473370,2,'9,2,0',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39923,'866129',1515473700,1,'1,8,4',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39924,'109156',1515473700,3,'6,3,1',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39925,'2233994',1515473580,2,'0,9,8',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39926,'660702',1515473820,4,'6,4,10,2,9,7,8,5,1,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39927,'2233995',1515473790,2,'9,6,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39928,'866130',1515474000,1,'8,4,2',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39929,'109157',1515474000,3,'6,7,9',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39930,'660703',1515474120,4,'10,4,3,6,9,8,7,1,2,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39931,'2233996',1515474000,2,'2,2,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39932,'866131',1515474300,1,'2,1,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39933,'109158',1515474300,3,'9,3,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39934,'2233997',1515474210,2,'9,3,1',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39935,'660704',1515474420,4,'1,2,3,9,7,4,5,8,6,10',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39936,'866132',1515474600,1,'8,2,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39937,'109159',1515474600,3,'1,8,7',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39938,'2233998',1515474420,2,'4,4,3',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39939,'660705',1515474720,4,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39940,'2233999',1515474630,2,'0,2,5',1,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39941,'866133',1515474900,1,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39942,'109160',1515474900,3,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39943,'109003',1515474900,5,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39944,'660706',1515475020,4,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39945,'2234000',1515474840,2,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39946,'866134',1515475200,1,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39947,'109161',1515475200,3,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39948,'109004',1515475200,5,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39949,'2234001',1515475050,2,'0',0,0,0,0,0,NULL,NULL);
INSERT INTO `lovevi_games` VALUES (39950,'660707',1515475320,4,'0',0,0,0,0,0,NULL,NULL);
/*!40000 ALTER TABLE `lovevi_games` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_groom
#

DROP TABLE IF EXISTS `lovevi_groom`;
CREATE TABLE `lovevi_groom` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `people` int(11) DEFAULT '0',
  `minbet` int(11) DEFAULT '0',
  `midbet` int(11) DEFAULT '0',
  `limites` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_groom
#

LOCK TABLES `lovevi_groom` WRITE;
/*!40000 ALTER TABLE `lovevi_groom` DISABLE KEYS */;
INSERT INTO `lovevi_groom` VALUES (9,1,'初级房',260,10,50,'50','/Uploads/Picture/2017-08-06/5986bc5fcd703.jpg');
INSERT INTO `lovevi_groom` VALUES (10,1,'中级房',310,20,100,'100','/Uploads/Picture/2017-08-06/5986bceaba5d6.jpg');
INSERT INTO `lovevi_groom` VALUES (11,1,'高级房',520,50,200,'200','/Uploads/Picture/2017-08-06/5986bd0788c61.jpg');
INSERT INTO `lovevi_groom` VALUES (12,1,'富豪房',160,100,500,'500','/Uploads/Picture/2017-08-06/5986bd295ecfe.jpg');
INSERT INTO `lovevi_groom` VALUES (13,2,'初级房',260,10,50,'50','/Uploads/Picture/2017-08-06/5986bc5fcd703.jpg');
INSERT INTO `lovevi_groom` VALUES (14,2,'中级房',310,20,100,'100','/Uploads/Picture/2017-08-06/5986bceaba5d6.jpg');
INSERT INTO `lovevi_groom` VALUES (15,2,'高级房',520,50,200,'200','/Uploads/Picture/2017-08-06/5986bd0788c61.jpg');
INSERT INTO `lovevi_groom` VALUES (16,2,'富豪房',160,100,500,'500','/Uploads/Picture/2017-08-06/5986bd295ecfe.jpg');
/*!40000 ALTER TABLE `lovevi_groom` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_gsys
#

DROP TABLE IF EXISTS `lovevi_gsys`;
CREATE TABLE `lovevi_gsys` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(25) NOT NULL COMMENT '游戏名称',
  `interval` int(10) unsigned NOT NULL DEFAULT '5' COMMENT '间隔时间',
  `deviation` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '偏移时间（分）',
  `type` int(10) unsigned NOT NULL DEFAULT '1' COMMENT '游戏类型',
  `state` char(10) NOT NULL DEFAULT '1' COMMENT '状况',
  `url3` varchar(500) DEFAULT NULL,
  `odds` text,
  `help` text,
  `pic` varchar(255) DEFAULT NULL,
  `createrule` text,
  `mins` int(1) DEFAULT '0',
  `maxs` int(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Dumping data for table lovevi_gsys
#

LOCK TABLES `lovevi_gsys` WRITE;
/*!40000 ALTER TABLE `lovevi_gsys` DISABLE KEYS */;
INSERT INTO `lovevi_gsys` VALUES (1,'北京28',300,0,1,'1','','11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,2,2,2,2,4.2,4.6,4.6,4.2,11,11','<p>\r\n\t<b>【玩法介绍】</b>：<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 开奖号码0-27。0-13为小，14-27为大<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 奇数为单，偶数为双，组合为大双/小单/大单/小双<br />\r\n<b>【常规赔率】</b>：<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 大小单双2.0倍，大双/小单4.6倍<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 单点极值15倍，大单/小双4.2倍<br />\r\n<b>【特殊赔率】</b>：<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 大小单双开13/14时，总注10000以下赔1.6倍;<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 大小单双开13/14时，总注10001以上全回本。<br />\r\n<b>【单点赔率】</b>：<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;12.15赔 12倍 &nbsp; &nbsp;13.14赔 12倍<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 10.17赔 14倍 &nbsp; &nbsp;11.16赔 14倍<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 08.19赔 15倍 &nbsp; &nbsp;09.18赔 15倍<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;06.21赔 17倍 &nbsp; &nbsp;07.20赔 16倍<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 04.23赔 30倍 &nbsp; &nbsp;05.22赔 20倍<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;02.25赔 50倍 &nbsp; &nbsp;03.24赔 40倍<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 00.27赔500倍 &nbsp; &nbsp;01.26赔100倍<br />\r\n<b>【下注说明】</b>：<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 最低下注20起 &nbsp;总注60万封顶\r\n</p>','/Uploads/Picture/2017-12-28/5a44ed0fa77c5.jpg','$mtime=($time+28800)%86400;\r\nif($mtime<32400){\r\n $time=round((time()+28800)/86400)*86400-28800+32400+300;\r\n$ytime=$time;\r\n}\r\n',10,100000);
INSERT INTO `lovevi_gsys` VALUES (2,'加拿大28',210,180,2,'1','http://www.dandan28.com/index/analysis','11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,2,2,2,2,4.2,4.6,4.6,4.2,11,11','<b>【玩法介绍】</b><span>：</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 开奖号码0-27。0-13为小，14-27为大</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 奇数为单，偶数为双，组合为大双/小单/大单/小双</span><br />\r\n<b>【常规赔率】</b><span>：</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 大小单双2.0倍，大双/小单4.6倍</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 单点极值15倍，大单/小双4.2倍</span><br />\r\n<b>【特殊赔率】</b><span>：</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 大小单双开13/14时，总注10000以下赔1.6倍;</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 大小单双开13/14时，总注10001以上全回本。</span><br />\r\n<b>【单点赔率】</b><span>：</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;12.15赔 12倍 &nbsp; &nbsp;13.14赔 12倍</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 10.17赔 14倍 &nbsp; &nbsp;11.16赔 14倍</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 08.19赔 15倍 &nbsp; &nbsp;09.18赔 15倍</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;06.21赔 17倍 &nbsp; &nbsp;07.20赔 16倍</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 04.23赔 30倍 &nbsp; &nbsp;05.22赔 20倍</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;02.25赔 50倍 &nbsp; &nbsp;03.24赔 40倍</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 00.27赔500倍 &nbsp; &nbsp;01.26赔100倍</span><br />\r\n<b>【下注说明】</b><span>：</span><br />\r\n<span>&nbsp; &nbsp; &nbsp; &nbsp; 最低下注20起 &nbsp;总注60万封顶</span><br />\r\n<br />','/Uploads/Picture/2017-12-28/5a44ed175f0df.jpg','$content=file_get_contents(\'./Data/j8.json\');\r\n\t\t\tif(!$content){\r\n\t\t\t\tdie;\r\n\t\t\t}else{\r\n\t\t\t\t$carr=json_decode($content,\"ture\",512, JSON_BIGINT_AS_STRING);\r\n\t\t\t\t$dtime=strtotime($carr[0][\"c_d\"]);\r\n\t\t\t\t$no=$carr[0][\"c_t\"];\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t$ntime=time();\r\n\t\t\t$ytime=($ntime+28800)%86400;\r\n\t\t\tif($ytime<72300){\r\n\t\t\t\t$ntime1=floor(($ntime+28800)/86400)*86400-28800+round(($ytime-180)/210)*210+180;\t\r\n\t\t\t}else{\r\n\t\t\t\t$ntime1=floor(($ntime+28800)/86400)*86400-28800+round(($ytime-60)/210)*210+60;\t\r\n\t\t\t}\r\n\t\t\t$ytime=($dtime+28800)%86400;\r\n\t\t\tif($ytime<72300){\r\n\t\t\t\t$ntime2=floor(($dtime+28800)/86400)*86400-28800+round(($ytime-180)/210)*210+180;\t\r\n\t\t\t}else{\r\n\t\t\t\t$ntime2=floor(($dtime+28800)/86400)*86400-28800+round(($ytime-60)/210)*210+60;\t\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\r\n\t\t\tif($gtime<$ntime1){\r\n\t\t\t\t$gtime=$ntime1;\r\n\t\t\t}\r\n\t\t\t$gtime=$gtime+210;\r\n\t\t\t$ytime=($gtime+28800)%86400;\r\n\t\t\tif($ytime>72300 and $ytime<75300){\r\n\t\t\t\tdie;\r\n\t\t\t}else{\r\n\t\t\t\t$ctime=$ntime1-$ntime2;\r\n\t\t\t\tif($ctime>600){\r\n\t\t\t\t\tdie;\r\n\t\t\t\t}else{\r\n\t\t\t\t\t$no=$no+($gtime-$ntime2)/210;\r\n\t\t\t\t\t$yno=$no;\r\n\t\t\t\t\t$ytime=$gtime;\r\n\t\t\t\t}\r\n\t\t\t}',10,5000);
INSERT INTO `lovevi_gsys` VALUES (3,'西班牙28',210,180,2,'1','http://www.dandan28.com/index/analysis','11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,2,2,2,2,4,4,4,4,11,11','','/Uploads/Picture/2017-12-28/5a44f5ba9fab7.jpg','$content=file_get_contents(\'./Data/j8.json\');\r\n\t\t\tif(!$content){\r\n\t\t\t\tdie;\r\n\t\t\t}else{\r\n\t\t\t\t$carr=json_decode($content,\"ture\",512, JSON_BIGINT_AS_STRING);\r\n\t\t\t\t$dtime=strtotime($carr[0][\"c_d\"]);\r\n\t\t\t\t$no=$carr[0][\"c_t\"];\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t$ntime=time();\r\n\t\t\t$ytime=($ntime+28800)%86400;\r\n\t\t\tif($ytime<72300){\r\n\t\t\t\t$ntime1=floor(($ntime+28800)/86400)*86400-28800+round(($ytime-180)/210)*210+180;\t\r\n\t\t\t}else{\r\n\t\t\t\t$ntime1=floor(($ntime+28800)/86400)*86400-28800+round(($ytime-60)/210)*210+60;\t\r\n\t\t\t}\r\n\t\t\t$ytime=($dtime+28800)%86400;\r\n\t\t\tif($ytime<72300){\r\n\t\t\t\t$ntime2=floor(($dtime+28800)/86400)*86400-28800+round(($ytime-180)/210)*210+180;\t\r\n\t\t\t}else{\r\n\t\t\t\t$ntime2=floor(($dtime+28800)/86400)*86400-28800+round(($ytime-60)/210)*210+60;\t\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\r\n\t\t\tif($gtime<$ntime1){\r\n\t\t\t\t$gtime=$ntime1;\r\n\t\t\t}\r\n\t\t\t$gtime=$gtime+210;\r\n\t\t\t$ytime=($gtime+28800)%86400;\r\n\t\t\tif($ytime>72300 and $ytime<75300){\r\n\t\t\t\tdie;\r\n\t\t\t}else{\r\n\t\t\t\t$ctime=$ntime1-$ntime2;\r\n\t\t\t\tif($ctime>600){\r\n\t\t\t\t\tdie;\r\n\t\t\t\t}else{\r\n\t\t\t\t\t$no=$no+($gtime-$ntime2)/210;\r\n\t\t\t\t\t$yno=$no;\r\n\t\t\t\t\t$ytime=$gtime;\r\n\t\t\t\t}\r\n\t\t\t}',10,5000);
INSERT INTO `lovevi_gsys` VALUES (4,'北京赛车',210,180,2,'1','http://www.dandan28.com/index/analysis','2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13','  <p><b>【游戏介绍】</b><br>\r\n海淘城最热门的娱乐项目包括北京赛车、幸运飞艇。<br>\r\n北京赛车：是经国家财政部批准，由北京福利彩票发行承销的中国福利彩其中一种；每期开奖车号共十个,每个车号除了整合玩法，第1~10名、冠亚和值、冠亚组合分别为一个竞猜组，大小/单双/龙虎、车道数字、冠亚大小、冠亚特码、十球全接、特码区段。<br>\r\n幸运飞艇：是马耳他共和国瓦莱塔福利联合委员会独家发行的一款高效率 快乐猜，源于F1赛艇的彩票游戏<br>；\r\n北京赛车、幸运飞艇同以「1~10」十个号码作为开奖依据，完全公平公正公开，开奖透明，无法作弊！<br>\r\n\r\n<b>【相关资料】</b><br>\r\n<b>【开奖时间】</b>「白场」北京赛车为每天上午09:07~晚上23:57止；「夜场」幸运飞艇为下午13:09~凌晨04:04止；每五分钟开奖一期，每次竞猜时间约260秒，等待开奖时间约为40秒，开奖结果与官网完全同步。<br>\r\n\r\n<b>【玩法】</b><br>\r\n<b>【1~10名猜大小单双】</b><br>\r\n第一名～第十名车号：开出之号码大于或等于6为大，小于或等于5为小。开出的号码偶数为双，号码奇数为单。<br>\r\n<b>■</b>奖历：含本1.98倍<br>\r\n■限额：10-10000<br>\r\n\r\n<b>【1~10名猜车号】</b><br>\r\n每一个车号为一竞猜组合，开奖结果「竞猜车号」对应所猜「车道」视为中奖，其余情形视为不中奖。<br>\r\n■奖历：含本9.8倍<br>\r\n■限额：10-10,000<br>\r\n\r\n<b>【1~5名猜龙虎】</b><br>\r\n(1)第一名vs第十名，(2)第二名vs第九名，(3)第三名vs第八名，(4)第四名vs第七名，(5)第五名vs第六名，前比后大为龙，反之为虎。<br>\r\n■奖历：含本1.98倍<br>\r\n■限额：10-10000<br>\r\n\r\n<b>【冠亚和值(特码)猜数字】</b><br>\r\n「冠亚和值」为「特码」可能出现的结果为3~19，竞猜中对应「冠亚和值」数字的视为中奖，其余视为不中奖。<br>\r\n■奖历：<br>\r\n　3.4.18.19，含本40倍，限额10-1,000<br>\r\n　5.6.16.17，含本20倍，限额10-2,000<br>\r\n　7.8.14.15，含本12倍，限额10-3,000<br>\r\n　9.10.12.13，含本9倍，限额10-4,000<br>\r\n　11，含本8倍，限额10-5,000<br>\r\n<b>每期下注：总额10万封顶！</b><br>\r\n\r\n          \r\n\r\n</p>','/Uploads/Picture/2017-12-28/5a44ed25948c9.jpg','$content=file_get_contents(\'./Data/j8.json\');\r\n\t\t\tif(!$content){\r\n\t\t\t\tdie;\r\n\t\t\t}else{\r\n\t\t\t\t$carr=json_decode($content,\"ture\",512, JSON_BIGINT_AS_STRING);\r\n\t\t\t\t$dtime=strtotime($carr[0][\"c_d\"]);\r\n\t\t\t\t$no=$carr[0][\"c_t\"];\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t$ntime=time();\r\n\t\t\t$ytime=($ntime+28800)%86400;\r\n\t\t\tif($ytime<72300){\r\n\t\t\t\t$ntime1=floor(($ntime+28800)/86400)*86400-28800+round(($ytime-180)/210)*210+180;\t\r\n\t\t\t}else{\r\n\t\t\t\t$ntime1=floor(($ntime+28800)/86400)*86400-28800+round(($ytime-60)/210)*210+60;\t\r\n\t\t\t}\r\n\t\t\t$ytime=($dtime+28800)%86400;\r\n\t\t\tif($ytime<72300){\r\n\t\t\t\t$ntime2=floor(($dtime+28800)/86400)*86400-28800+round(($ytime-180)/210)*210+180;\t\r\n\t\t\t}else{\r\n\t\t\t\t$ntime2=floor(($dtime+28800)/86400)*86400-28800+round(($ytime-60)/210)*210+60;\t\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\r\n\t\t\tif($gtime<$ntime1){\r\n\t\t\t\t$gtime=$ntime1;\r\n\t\t\t}\r\n\t\t\t$gtime=$gtime+210;\r\n\t\t\t$ytime=($gtime+28800)%86400;\r\n\t\t\tif($ytime>72300 and $ytime<75300){\r\n\t\t\t\tdie;\r\n\t\t\t}else{\r\n\t\t\t\t$ctime=$ntime1-$ntime2;\r\n\t\t\t\tif($ctime>600){\r\n\t\t\t\t\tdie;\r\n\t\t\t\t}else{\r\n\t\t\t\t\t$no=$no+($gtime-$ntime2)/210;\r\n\t\t\t\t\t$yno=$no;\r\n\t\t\t\t\t$ytime=$gtime;\r\n\t\t\t\t}\r\n\t\t\t}',10,5000);
INSERT INTO `lovevi_gsys` VALUES (5,'幸运飞艇',210,180,2,'1','http://www.dandan28.com/index/analysis','2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,10,10,10,10,10,10,10,10,10,10,2,2,2,2,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13','  <p><b>【游戏介绍】</b><br>\r\n海淘城最热门的娱乐项目包括北京赛车、幸运飞艇。<br>\r\n北京赛车：是经国家财政部批准，由北京福利彩票发行承销的中国福利彩其中一种；每期开奖车号共十个,每个车号除了整合玩法，第1~10名、冠亚和值、冠亚组合分别为一个竞猜组，大小/单双/龙虎、车道数字、冠亚大小、冠亚特码、十球全接、特码区段。<br>\r\n幸运飞艇：是马耳他共和国瓦莱塔福利联合委员会独家发行的一款高效率 快乐猜，源于F1赛艇的彩票游戏<br>；\r\n北京赛车、幸运飞艇同以「1~10」十个号码作为开奖依据，完全公平公正公开，开奖透明，无法作弊！<br>\r\n\r\n<b>【相关资料】</b><br>\r\n<b>【开奖时间】</b>「白场」北京赛车为每天上午09:07~晚上23:57止；「夜场」幸运飞艇为下午13:09~凌晨04:04止；每五分钟开奖一期，每次竞猜时间约260秒，等待开奖时间约为40秒，开奖结果与官网完全同步。<br>\r\n\r\n<b>【玩法】</b><br>\r\n<b>【1~10名猜大小单双】</b><br>\r\n第一名～第十名车号：开出之号码大于或等于6为大，小于或等于5为小。开出的号码偶数为双，号码奇数为单。<br>\r\n<b>■</b>奖历：含本1.98倍<br>\r\n■限额：10-10000<br>\r\n\r\n<b>【1~10名猜车号】</b><br>\r\n每一个车号为一竞猜组合，开奖结果「竞猜车号」对应所猜「车道」视为中奖，其余情形视为不中奖。<br>\r\n■奖历：含本9.8倍<br>\r\n■限额：10-10,000<br>\r\n\r\n<b>【1~5名猜龙虎】</b><br>\r\n(1)第一名vs第十名，(2)第二名vs第九名，(3)第三名vs第八名，(4)第四名vs第七名，(5)第五名vs第六名，前比后大为龙，反之为虎。<br>\r\n■奖历：含本1.98倍<br>\r\n■限额：10-10000<br>\r\n\r\n<b>【冠亚和值(特码)猜数字】</b><br>\r\n「冠亚和值」为「特码」可能出现的结果为3~19，竞猜中对应「冠亚和值」数字的视为中奖，其余视为不中奖。<br>\r\n■奖历：<br>\r\n　3.4.18.19，含本40倍，限额10-1,000<br>\r\n　5.6.16.17，含本20倍，限额10-2,000<br>\r\n　7.8.14.15，含本12倍，限额10-3,000<br>\r\n　9.10.12.13，含本9倍，限额10-4,000<br>\r\n　11，含本8倍，限额10-5,000<br>\r\n<b>每期下注：总额10万封顶！</b><br>\r\n\r\n          \r\n\r\n</p>','/Uploads/Picture/2017-12-28/5a44ed31d94a5.jpg','$content=file_get_contents(\'./Data/j8.json\');\r\n\t\t\tif(!$content){\r\n\t\t\t\tdie;\r\n\t\t\t}else{\r\n\t\t\t\t$carr=json_decode($content,\"ture\",512, JSON_BIGINT_AS_STRING);\r\n\t\t\t\t$dtime=strtotime($carr[0][\"c_d\"]);\r\n\t\t\t\t$no=$carr[0][\"c_t\"];\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t$ntime=time();\r\n\t\t\t$ytime=($ntime+28800)%86400;\r\n\t\t\tif($ytime<72300){\r\n\t\t\t\t$ntime1=floor(($ntime+28800)/86400)*86400-28800+round(($ytime-180)/210)*210+180;\t\r\n\t\t\t}else{\r\n\t\t\t\t$ntime1=floor(($ntime+28800)/86400)*86400-28800+round(($ytime-60)/210)*210+60;\t\r\n\t\t\t}\r\n\t\t\t$ytime=($dtime+28800)%86400;\r\n\t\t\tif($ytime<72300){\r\n\t\t\t\t$ntime2=floor(($dtime+28800)/86400)*86400-28800+round(($ytime-180)/210)*210+180;\t\r\n\t\t\t}else{\r\n\t\t\t\t$ntime2=floor(($dtime+28800)/86400)*86400-28800+round(($ytime-60)/210)*210+60;\t\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t\r\n\t\t\tif($gtime<$ntime1){\r\n\t\t\t\t$gtime=$ntime1;\r\n\t\t\t}\r\n\t\t\t$gtime=$gtime+210;\r\n\t\t\t$ytime=($gtime+28800)%86400;\r\n\t\t\tif($ytime>72300 and $ytime<75300){\r\n\t\t\t\tdie;\r\n\t\t\t}else{\r\n\t\t\t\t$ctime=$ntime1-$ntime2;\r\n\t\t\t\tif($ctime>600){\r\n\t\t\t\t\tdie;\r\n\t\t\t\t}else{\r\n\t\t\t\t\t$no=$no+($gtime-$ntime2)/210;\r\n\t\t\t\t\t$yno=$no;\r\n\t\t\t\t\t$ytime=$gtime;\r\n\t\t\t\t}\r\n\t\t\t}',10,5000);
/*!40000 ALTER TABLE `lovevi_gsys` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_hooks
#

DROP TABLE IF EXISTS `lovevi_hooks`;
CREATE TABLE `lovevi_hooks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(40) NOT NULL DEFAULT '' COMMENT '钩子名称',
  `description` text COMMENT '描述',
  `type` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '类型',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `addons` varchar(255) NOT NULL DEFAULT '' COMMENT '钩子挂载的插件 ''，''分割',
  `status` tinyint(1) unsigned NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_hooks
#

LOCK TABLES `lovevi_hooks` WRITE;
/*!40000 ALTER TABLE `lovevi_hooks` DISABLE KEYS */;
INSERT INTO `lovevi_hooks` VALUES (1,'pageHeader','页面header钩子，一般用于加载插件CSS文件和代码',1,0,'',1);
INSERT INTO `lovevi_hooks` VALUES (2,'pageFooter','页面footer钩子，一般用于加载插件JS文件和JS代码',1,0,'ReturnTop',1);
INSERT INTO `lovevi_hooks` VALUES (3,'documentEditForm','添加编辑表单的 扩展内容钩子',1,0,'Attachment',1);
INSERT INTO `lovevi_hooks` VALUES (4,'documentDetailAfter','文档末尾显示',1,0,'Attachment,SocialComment',1);
INSERT INTO `lovevi_hooks` VALUES (5,'documentDetailBefore','页面内容前显示用钩子',1,0,'',1);
INSERT INTO `lovevi_hooks` VALUES (6,'documentSaveComplete','保存文档数据后的扩展钩子',2,0,'Attachment',1);
INSERT INTO `lovevi_hooks` VALUES (7,'documentEditFormContent','添加编辑表单的内容显示钩子',1,0,'Editor',1);
INSERT INTO `lovevi_hooks` VALUES (8,'adminArticleEdit','后台内容编辑页编辑器',1,1378982734,'EditorForAdmin',1);
INSERT INTO `lovevi_hooks` VALUES (13,'AdminIndex','首页小格子个性化显示',1,1382596073,'SiteStat,SystemInfo,DevTeam',1);
INSERT INTO `lovevi_hooks` VALUES (14,'topicComment','评论提交方式扩展钩子。',1,1380163518,'Editor',1);
INSERT INTO `lovevi_hooks` VALUES (16,'app_begin','应用开始',2,1384481614,'',1);
/*!40000 ALTER TABLE `lovevi_hooks` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_mbets
#

DROP TABLE IF EXISTS `lovevi_mbets`;
CREATE TABLE `lovevi_mbets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `txt` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT '1',
  `betpoints` int(11) DEFAULT '50',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_mbets
#

LOCK TABLES `lovevi_mbets` WRITE;
/*!40000 ALTER TABLE `lovevi_mbets` DISABLE KEYS */;
INSERT INTO `lovevi_mbets` VALUES (1,'大',1,50);
INSERT INTO `lovevi_mbets` VALUES (2,'23',2,50);
INSERT INTO `lovevi_mbets` VALUES (3,'小',1,45);
INSERT INTO `lovevi_mbets` VALUES (4,'22',2,50);
INSERT INTO `lovevi_mbets` VALUES (5,'11',1,12);
INSERT INTO `lovevi_mbets` VALUES (6,'22',4,21);
/*!40000 ALTER TABLE `lovevi_mbets` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_member
#

DROP TABLE IF EXISTS `lovevi_member`;
CREATE TABLE `lovevi_member` (
  `uid` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `nickname` char(16) NOT NULL DEFAULT '' COMMENT '昵称',
  `sex` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '性别',
  `birthday` date NOT NULL DEFAULT '0000-00-00' COMMENT '生日',
  `qq` char(10) NOT NULL DEFAULT '' COMMENT 'qq号',
  `score` mediumint(8) NOT NULL DEFAULT '0' COMMENT '用户积分',
  `login` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '登录次数',
  `reg_ip` bigint(20) NOT NULL DEFAULT '0' COMMENT '注册IP',
  `reg_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '注册时间',
  `last_login_ip` bigint(20) NOT NULL DEFAULT '0' COMMENT '最后登录IP',
  `last_login_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最后登录时间',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '会员状态',
  `money` float(10,2) DEFAULT '0.00',
  `tjm` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`uid`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COMMENT='会员表';

#
# Dumping data for table lovevi_member
#

LOCK TABLES `lovevi_member` WRITE;
/*!40000 ALTER TABLE `lovevi_member` DISABLE KEYS */;
INSERT INTO `lovevi_member` VALUES (1,'admin',0,'0000-00-00','',320,96,0,1489401480,1904258219,1515472479,1,0,'');
INSERT INTO `lovevi_member` VALUES (31,'test',0,'0000-00-00','',0,0,0,0,0,0,1,0,NULL);
INSERT INTO `lovevi_member` VALUES (32,'titi',0,'0000-00-00','',10,1,0,0,1967868805,1490516775,-1,0,'3b9ad6c4');
INSERT INTO `lovevi_member` VALUES (33,'bbs',0,'0000-00-00','',0,0,0,0,0,0,-1,0,'3b9ad73b');
INSERT INTO `lovevi_member` VALUES (34,'dog',0,'0000-00-00','',20,2,0,0,1967869860,1491139464,1,10000,'3b9ad7a9');
INSERT INTO `lovevi_member` VALUES (35,'ABC',0,'0000-00-00','',0,0,0,0,0,0,1,0,'3b9ad802');
/*!40000 ALTER TABLE `lovevi_member` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_menu
#

DROP TABLE IF EXISTS `lovevi_menu`;
CREATE TABLE `lovevi_menu` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '文档ID',
  `title` varchar(50) NOT NULL DEFAULT '' COMMENT '标题',
  `pid` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '上级分类ID',
  `sort` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '排序（同级有效）',
  `url` char(255) NOT NULL DEFAULT '' COMMENT '链接地址',
  `hide` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否隐藏',
  `tip` varchar(255) NOT NULL DEFAULT '' COMMENT '提示',
  `group` varchar(50) DEFAULT '' COMMENT '分组',
  `is_dev` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '是否仅开发者模式可见',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '状态',
  PRIMARY KEY (`id`),
  KEY `pid` (`pid`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=161 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_menu
#

LOCK TABLES `lovevi_menu` WRITE;
/*!40000 ALTER TABLE `lovevi_menu` DISABLE KEYS */;
INSERT INTO `lovevi_menu` VALUES (1,'首页',0,0,'Index/index',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (2,'内容',0,2,'Article/index',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (3,'文档列表',2,0,'article/index',1,'','内容',0,1);
INSERT INTO `lovevi_menu` VALUES (4,'新增',3,0,'article/add',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (5,'编辑',3,0,'article/edit',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (6,'改变状态',3,0,'article/setStatus',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (7,'保存',3,0,'article/update',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (8,'保存草稿',3,0,'article/autoSave',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (9,'移动',3,0,'article/move',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (10,'复制',3,0,'article/copy',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (11,'粘贴',3,0,'article/paste',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (12,'导入',3,0,'article/batchOperate',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (13,'回收站',2,0,'article/recycle',1,'','内容',0,1);
INSERT INTO `lovevi_menu` VALUES (14,'还原',13,0,'article/permit',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (15,'清空',13,0,'article/clear',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (16,'代理会员',0,3,'User/index',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (17,'用户信息',16,0,'User/index',0,'','用户管理',0,1);
INSERT INTO `lovevi_menu` VALUES (18,'新增用户',17,0,'User/add',0,'添加新用户','',0,1);
INSERT INTO `lovevi_menu` VALUES (19,'用户行为',16,0,'User/action',1,'','行为管理',0,1);
INSERT INTO `lovevi_menu` VALUES (20,'新增用户行为',19,0,'User/addaction',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (21,'编辑用户行为',19,0,'User/editaction',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (22,'保存用户行为',19,0,'User/saveAction',0,'\"用户->用户行为\"保存编辑和新增的用户行为','',0,1);
INSERT INTO `lovevi_menu` VALUES (23,'变更行为状态',19,0,'User/setStatus',0,'\"用户->用户行为\"中的启用,禁用和删除权限','',0,1);
INSERT INTO `lovevi_menu` VALUES (24,'禁用会员',19,0,'User/changeStatus?method=forbidUser',0,'\"用户->用户信息\"中的禁用','',0,1);
INSERT INTO `lovevi_menu` VALUES (25,'启用会员',19,0,'User/changeStatus?method=resumeUser',0,'\"用户->用户信息\"中的启用','',0,1);
INSERT INTO `lovevi_menu` VALUES (26,'删除会员',19,0,'User/changeStatus?method=deleteUser',0,'\"用户->用户信息\"中的删除','',0,1);
INSERT INTO `lovevi_menu` VALUES (27,'权限管理',16,0,'AuthManager/index',1,'','用户管理',0,1);
INSERT INTO `lovevi_menu` VALUES (28,'删除',27,0,'AuthManager/changeStatus?method=deleteGroup',0,'删除用户组','',0,1);
INSERT INTO `lovevi_menu` VALUES (29,'禁用',27,0,'AuthManager/changeStatus?method=forbidGroup',0,'禁用用户组','',0,1);
INSERT INTO `lovevi_menu` VALUES (30,'恢复',27,0,'AuthManager/changeStatus?method=resumeGroup',0,'恢复已禁用的用户组','',0,1);
INSERT INTO `lovevi_menu` VALUES (31,'新增',27,0,'AuthManager/createGroup',0,'创建新的用户组','',0,1);
INSERT INTO `lovevi_menu` VALUES (32,'编辑',27,0,'AuthManager/editGroup',0,'编辑用户组名称和描述','',0,1);
INSERT INTO `lovevi_menu` VALUES (33,'保存用户组',27,0,'AuthManager/writeGroup',0,'新增和编辑用户组的\"保存\"按钮','',0,1);
INSERT INTO `lovevi_menu` VALUES (34,'授权',27,0,'AuthManager/group',0,'\"后台 \\ 用户 \\ 用户信息\"列表页的\"授权\"操作按钮,用于设置用户所属用户组','',0,1);
INSERT INTO `lovevi_menu` VALUES (35,'访问授权',27,0,'AuthManager/access',0,'\"后台 \\ 用户 \\ 权限管理\"列表页的\"访问授权\"操作按钮','',0,1);
INSERT INTO `lovevi_menu` VALUES (36,'成员授权',27,0,'AuthManager/user',0,'\"后台 \\ 用户 \\ 权限管理\"列表页的\"成员授权\"操作按钮','',0,1);
INSERT INTO `lovevi_menu` VALUES (37,'解除授权',27,0,'AuthManager/removeFromGroup',0,'\"成员授权\"列表页内的解除授权操作按钮','',0,1);
INSERT INTO `lovevi_menu` VALUES (38,'保存成员授权',27,0,'AuthManager/addToGroup',0,'\"用户信息\"列表页\"授权\"时的\"保存\"按钮和\"成员授权\"里右上角的\"添加\"按钮)','',0,1);
INSERT INTO `lovevi_menu` VALUES (39,'分类授权',27,0,'AuthManager/category',0,'\"后台 \\ 用户 \\ 权限管理\"列表页的\"分类授权\"操作按钮','',0,1);
INSERT INTO `lovevi_menu` VALUES (40,'保存分类授权',27,0,'AuthManager/addToCategory',0,'\"分类授权\"页面的\"保存\"按钮','',0,1);
INSERT INTO `lovevi_menu` VALUES (41,'模型授权',27,0,'AuthManager/modelauth',0,'\"后台 \\ 用户 \\ 权限管理\"列表页的\"模型授权\"操作按钮','',0,1);
INSERT INTO `lovevi_menu` VALUES (42,'保存模型授权',27,0,'AuthManager/addToModel',0,'\"分类授权\"页面的\"保存\"按钮','',0,1);
INSERT INTO `lovevi_menu` VALUES (43,'扩展',0,7,'Addons/index',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (44,'插件管理',43,1,'Addons/index',0,'','扩展',0,1);
INSERT INTO `lovevi_menu` VALUES (45,'创建',44,0,'Addons/create',0,'服务器上创建插件结构向导','',0,1);
INSERT INTO `lovevi_menu` VALUES (46,'检测创建',44,0,'Addons/checkForm',0,'检测插件是否可以创建','',0,1);
INSERT INTO `lovevi_menu` VALUES (47,'预览',44,0,'Addons/preview',0,'预览插件定义类文件','',0,1);
INSERT INTO `lovevi_menu` VALUES (48,'快速生成插件',44,0,'Addons/build',0,'开始生成插件结构','',0,1);
INSERT INTO `lovevi_menu` VALUES (49,'设置',44,0,'Addons/config',0,'设置插件配置','',0,1);
INSERT INTO `lovevi_menu` VALUES (50,'禁用',44,0,'Addons/disable',0,'禁用插件','',0,1);
INSERT INTO `lovevi_menu` VALUES (51,'启用',44,0,'Addons/enable',0,'启用插件','',0,1);
INSERT INTO `lovevi_menu` VALUES (52,'安装',44,0,'Addons/install',0,'安装插件','',0,1);
INSERT INTO `lovevi_menu` VALUES (53,'卸载',44,0,'Addons/uninstall',0,'卸载插件','',0,1);
INSERT INTO `lovevi_menu` VALUES (54,'更新配置',44,0,'Addons/saveconfig',0,'更新插件配置处理','',0,1);
INSERT INTO `lovevi_menu` VALUES (55,'插件后台列表',44,0,'Addons/adminList',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (56,'URL方式访问插件',44,0,'Addons/execute',0,'控制是否有权限通过url访问插件控制器方法','',0,1);
INSERT INTO `lovevi_menu` VALUES (57,'钩子管理',43,2,'Addons/hooks',0,'','扩展',0,1);
INSERT INTO `lovevi_menu` VALUES (58,'模型管理',68,3,'Model/index',1,'','系统设置',0,1);
INSERT INTO `lovevi_menu` VALUES (59,'新增',58,0,'model/add',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (60,'编辑',58,0,'model/edit',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (61,'改变状态',58,0,'model/setStatus',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (62,'保存数据',58,0,'model/update',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (63,'属性管理',68,0,'Attribute/index',1,'网站属性配置。','',0,1);
INSERT INTO `lovevi_menu` VALUES (64,'新增',63,0,'Attribute/add',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (65,'编辑',63,0,'Attribute/edit',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (66,'改变状态',63,0,'Attribute/setStatus',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (67,'保存数据',63,0,'Attribute/update',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (68,'系统',0,4,'Database/index/type/export',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (69,'网站设置',68,1,'Config/group',1,'','系统设置',0,1);
INSERT INTO `lovevi_menu` VALUES (70,'配置管理',68,4,'Config/index',1,'','系统设置',0,1);
INSERT INTO `lovevi_menu` VALUES (71,'编辑',70,0,'Config/edit',0,'新增编辑和保存配置','',0,1);
INSERT INTO `lovevi_menu` VALUES (72,'删除',70,0,'Config/del',0,'删除配置','',0,1);
INSERT INTO `lovevi_menu` VALUES (73,'新增',70,0,'Config/add',0,'新增配置','',0,1);
INSERT INTO `lovevi_menu` VALUES (74,'保存',70,0,'Config/save',0,'保存配置','',0,1);
INSERT INTO `lovevi_menu` VALUES (75,'菜单管理',68,5,'Menu/index',0,'','系统设置',0,1);
INSERT INTO `lovevi_menu` VALUES (76,'导航管理',68,6,'Channel/index',1,'','系统设置',0,1);
INSERT INTO `lovevi_menu` VALUES (77,'新增',76,0,'Channel/add',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (78,'编辑',76,0,'Channel/edit',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (79,'删除',76,0,'Channel/del',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (80,'分类管理',68,2,'Category/index',1,'','系统设置',0,1);
INSERT INTO `lovevi_menu` VALUES (81,'编辑',80,0,'Category/edit',0,'编辑和保存栏目分类','',0,1);
INSERT INTO `lovevi_menu` VALUES (82,'新增',80,0,'Category/add',0,'新增栏目分类','',0,1);
INSERT INTO `lovevi_menu` VALUES (83,'删除',80,0,'Category/remove',0,'删除栏目分类','',0,1);
INSERT INTO `lovevi_menu` VALUES (84,'移动',80,0,'Category/operate/type/move',0,'移动栏目分类','',0,1);
INSERT INTO `lovevi_menu` VALUES (85,'合并',80,0,'Category/operate/type/merge',0,'合并栏目分类','',0,1);
INSERT INTO `lovevi_menu` VALUES (86,'备份数据库',68,0,'Database/index?type=export',0,'','数据备份',0,1);
INSERT INTO `lovevi_menu` VALUES (87,'备份',86,0,'Database/export',0,'备份数据库','',0,1);
INSERT INTO `lovevi_menu` VALUES (88,'优化表',86,0,'Database/optimize',0,'优化数据表','',0,1);
INSERT INTO `lovevi_menu` VALUES (89,'修复表',86,0,'Database/repair',0,'修复数据表','',0,1);
INSERT INTO `lovevi_menu` VALUES (90,'还原数据库',68,0,'Database/index?type=import',0,'','数据备份',0,1);
INSERT INTO `lovevi_menu` VALUES (91,'恢复',90,0,'Database/import',0,'数据库恢复','',0,1);
INSERT INTO `lovevi_menu` VALUES (92,'删除',90,0,'Database/del',0,'删除备份文件','',0,1);
INSERT INTO `lovevi_menu` VALUES (93,'其他',0,5,'other',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (96,'新增',75,0,'Menu/add',0,'','系统设置',0,1);
INSERT INTO `lovevi_menu` VALUES (98,'编辑',75,0,'Menu/edit',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (106,'行为日志',16,0,'Action/actionlog',1,'','行为管理',0,1);
INSERT INTO `lovevi_menu` VALUES (108,'修改密码',16,0,'User/updatePassword',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (109,'修改昵称',16,0,'User/updateNickname',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (110,'查看行为日志',106,0,'action/edit',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (112,'新增数据',58,0,'think/add',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (113,'编辑数据',58,0,'think/edit',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (114,'导入',75,0,'Menu/import',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (115,'生成',58,0,'Model/generate',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (116,'新增钩子',57,0,'Addons/addHook',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (117,'编辑钩子',57,0,'Addons/edithook',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (118,'文档排序',3,0,'Article/sort',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (119,'排序',70,0,'Config/sort',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (120,'排序',75,0,'Menu/sort',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (121,'排序',76,0,'Channel/sort',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (122,'数据列表',58,0,'think/lists',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (123,'审核列表',3,0,'Article/examine',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (124,'用户管理',0,0,'tuser/lists',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (125,'会员列表',124,0,'tuser/lists',0,'','会员',0,1);
INSERT INTO `lovevi_menu` VALUES (126,'消息列表',124,0,'tuser/sms',1,'','会员',0,1);
INSERT INTO `lovevi_menu` VALUES (127,'发送信息',124,0,'tuser/sendsms',1,'','会员',0,1);
INSERT INTO `lovevi_menu` VALUES (128,'财务流水',0,0,'money/lists',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (129,'转账',128,0,'money/add',0,'','财务',0,1);
INSERT INTO `lovevi_menu` VALUES (130,'资金流水',128,0,'money/lists',0,'','财务',0,1);
INSERT INTO `lovevi_menu` VALUES (131,'彩票设置',0,0,'game/lists',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (132,'开奖记录',131,0,'game/lists',0,'','彩票',0,1);
INSERT INTO `lovevi_menu` VALUES (133,'游戏设置',131,0,'game/peilv',0,'','彩票',0,1);
INSERT INTO `lovevi_menu` VALUES (134,'机器人',0,6,'machine/mlist',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (135,'机器人设置',134,1,'machine/set',1,'','机器人',0,1);
INSERT INTO `lovevi_menu` VALUES (136,'代理转账',16,0,'user/recharge',0,'','用户管理',0,1);
INSERT INTO `lovevi_menu` VALUES (137,'充值管理',128,0,'money/recharge/type/1',0,'','财务',0,1);
INSERT INTO `lovevi_menu` VALUES (138,'提现管理',128,0,'money/recharge/type/2',0,'','财务',0,1);
INSERT INTO `lovevi_menu` VALUES (139,'每日流水',128,0,'money/lists1',1,'','财务',0,1);
INSERT INTO `lovevi_menu` VALUES (140,'聊天信息',124,0,'tuser/clists',1,'','聊天',0,1);
INSERT INTO `lovevi_menu` VALUES (141,'回复信息',124,0,'tuser/csms',1,'','聊天',0,1);
INSERT INTO `lovevi_menu` VALUES (142,'限红管理',124,0,'tuser/xianhong',1,'','会员',0,1);
INSERT INTO `lovevi_menu` VALUES (143,'网站设置',0,0,'tconfig/website',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (144,'网站设置',143,0,'tconfig/website',0,'','网站设置',0,1);
INSERT INTO `lovevi_menu` VALUES (145,'幻灯片',143,0,'tconfig/banner',0,'','网站设置',0,1);
INSERT INTO `lovevi_menu` VALUES (146,'公告',143,0,'tconfig/news',0,'','网站设置',0,1);
INSERT INTO `lovevi_menu` VALUES (147,'编辑',145,0,'tconfig/bedite',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (148,'编辑',146,0,'tconfig/nedite',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (149,'房间列表',131,0,'game/room',1,'','房间',0,1);
INSERT INTO `lovevi_menu` VALUES (150,'游戏说明',131,0,'game/help',1,'','彩票',0,1);
INSERT INTO `lovevi_menu` VALUES (151,'编辑',150,0,'game/edite',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (152,'新增',145,0,'tconfig/badd',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (153,'新增',146,0,'tconfig/nadd',0,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (154,'房间设置',149,0,'game/roomset',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (155,'下注明细',131,0,'game/betdetail',0,'','下注',0,1);
INSERT INTO `lovevi_menu` VALUES (156,'机器人',134,0,'machine/mlist',0,'','机器人',0,1);
INSERT INTO `lovevi_menu` VALUES (157,'注单',134,0,'machine/blist',0,'','机器人',0,1);
INSERT INTO `lovevi_menu` VALUES (158,'下注统计',131,0,'game/blist',0,'','下注',0,1);
INSERT INTO `lovevi_menu` VALUES (159,'新增',156,0,'machine/bedite',1,'','',0,1);
INSERT INTO `lovevi_menu` VALUES (160,'新增',157,0,'machine/edite',1,'','',0,1);
/*!40000 ALTER TABLE `lovevi_menu` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_model
#

DROP TABLE IF EXISTS `lovevi_model`;
CREATE TABLE `lovevi_model` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '模型ID',
  `name` char(30) NOT NULL DEFAULT '' COMMENT '模型标识',
  `title` char(30) NOT NULL DEFAULT '' COMMENT '模型名称',
  `extend` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '继承的模型',
  `relation` varchar(30) NOT NULL DEFAULT '' COMMENT '继承与被继承模型的关联字段',
  `need_pk` tinyint(1) unsigned NOT NULL DEFAULT '1' COMMENT '新建表时是否需要主键字段',
  `field_sort` text COMMENT '表单字段排序',
  `field_group` varchar(255) NOT NULL DEFAULT '1:基础' COMMENT '字段分组',
  `attribute_list` text COMMENT '属性列表（表的字段）',
  `attribute_alias` varchar(255) NOT NULL DEFAULT '' COMMENT '属性别名定义',
  `template_list` varchar(100) NOT NULL DEFAULT '' COMMENT '列表模板',
  `template_add` varchar(100) NOT NULL DEFAULT '' COMMENT '新增模板',
  `template_edit` varchar(100) NOT NULL DEFAULT '' COMMENT '编辑模板',
  `list_grid` text COMMENT '列表定义',
  `list_row` smallint(2) unsigned NOT NULL DEFAULT '10' COMMENT '列表数据长度',
  `search_key` varchar(50) NOT NULL DEFAULT '' COMMENT '默认搜索字段',
  `search_list` varchar(255) NOT NULL DEFAULT '' COMMENT '高级搜索的字段',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '状态',
  `engine_type` varchar(25) NOT NULL DEFAULT 'MyISAM' COMMENT '数据库引擎',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='文档模型表';

#
# Dumping data for table lovevi_model
#

LOCK TABLES `lovevi_model` WRITE;
/*!40000 ALTER TABLE `lovevi_model` DISABLE KEYS */;
INSERT INTO `lovevi_model` VALUES (1,'document','基础文档',0,'',1,'{\"1\":[\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\",\"11\",\"12\",\"13\",\"14\",\"15\",\"16\",\"17\",\"18\",\"19\",\"20\",\"21\",\"22\"]}','1:基础','','','','','','id:编号\r\ntitle:标题:[EDIT]\r\ntype:类型\r\nupdate_time:最后更新\r\nstatus:状态\r\nview:浏览\r\nid:操作:[EDIT]|编辑,[DELETE]|删除',0,'','',1383891233,1384507827,1,'MyISAM');
INSERT INTO `lovevi_model` VALUES (2,'article','文章',1,'',1,'{\"1\":[\"3\",\"24\",\"2\",\"5\"],\"2\":[\"9\",\"13\",\"19\",\"10\",\"12\",\"16\",\"17\",\"26\",\"20\",\"14\",\"11\",\"25\"]}','1:基础,2:扩展','','','','','','',0,'','',1383891243,1387260622,1,'MyISAM');
INSERT INTO `lovevi_model` VALUES (3,'download','下载',1,'',1,'{\"1\":[\"3\",\"28\",\"30\",\"32\",\"2\",\"5\",\"31\"],\"2\":[\"13\",\"10\",\"27\",\"9\",\"12\",\"16\",\"17\",\"19\",\"11\",\"20\",\"14\",\"29\"]}','1:基础,2:扩展','','','','','','',0,'','',1383891252,1387260449,1,'MyISAM');
/*!40000 ALTER TABLE `lovevi_model` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_musers
#

DROP TABLE IF EXISTS `lovevi_musers`;
CREATE TABLE `lovevi_musers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `min` int(11) DEFAULT NULL,
  `max` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_musers
#

LOCK TABLES `lovevi_musers` WRITE;
/*!40000 ALTER TABLE `lovevi_musers` DISABLE KEYS */;
INSERT INTO `lovevi_musers` VALUES (2,'小二','/Uploads/Picture/2017-12-17/5a35f992b1031.jpg',1,NULL,NULL);
INSERT INTO `lovevi_musers` VALUES (3,'小三','/Uploads/Picture/2017-12-17/5a35f99d18791.jpg',1,NULL,NULL);
INSERT INTO `lovevi_musers` VALUES (4,'大一','/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg',2,NULL,NULL);
INSERT INTO `lovevi_musers` VALUES (5,'大二','/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg',2,NULL,NULL);
INSERT INTO `lovevi_musers` VALUES (7,'我的啊','/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg',1,NULL,NULL);
/*!40000 ALTER TABLE `lovevi_musers` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_news
#

DROP TABLE IF EXISTS `lovevi_news`;
CREATE TABLE `lovevi_news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `title` varchar(255) NOT NULL COMMENT '标题',
  `top` char(10) NOT NULL DEFAULT '0' COMMENT '置顶',
  `content` text NOT NULL COMMENT '内容',
  `time` int(12) NOT NULL DEFAULT '0' COMMENT '时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Dumping data for table lovevi_news
#

LOCK TABLES `lovevi_news` WRITE;
/*!40000 ALTER TABLE `lovevi_news` DISABLE KEYS */;
INSERT INTO `lovevi_news` VALUES (2,'网站正在测试！！！','1','网站正在测试！！！！',1500102295);
/*!40000 ALTER TABLE `lovevi_news` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_picture
#

DROP TABLE IF EXISTS `lovevi_picture`;
CREATE TABLE `lovevi_picture` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键id自增',
  `path` varchar(255) NOT NULL DEFAULT '' COMMENT '路径',
  `url` varchar(255) NOT NULL DEFAULT '' COMMENT '图片链接',
  `md5` char(32) NOT NULL DEFAULT '' COMMENT '文件md5',
  `sha1` char(40) NOT NULL DEFAULT '' COMMENT '文件 sha1编码',
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '状态',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_picture
#

LOCK TABLES `lovevi_picture` WRITE;
/*!40000 ALTER TABLE `lovevi_picture` DISABLE KEYS */;
INSERT INTO `lovevi_picture` VALUES (1,'/Uploads/Picture/2017-08-06/5986790e572ec.jpg','','3c1af29a693131a0e149c1519404dd3e','7a4805a995d548099bd7908a44424fe6b0136d43',1,1501985036);
INSERT INTO `lovevi_picture` VALUES (2,'/Uploads/Picture/2017-08-06/5986791e31092.jpg','','90d0f3e8f6304a0bd4779458c3a6b571','56d9d9190d11edb174d53b2ffed3b3f70c697327',1,1501985053);
INSERT INTO `lovevi_picture` VALUES (3,'/Uploads/Picture/2017-08-06/59867eed0712f.png','','92856f0bad0d6fe315084e2a54961f2c','f06edb7b8a63769b560b91a1c83a345dbf5f2dd0',1,1501986540);
INSERT INTO `lovevi_picture` VALUES (4,'/Uploads/Picture/2017-08-06/59867f5e88c61.jpg','','d9f652a52519eb91c1f63730ae5f2238','5a974d037c7cdc2e9f4851c59cb62af09dbc13b3',1,1501986653);
INSERT INTO `lovevi_picture` VALUES (5,'/Uploads/Picture/2017-08-06/59867fed6e122.jpg','','0bf2fbbd2fbfd9319ea000beba6888b9','24eadf07e2a4ba00c24baf45ca222f8f9c321104',1,1501986796);
INSERT INTO `lovevi_picture` VALUES (6,'/Uploads/Picture/2017-08-06/5986bc5fcd703.jpg','','a042d2c2fbf8a55a1474bd008b6e62b8','4a2d4aa2e565a0f9f9037c236f02120c82837d39',1,1502002271);
INSERT INTO `lovevi_picture` VALUES (7,'/Uploads/Picture/2017-08-06/5986bceaba5d6.jpg','','fae8d35a04ac7aab2e9e1c79edf3c564','090a7aaf8e65798daa1e9d3a8ba455e009cef125',1,1502002410);
INSERT INTO `lovevi_picture` VALUES (8,'/Uploads/Picture/2017-08-06/5986bd0788c61.jpg','','fab46b4287591a2a2158ca8914b3e226','7f447029da1d72e2094e6a49eebcf43765aa5592',1,1502002439);
INSERT INTO `lovevi_picture` VALUES (9,'/Uploads/Picture/2017-08-06/5986bd295ecfe.jpg','','d7917bce23dd31836a24ff34bf1dd5ee','6e0d96a4005ca10aaba9478f8220136005e55077',1,1502002473);
INSERT INTO `lovevi_picture` VALUES (10,'/Uploads/Picture/2017-08-06/5986beca66710.png','','e272fe4515d4aeecfe035ae92bba9be7','10bf4d5ac7da3a5a2e1011c28124218bbe59fbff',1,1502002890);
INSERT INTO `lovevi_picture` VALUES (11,'/Uploads/Picture/2017-08-06/5986bed3d5115.png','','7e87f6ec4196ce6a55e3a9814f35af63','ff4ef782bd382db100802a3fdb5f6a320fdcfc4c',1,1502002899);
INSERT INTO `lovevi_picture` VALUES (12,'/Uploads/Picture/2017-08-10/598bd81434d9b.png','','a0d9baa7085d13961a9b635c579f0a98','afef7ab66b12cbe8858fe1de3502ac55b416e93b',1,1502337044);
INSERT INTO `lovevi_picture` VALUES (13,'/Uploads/Picture/2017-12-17/5a35f983832a2.jpg','','d7ce7227a1362318d3aaa6af7773066f','9aa05d5675c10200b11bf5b452138b9435d3f83e',1,1513486723);
INSERT INTO `lovevi_picture` VALUES (14,'/Uploads/Picture/2017-12-17/5a35f992b1031.jpg','','ce43f927545f4d5b0111eb7f059af2b6','008549028d5b5b33d071ec14f0076d58ce676997',1,1513486738);
INSERT INTO `lovevi_picture` VALUES (15,'/Uploads/Picture/2017-12-17/5a35f99d18791.jpg','','24101901b8e28ee958a406b728a72ea3','435246652033bc0e8b154e4350bc13a0626bb455',1,1513486749);
INSERT INTO `lovevi_picture` VALUES (16,'/Uploads/Picture/2017-12-17/5a35f9a79a38d.jpg','','f42a5087bef92e423523612b114ec727','9037e25c31c2d786242a1606a159a6d8ece70865',1,1513486759);
INSERT INTO `lovevi_picture` VALUES (17,'/Uploads/Picture/2017-12-17/5a35f9b13ae64.jpg','','4c719b16fc4d793de31723d452b980b5','97a04e9652978425add327c476d2ac614b7c70ae',1,1513486769);
INSERT INTO `lovevi_picture` VALUES (18,'/Uploads/Picture/2017-12-28/5a44ed0fa77c5.jpg','','8307c2d876c85a2af4f7d47efa506ff6','1977ae451e0c93c9b3b913b34ac4e746d21d533b',1,1514466575);
INSERT INTO `lovevi_picture` VALUES (19,'/Uploads/Picture/2017-12-28/5a44ed175f0df.jpg','','2a4c43f19ffd1e82d6cb1f68c103670a','06994e1d28cd67fedb086a69aca676f4ce552629',1,1514466583);
INSERT INTO `lovevi_picture` VALUES (20,'/Uploads/Picture/2017-12-28/5a44ed25948c9.jpg','','f97932bcfed99523d9bc9bb7ed9d4e5a','54c2c059de1854b054331a14d1dc1ba8e65027ae',1,1514466597);
INSERT INTO `lovevi_picture` VALUES (21,'/Uploads/Picture/2017-12-28/5a44ed31d94a5.jpg','','ee7ed1e8a5c663ce7c4d584de2af13a2','5ec2c613348bbfc97930a714f04bea52ed1da804',1,1514466609);
INSERT INTO `lovevi_picture` VALUES (22,'/Uploads/Picture/2017-12-28/5a44f5ba9fab7.jpg','','73b3f657a6f1f490163d35bd27731c4e','caef4459b4ba720c5910e1a84c7dc04e69e607e8',1,1514468794);
INSERT INTO `lovevi_picture` VALUES (23,'/Uploads/Picture/2018-01-01/5a4a09fd04d9c.jpg','','5eeb31b311f4c0c98cef5c617ebece96','8a699e29f2b31e120c511fe9c75b0af6e68de75a',1,1514801660);
INSERT INTO `lovevi_picture` VALUES (24,'/Uploads/Picture/2018-01-01/5a4a197628085.jpg','','e438af3e056cff0180f27679c7c11d3a','0bb9ccf71e0f3e5c4c8e2c0e62550c59c706a868',1,1514805621);
INSERT INTO `lovevi_picture` VALUES (25,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg','','5e1eb6d0942c15abb4e2e098ca8bf178','146edaf683cf6f0c39696e19b857340e85be87a2',1,1515049355);
/*!40000 ALTER TABLE `lovevi_picture` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_pointslog
#

DROP TABLE IF EXISTS `lovevi_pointslog`;
CREATE TABLE `lovevi_pointslog` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `uid` int(10) unsigned NOT NULL,
  `points` int(10) unsigned NOT NULL,
  `addpoints` int(10) unsigned NOT NULL COMMENT '变量',
  `symbol` char(10) NOT NULL COMMENT '符号',
  `remarks` varchar(255) NOT NULL COMMENT '备注信息',
  `time` int(10) unsigned NOT NULL,
  `did` int(11) DEFAULT '0' COMMENT '代理id',
  `type` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT '2',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2028 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Dumping data for table lovevi_pointslog
#

LOCK TABLES `lovevi_pointslog` WRITE;
/*!40000 ALTER TABLE `lovevi_pointslog` DISABLE KEYS */;
INSERT INTO `lovevi_pointslog` VALUES (2028,2170,0,1000,'+','系统增加',1515472498,1,NULL,2);
INSERT INTO `lovevi_pointslog` VALUES (2029,2170,1000,100,'-','北京28第866126期投注',1515472520,0,1,2);
INSERT INTO `lovevi_pointslog` VALUES (2030,2170,900,20,'-','北京赛车第660699期投注',1515472742,0,1,2);
INSERT INTO `lovevi_pointslog` VALUES (2031,2170,880,200,'+','北京28第866126期中奖获得',1515472825,0,NULL,2);
/*!40000 ALTER TABLE `lovevi_pointslog` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_recharge
#

DROP TABLE IF EXISTS `lovevi_recharge`;
CREATE TABLE `lovevi_recharge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(255) DEFAULT NULL,
  `money` int(11) DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT '0',
  `type` int(11) DEFAULT '1',
  `did` int(11) DEFAULT NULL,
  `paytype` varchar(255) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `bankname` varchar(255) DEFAULT NULL,
  `rname` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_recharge
#

LOCK TABLES `lovevi_recharge` WRITE;
/*!40000 ALTER TABLE `lovevi_recharge` DISABLE KEYS */;
INSERT INTO `lovevi_recharge` VALUES (37,'179',22,1514722128,1,1,NULL,'wx',NULL,NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (49,'179',12,1514727872,1,2,NULL,'银行卡','12','12','12');
INSERT INTO `lovevi_recharge` VALUES (50,'179',2,1514727916,2,2,NULL,'支付宝','2',NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (51,'179',21,1514728066,2,2,NULL,'银行卡','33','33','小陈');
INSERT INTO `lovevi_recharge` VALUES (52,'179',2000,1514897583,1,1,NULL,'微信',NULL,NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (53,'179',1000,1515050537,1,2,NULL,'微信','mgng',NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (54,'179',47000,1515050588,1,2,NULL,'微信','mgjgng',NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (55,'179',1000,1515050631,1,1,NULL,'微信',NULL,NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (56,'179',12222,1515050700,1,1,NULL,'微信',NULL,NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (57,'179',1000,1515050891,1,1,NULL,'支付宝',NULL,NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (58,'179',71680,1515054000,1,2,NULL,'微信','gmgmgw',NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (59,'179',1000,1515054206,2,1,NULL,'微信',NULL,NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (60,'179',1000,1515054207,1,1,NULL,'微信',NULL,NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (61,'179',100,1515074433,1,1,NULL,'微信',NULL,NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (62,'179',1000,1515132640,1,1,NULL,'微信',NULL,NULL,NULL);
INSERT INTO `lovevi_recharge` VALUES (63,'179',1000,1515137341,1,2,NULL,'微信','1000',NULL,NULL);
/*!40000 ALTER TABLE `lovevi_recharge` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_sysset
#

DROP TABLE IF EXISTS `lovevi_sysset`;
CREATE TABLE `lovevi_sysset` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `welcome` varchar(255) DEFAULT NULL,
  `maxbet` int(11) DEFAULT '0',
  `minbet` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_sysset
#

LOCK TABLES `lovevi_sysset` WRITE;
/*!40000 ALTER TABLE `lovevi_sysset` DISABLE KEYS */;
INSERT INTO `lovevi_sysset` VALUES (1,'欢迎加入七彩跑道！各位玩家现在测试阶段调试 请先不要下注',10000,10);
/*!40000 ALTER TABLE `lovevi_sysset` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_tconfig
#

DROP TABLE IF EXISTS `lovevi_tconfig`;
CREATE TABLE `lovevi_tconfig` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `kefu` varchar(255) DEFAULT NULL,
  `qq` int(11) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `wpic` varchar(255) DEFAULT NULL,
  `tel` varchar(255) DEFAULT NULL,
  `npeople` int(11) DEFAULT NULL,
  `zhuan` int(11) DEFAULT '0',
  `bi` int(11) DEFAULT NULL,
  `sharepic` varchar(255) DEFAULT NULL COMMENT '分享图片',
  `sharecontent` text COMMENT '分享制度',
  `wxpay` varchar(255) DEFAULT NULL,
  `alpay` varchar(255) DEFAULT NULL,
  `kefupic` varchar(255) DEFAULT NULL,
  `ybi` float(10,2) DEFAULT '0.00' COMMENT '佣金百分比',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_tconfig
#

LOCK TABLES `lovevi_tconfig` WRITE;
/*!40000 ALTER TABLE `lovevi_tconfig` DISABLE KEYS */;
INSERT INTO `lovevi_tconfig` VALUES (1,'幸运28','#',66329180,'/Uploads/Picture/2017-08-06/59867eed0712f.png','/Uploads/Picture/2017-07-15/5969a4feea429.png','13386401308',20144,5104630,98,'/Uploads/Picture/2018-01-04/5a4dd18c03feb.jpg','后台添加分享制度.','/Uploads/Picture/2018-01-01/5a4a09fd04d9c.jpg',NULL,'/Uploads/Picture/2018-01-01/5a4a197628085.jpg',2);
/*!40000 ALTER TABLE `lovevi_tconfig` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_ucenter_admin
#

DROP TABLE IF EXISTS `lovevi_ucenter_admin`;
CREATE TABLE `lovevi_ucenter_admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '管理员ID',
  `member_id` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '管理员用户ID',
  `status` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '管理员状态',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='管理员表';

#
# Dumping data for table lovevi_ucenter_admin
#

LOCK TABLES `lovevi_ucenter_admin` WRITE;
/*!40000 ALTER TABLE `lovevi_ucenter_admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `lovevi_ucenter_admin` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_ucenter_app
#

DROP TABLE IF EXISTS `lovevi_ucenter_app`;
CREATE TABLE `lovevi_ucenter_app` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '应用ID',
  `title` varchar(30) NOT NULL COMMENT '应用名称',
  `url` varchar(100) NOT NULL COMMENT '应用URL',
  `ip` char(15) NOT NULL DEFAULT '' COMMENT '应用IP',
  `auth_key` varchar(100) NOT NULL DEFAULT '' COMMENT '加密KEY',
  `sys_login` tinyint(1) unsigned NOT NULL DEFAULT '0' COMMENT '同步登陆',
  `allow_ip` varchar(255) NOT NULL DEFAULT '' COMMENT '允许访问的IP',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '应用状态',
  PRIMARY KEY (`id`),
  KEY `status` (`status`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='应用表';

#
# Dumping data for table lovevi_ucenter_app
#

LOCK TABLES `lovevi_ucenter_app` WRITE;
/*!40000 ALTER TABLE `lovevi_ucenter_app` DISABLE KEYS */;
/*!40000 ALTER TABLE `lovevi_ucenter_app` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_ucenter_member
#

DROP TABLE IF EXISTS `lovevi_ucenter_member`;
CREATE TABLE `lovevi_ucenter_member` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `username` char(16) NOT NULL COMMENT '用户名',
  `password` char(32) NOT NULL COMMENT '密码',
  `email` char(32) NOT NULL COMMENT '用户邮箱',
  `mobile` char(15) NOT NULL DEFAULT '' COMMENT '用户手机',
  `reg_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '注册时间',
  `reg_ip` bigint(20) NOT NULL DEFAULT '0' COMMENT '注册IP',
  `last_login_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '最后登录时间',
  `last_login_ip` bigint(20) NOT NULL DEFAULT '0' COMMENT '最后登录IP',
  `update_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '更新时间',
  `status` tinyint(4) DEFAULT '0' COMMENT '用户状态',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  KEY `status` (`status`)
) ENGINE=MyISAM AUTO_INCREMENT=36 DEFAULT CHARSET=utf8 COMMENT='用户表';

#
# Dumping data for table lovevi_ucenter_member
#

LOCK TABLES `lovevi_ucenter_member` WRITE;
/*!40000 ALTER TABLE `lovevi_ucenter_member` DISABLE KEYS */;
INSERT INTO `lovevi_ucenter_member` VALUES (1,'admin','04fdafbe77f173f2582a2c67e95550f4','123@qq.com','',1489401480,1904225587,1515472479,1904258219,1489401480,1);
INSERT INTO `lovevi_ucenter_member` VALUES (31,'太宝','0aa5064b03792819be9c9e08fac1f7a0','','',1490440335,1967868805,0,0,1490440335,1);
INSERT INTO `lovevi_ucenter_member` VALUES (32,'titi','0aa5064b03792819be9c9e08fac1f7a0','','',1490440707,1967868805,1490516775,1967868805,1490440707,1);
INSERT INTO `lovevi_ucenter_member` VALUES (33,'bbs','0aa5064b03792819be9c9e08fac1f7a0','','',1490516881,1967868805,0,0,1490516881,1);
INSERT INTO `lovevi_ucenter_member` VALUES (34,'dog','0aa5064b03792819be9c9e08fac1f7a0','','',1490517072,1967868805,1491139464,1967869860,1490517072,1);
INSERT INTO `lovevi_ucenter_member` VALUES (35,'ABC','3ebef0f5b4af37beb54960a13535c03e','','',1490940879,1967868805,0,0,1490940879,1);
/*!40000 ALTER TABLE `lovevi_ucenter_member` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_ucenter_setting
#

DROP TABLE IF EXISTS `lovevi_ucenter_setting`;
CREATE TABLE `lovevi_ucenter_setting` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '设置ID',
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '配置类型（1-用户配置）',
  `value` text NOT NULL COMMENT '配置数据',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='设置表';

#
# Dumping data for table lovevi_ucenter_setting
#

LOCK TABLES `lovevi_ucenter_setting` WRITE;
/*!40000 ALTER TABLE `lovevi_ucenter_setting` DISABLE KEYS */;
/*!40000 ALTER TABLE `lovevi_ucenter_setting` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_url
#

DROP TABLE IF EXISTS `lovevi_url`;
CREATE TABLE `lovevi_url` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '链接唯一标识',
  `url` char(255) NOT NULL DEFAULT '' COMMENT '链接地址',
  `short` char(100) NOT NULL DEFAULT '' COMMENT '短网址',
  `status` tinyint(2) NOT NULL DEFAULT '2' COMMENT '状态',
  `create_time` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_url` (`url`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='链接表';

#
# Dumping data for table lovevi_url
#

LOCK TABLES `lovevi_url` WRITE;
/*!40000 ALTER TABLE `lovevi_url` DISABLE KEYS */;
/*!40000 ALTER TABLE `lovevi_url` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_userdata
#

DROP TABLE IF EXISTS `lovevi_userdata`;
CREATE TABLE `lovevi_userdata` (
  `uid` int(10) unsigned NOT NULL COMMENT '用户id',
  `type` tinyint(3) unsigned NOT NULL COMMENT '类型标识',
  `target_id` int(10) unsigned NOT NULL COMMENT '目标id',
  UNIQUE KEY `uid` (`uid`,`type`,`target_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Dumping data for table lovevi_userdata
#

LOCK TABLES `lovevi_userdata` WRITE;
/*!40000 ALTER TABLE `lovevi_userdata` DISABLE KEYS */;
/*!40000 ALTER TABLE `lovevi_userdata` ENABLE KEYS */;
UNLOCK TABLES;

#
# Source for table lovevi_users
#

DROP TABLE IF EXISTS `lovevi_users`;
CREATE TABLE `lovevi_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user` varchar(255) NOT NULL COMMENT '用户',
  `pwd` varchar(255) NOT NULL COMMENT '密码',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '真实姓名',
  `bankcode` int(10) unsigned NOT NULL COMMENT '银行卡',
  `pic` varchar(255) NOT NULL DEFAULT '/Public/Home/images/user/default.png' COMMENT '银行名称',
  `paypwd` varchar(255) NOT NULL COMMENT '资金密码',
  `money` int(10) unsigned NOT NULL DEFAULT '0' COMMENT '金额',
  `pcode` varchar(14) DEFAULT NULL,
  `dnum` int(10) unsigned NOT NULL COMMENT '代理等级',
  `ymoney` float(10,2) unsigned NOT NULL DEFAULT '0.00' COMMENT '佣',
  `tel` varchar(15) NOT NULL DEFAULT '0' COMMENT '手机',
  `time` int(10) unsigned NOT NULL COMMENT '时间',
  `isdl` int(11) DEFAULT '0' COMMENT '是否代理',
  `gbi` float(10,2) unsigned DEFAULT '0.00' COMMENT '入股比例',
  `maxbet` int(11) DEFAULT '500',
  `minbet` int(11) DEFAULT '10',
  `did` int(11) DEFAULT '0',
  `qianming` varchar(255) DEFAULT '这个人很懒，没有签名' COMMENT '签名',
  `email` varchar(255) DEFAULT NULL,
  `sex` int(11) DEFAULT '1',
  `state` int(11) DEFAULT '0' COMMENT '1审核通过',
  `dymoney` float(10,2) DEFAULT '0.00' COMMENT '给上家产生的佣金',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2171 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

#
# Dumping data for table lovevi_users
#

LOCK TABLES `lovevi_users` WRITE;
/*!40000 ALTER TABLE `lovevi_users` DISABLE KEYS */;
INSERT INTO `lovevi_users` VALUES (179,'test','123','七彩跑道',0,'http://wx.qlogo.cn/mmopen/hfwPgNL1X0j95rrG7rdgeIUOLtNprS8ibNRERJuNiagibtzNs9skLFnkMXKfibpAoEmAq69VhW8wy5cNgXSh2LHZkIdA6RImYgRn/0','',50,'123',0,0,'0',0,0,0,500,10,2170,'这个人很懒，没有签名',NULL,1,1,0);
INSERT INTO `lovevi_users` VALUES (2170,'onewA1vRmWMHiuHVBOKIdY_FTK5M','','晓晨',0,'http://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTK32DdzqHrZNGztKenTibia1x7pdYQVWOVKTjF3msUbMXOcS0KjlduGc7hKeaKmibQkFS5Gbtb1aeazw/0','',1080,NULL,0,0,'0',0,0,0,500,10,1,'这个人很懒，没有签名',NULL,1,0,2.4);
/*!40000 ALTER TABLE `lovevi_users` ENABLE KEYS */;
UNLOCK TABLES;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
