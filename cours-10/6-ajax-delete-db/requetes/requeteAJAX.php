<?php 
    require_once('fonctionsDB.php');

    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    //var_dump($data);
    
    if (isset($data['idEquipe'])) {

        $id_equipe = htmlspecialchars($data['idEquipe']);

        // Si l'id existe
        if (mysqli_num_rows(verifieId($id_equipe)) > 0) {
            supprimeEquipe($id_equipe);
        } else {
            echo 'Erreur id';
        }
        
    } else {
		echo 'Erreur query string';
	}
?>