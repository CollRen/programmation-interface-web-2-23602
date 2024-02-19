<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 13 | hashbang (#!) | Route et routeur</title>
	<meta name="description" content="Cours 13 du cours 582-31F-MA Programmation d'interface Web 2 : Route et routeur">

	<!-- styles -->
	<link rel="stylesheet" type="text/css" href="../styles/styles.css">

    <!-- scripts -->
    <script type="module" src="./scripts/main.js" defer></script>
</head>

<body data-js-component="Router">
    <noscript><p>Veuillez activer votre JavaScript.</p></noscript>
	<header>
		<h1><a href="#!">Cours 13 - hashbang (#!), data dynamique</a></h1>
        <select data-js-equipes>
            <option value="0">Veuillez sélectionner une équipe</option>
            <?php
                // Générer les options dynamiquement
                require_once('requetes/fonctionsDB.php');
                $equipes = getAllEquipes();

                // Récupération des résultats sous forme de tableau associatif
                while ($equipe = mysqli_fetch_assoc($equipes)) { 
                    echo '<option value="' . $equipe['id'] . '">' . $equipe['nom'] . ' de ' . $equipe['quartier'] . '</option>';
                }
            ?>
        </select>
	</header>

	<main></main>
</body>
</html>