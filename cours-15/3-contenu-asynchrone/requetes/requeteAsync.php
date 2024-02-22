<?php

	// Pour accéder à la base de données
	require_once('fonctionsDB.php');


	if (isset($_GET['idUsager'])) {

		$id_usager = htmlspecialchars($_GET['idUsager']);

		// Si l'id existe
		if (mysqli_num_rows(verifieId($id_usager)) > 0) {

			// Obtenir l'usager dans la BD
			$data = mysqli_fetch_assoc(getUsager($id_usager));

		} else {
			$data = 'Cet usager n\'existe pas.';
		}
	} else {
		$data = 'Erreur query string';
	}

	header('Content-type: application/json; charset=utf-8');
	echo json_encode($data);
?>