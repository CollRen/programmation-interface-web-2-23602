<?php	
	require_once('fonctionsDB.php');

	$data = array();

	// Obtenir les équipes dans la BD
	$equipes = getAllEquipes();

	// Boucler sur les équipes obtenues
	while ($equipe = mysqli_fetch_assoc($equipes)) {
		$data[] = $equipe;
	}

	echo json_encode($data);
?>