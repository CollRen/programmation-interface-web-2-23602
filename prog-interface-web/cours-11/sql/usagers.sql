CREATE TABLE usagers (
	id int NOT NULL AUTO_INCREMENT,
	usager varchar(50) NOT NULL,
	password varchar(50) NOT NULL,
	nom varchar(50),
	prenom varchar(50),
	PRIMARY KEY (id)
);

INSERT into usagers(usager, password, nom, prenom) VALUES
				(12345, 12345, "Tom", "Tucker"),
				(54321, 54321, "Tricia", "Takanawa");