<?php 


require_once('fonctionsDB.php');

$request_payload = file_get_contents('php://input');
$data_request = json_decode($request_payload, true);

echo $data_request;


if (isset($_POST['usager'], $_POST['password'], $_POST['nom'], $_POST['prenom'])) {
    if ($_POST['usager'] != "" && $_POST['password'] != "" && $_POST['nom'] != "" && $_POST['prenom'] != "") {

        /**
         * Supprime les balises et le HTML, 
         * encode les guillemets doubles et simples, 
         * supprime ou encode éventuellement les caractères spéciaux.
         */
        $usager = htmlspecialchars($_POST['usager']);
        $password = htmlspecialchars($_POST['password']);
        $nom = htmlspecialchars($_POST['nom']);
        $prenom = htmlspecialchars($_POST['prenom']);

        echo ajouteUsager($usager, $password, $nom, $prenom);
    } else {
        echo 'Les champs ne sont pas tous saisis.';
    }
} else {
    echo 'Erreur query string';
}
?>