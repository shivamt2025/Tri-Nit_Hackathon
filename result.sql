SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE result (
  semail varchar(255) PRIMARY KEY,
  testid varchar(255),
  answers text NOT NULL,
  marks int(11) DEFAULT NULL,
  year int(11) DEFAULT NULL,
  rollno varchar(255) DEFAULT NULL,
  FOREIGN KEY (testid) REFERENCES test(testid) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
--