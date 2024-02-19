<?php
	$connexion = connexionDB();
		
	/**
	 * Connection avec la base de données
	 */
	function connexionDB() {
		define('DB_HOST', 'localhost');
		define('DB_USER', 'root');
		define('DB_PASSWORD', 'root');			// MAC
		//define('DB_PASSWORD', '');			// Windows

		$laConnexion = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);
				
		if (!$laConnexion) {
			// La connexion n'a pas fonctionné
			die('Erreur de connexion à la base de données. ' . mysqli_connect_error());
		}
		
		$db = mysqli_select_db($laConnexion, 'ligue-async');

		if (!$db) {
			die ('La base de données n\'existe pas.');
		}
		
		mysqli_query($laConnexion, 'SET NAMES "utf8"');
		return $laConnexion;
	}


	/**
	 * Exécute la requête SQL
	 * Si le paramètre $insert est true, retourne l'id de la ressource ajoutée à la db
	 */
	function executeRequete($requete, $insert = false) {
		global $connexion;
		if ($insert) {
			mysqli_query($connexion, $requete);
			$resultats = $connexion->insert_id;
		} else {
			$resultats = mysqli_query($connexion, $requete);
		}
		return $resultats;
	}


	/**
	 * Retourne la liste des équipes
	 */
	function getAllEquipes() {
		return executeRequete("SELECT * FROM equipes");		
	}


	/**
	 * Retourne l'équipe reçue en paramètre
	 */
	function getEquipe($id_equipe) {
		global $connexion;
		$id_equipe = mysqli_real_escape_string($connexion, $id_equipe);

		return executeRequete("SELECT * FROM equipes WHERE id = " . $id_equipe);
	}


	/**
	 * Retourne l'id de l'équipe reçue en paramètre
	 */
	function verifieId($id_equipe) {
		global $connexion;
		$id_equipe = mysqli_real_escape_string($connexion, $id_equipe);

		return executeRequete("SELECT id FROM equipes WHERE id = " . $id_equipe);
	}


	/**
	 * Retourne la liste des joueurs de l'équipe reçue en paramètre
	 */
	function getAllJoueursParEquipe($id_equipe) {
		global $connexion;

		// La fonction mysqli_real_escape_string est utilisée pour créer une chaîne SQL légale qui peut être utilisée dans une instruction SQL, en tenant compte du jeu de caractères (charset) actuel de la connexion.
		$id_equipe = mysqli_real_escape_string($connexion, $id_equipe);

		return executeRequete("SELECT joueurs.id AS joueurId, joueurs.*, equipes.*
							   FROM joueurs
							   INNER JOIN equipes ON joueurs.idEquipe = equipes.id
							   WHERE idEquipe = " . $id_equipe);
	}
?>