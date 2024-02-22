<?php

	require_once('fonctionsDB.php');
	
	if (isset($_GET['idEquipe'])) {

		$joueurs = getAllJoueursParEquipe($_GET['idEquipe']);

		// Boucler sur les joueurs obtenus
		while ($joueur = mysqli_fetch_assoc($joueurs)) { 		// mysqli_fetch_assoc => récupére les résultats sous forme de tableau associatif
			$data[] = $joueur;
		}
		
		header('Content-type: application/json; charset=utf-8');
		echo json_encode($data);								// json_encode => retourne la représentation JSON d'une valeur
			
	} else {
		echo json_encode('Erreur query string');
	}
?>