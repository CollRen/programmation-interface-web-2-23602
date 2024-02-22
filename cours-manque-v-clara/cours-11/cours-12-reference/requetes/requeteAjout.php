<?php 
    require_once('fonctionsDB.php');
    
    $request_payload = file_get_contents('php://input');
    $data_requete = json_decode($request_payload, true);

    //var_dump($request_payload);
    //var_dump($data_requete);
    
    if (isset($data_requete['prenom'], $data_requete['nomFamille'], $data_requete['numero'], $data_requete['idEquipe'])) {
        if ($data_requete['prenom'] != "" && $data_requete['nomFamille'] != "" && $data_requete['numero'] != "" && $data_requete['idEquipe'] != "") {

            $prenom = htmlspecialchars($data_requete['prenom']);
            $nom_famille = htmlspecialchars($data_requete['nomFamille']);
            $numero = htmlspecialchars($data_requete['numero']);
            $id_equipe = htmlspecialchars($data_requete['idEquipe']);

            echo ajouteJoueur($prenom, $nom_famille, $numero, $id_equipe);
        } else {
            echo 'Les champs ne sont pas tous saisis.';
        }
    } else {
		echo 'Erreur query string';
	}  
?>