create database egg_article;

use egg_article;

create table article(
  id int(10) not null auto_increment,
  img text default null comment '缩略图',
  title varchar(80) default null comment '文章标题',
  summary varchar(300) default null comment '文章简介',
  content text default null comment '文章内容',
  createTime timestamp default null comment '发布时间',
  primary key(id)
)engine=InnoDB AUTO_INCREMENT=1 comment '文章表';

insert into article(img,title,summary,content,createTime)
values('图片','测试数据库','怎么创建表','创建表格的具体内容','2019-08-10 10:20:03');