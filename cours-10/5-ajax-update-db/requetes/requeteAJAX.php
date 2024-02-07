<?php 
    require_once('fonctionsDB.php');

    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    //var_dump($data);
    
    if (isset($data['nomEquipe'], $data['idEquipe'])) {

        $nom_equipe = htmlspecialchars($data['nomEquipe']);
        $id_equipe = htmlspecialchars($data['idEquipe']);
        
        changeNomEquipe($nom_equipe, $id_equipe);
    
    } else {
		echo 'Erreur query string';
	}
?>