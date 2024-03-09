SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";



CREATE TABLE IF NOT EXISTS blogg (

   
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- Add your blog columns here



    
    name VARCHAR(255),
    college VARCHAR(255),
    course VARCHAR(255),
    blo VARCHAR(255),
    date DATE,
    time TIME,
    rate INT,
    count INT,
    email VARCHAR(255),
    image VARCHAR(255)






) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--