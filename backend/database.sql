CREATE TABLE user (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  hashedPassword varchar(255) NOT NULL,
  userRole varchar(255) DEFAULT "traveler"
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

insert into user (name ,email, hashedPassword, userRole) values ("user1","driver@email.com", "driver", "driver");

CREATE TABLE trajet (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  startAdress varchar(255) NOT NULL,
  endAdress varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
