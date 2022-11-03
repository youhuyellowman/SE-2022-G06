/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2022/11/3 23:26:11                           */
/*==============================================================*/


drop table if exists admin;

drop table if exists record;

drop table if exists user;

/*==============================================================*/
/* Table: admin                                                 */
/*==============================================================*/
create table admin
(
   account              varchar(255) not null,
   pwd                  varchar(255),
   right_user           bool not null,
   right_record         bool not null,
   primary key (account)
);

/*==============================================================*/
/* Table: record                                                */
/*==============================================================*/
create table record
(
   id                   char(10) not null,
   account              varchar(255),
   first                char(10) not null,
   second               char(10) not null,
   third                char(10) not null,
   avg                  char(10) not null,
   date                 datetime not null,
   primary key (id)
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   account              varchar(255) not null,
   phone                varchar(11) not null,
   user_name            varchar(255) not null,
   headimage            longblob,
   date                 datetime,
   history_score        double,
   last_score           double,
   test_count           int not null,
   primary key (account)
);

alter table record add constraint FK_Relationship_1 foreign key (account)
      references user (account) on delete restrict on update restrict;

