<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 10 | Suppression rangée de la db (DELETE) | API XMLHttpRequest</title>
	<meta name="description" content="Cours 10 du cours 582-31F-MA Programmation d'interface Web 2 : API XMLHttpRequest">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 10 - Suppression rangée de la db (DELETE)</h1>
	</header>

	<main>

		<?php
			// Générer les équipes dynamiquement
			require_once("requetes/fonctionsDB.php");
			$equipes = getAllEquipes();

			if ($equipes) : ?>
				<div data-js-equipes>
			<?php
			// Récupération des résultats sous forme de tableau associatif
			while ($equipe = mysqli_fetch_assoc($equipes)) {
				echo   '<form data-js-equipe="' . $equipe['id'] . '">
							<label for="' . $equipe['id'] . '">' . $equipe['nom'] . '</label>
							<button data-js-btn>Supprimer</button>
						</form>';
			} ?>
				<div>
		<?php 
			endif;
		?>

	</main>
</body>
</html>