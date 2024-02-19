<?php
	// Pour accéder à la base de données
	require_once('fonctionsDB.php');


	if (isset($_GET['idEquipe'])) {

		$id_equipe = htmlspecialchars($_GET['idEquipe']);

		// Si l'id existe
		if (mysqli_num_rows(verifieId($id_equipe)) > 0) {

			$data = array();

			// Obtenir les équipes dans la BD
			$joueurs = getAllJoueursParEquipe($id_equipe);

			if (mysqli_num_rows($joueurs) > 0) {
				// Récupérer la ligne suivante d'un ensemble de résultats sous forme de tableau associatif
				while ($joueur = mysqli_fetch_assoc($joueurs)) { 
					$data[] = $joueur;
				}
			} else {
				$equipe = getEquipe($id_equipe);
				while ($info = mysqli_fetch_assoc($equipe)) { 
					$data[] = $info;
				}
				$data[] = 'Cette équipe n\'a aucun joueur.';
			}
		} else {
			$data = 'Cette équipe n\'existe pas.';
		}
	} else {
		$data = 'Erreur query string';
	}

	header('Content-type: application/json; charset=utf-8');
	echo json_encode($data);
?>