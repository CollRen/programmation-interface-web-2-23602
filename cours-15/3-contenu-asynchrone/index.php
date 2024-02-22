<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 15 | Contenu asynchrone | Balise template</title>
	<meta name="description" content="Cours 15 du cours 582-31F-MA Programmation d'interface Web 2 : Clone et insertion avec la balise template">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 15 - Balise template - contenu asynchone</h1>
		<select data-js-usagers>
            <option value="0" data-js-usager>Veuillez sélectionner un usager</option>
            <?php
                // Générer les options dynamiquement
                require_once('requetes/fonctionsDB.php');
                $usagers = getAllUsagers();

                // Récupération des résultats sous forme de tableau associatif
                while ($usager = mysqli_fetch_assoc($usagers)) {
                    echo '<option value="' . $usager['id'] . '">' . $usager['usager'] . '</option>';
                }
            ?>
        </select>	
	</header>

	<main>
        <template data-template-usager>
            <div data-js-usager="{{id}}">
                <p><small>Prénom : </small>{{prenom}}</p>
                <p><small>Nom : </small>{{nom}}</p>
                <p><small>Nom d'usager : </small>{{usager}}</p>
                <p><small>Mot de passe : </small>{{password}}</p>
            </div>
        </template>
    </main>
</body>
</html>