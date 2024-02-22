<?php
require_once("fonctionsDB.php");

$request_payload = file_get_contents("php://input");
$data_requete = json_decode($request_payload, true);

if (isset($data_requete['usager'], $data_requete['password'], $data_requete['nom'], $data_requete['prenom'])) {
    if ($data_requete['usager'] != "" && $data_requete['password'] != "" && $data_requete['nom'] != "" && $data_requete['prenom'] != "") {

        /**
         * Supprime les balises et le HTML, 
         * encode les guillemets doubles et simples, 
         * supprime ou encode éventuellement les caractères spéciaux.
         */
        $usager = htmlspecialchars($data_requete['usager']);
        $password = htmlspecialchars($data_requete['password']);
        $nom = htmlspecialchars($data_requete['nom']);
        $prenom = htmlspecialchars($data_requete['prenom']);

        echo ajouteUsager($usager, $password, $nom, $prenom);
    } else {
        echo 'Les champs ne sont pas tous saisis.';
    }
} else {
    echo 'Erreur query string';
}
