<?php 
    require_once('fonctionsDB.php');

    $request_payload = file_get_contents('php://input');
    $data = json_decode($request_payload, true);

    //var_dump($request_payload);
    //var_dump($data);
    //var_dump($data['usager']);
    //var_dump($data['password']);
    //var_dump($data['nom']);
    //var_dump($data['prenom']);
    
    if (isset($data['usager'], $data['password'], $data['nom'], $data['prenom'])) {
        if ($data['usager'] != "" && $data['password'] != "" && $data['nom'] != "" && $data['prenom'] != "") {
        
            /**
             * Supprime les balises et le HTML, 
             * encode les guillemets doubles et simples, 
             * supprime ou encode éventuellement les caractères spéciaux.
             */
            $usager = htmlspecialchars($data['usager']);
            $password = htmlspecialchars($data['password']);
            $nom = htmlspecialchars($data['nom']);
            $prenom = htmlspecialchars($data['prenom']);
            
            echo ajouteUsager($usager, $password, $nom, $prenom);
        } else {
            echo 'Les champs ne sont pas tous saisis.';
        }
    } else {
		echo 'Erreur query string';
	}
?>