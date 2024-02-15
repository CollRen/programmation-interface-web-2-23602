<?php
	require_once('fonctionsDB.php');

	$request_payload = file_get_contents('php://input');
    $data_requete = json_decode($request_payload, true);
		
	if (isset($data_requete['idEquipe'])) {

		$joueurs = getAllJoueursParEquipe($data_requete['idEquipe']);

		// Boucler sur les joueurs obtenus
		while ($joueur = mysqli_fetch_assoc($joueurs)) { 		// mysqli_fetch_assoc => récupére les résultats sous forme de tableau associatif
			$data_reponse[] = $joueur;
		}
		
		header('Content-type: application/json; charset=utf-8');
		echo json_encode($data_reponse);						// json_encode => retourne la représentation JSON d'une valeur
			
	} else {
		echo 'Erreur query string';
	}
?>