<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 11 | Récupérer data de la db (GET) | API Fetch</title>
	<meta name="description" content="Exercice cours 11 du cours 582-31F-MA Programmation d'interface Web 2 : API Fetch">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 11 - Récupérer data de la db (GET)</h1>
	</header>
	
    <main>

		<select data-js-select-equipes>
			<option value="0">Sélectionnez une équipe</option>
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
		
		<div data-js-joueurs></div>
		
	</main>
</body>
</html>