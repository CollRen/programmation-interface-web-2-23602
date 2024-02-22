<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 11 | Ajout à la db (POST) | API Fetch</title>
	<meta name="description" content="Exercice cours 11 du cours 582-31F-MA Programmation d'interface Web 2 : API Fetch">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
    <script src="./main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 11 - Ajout à la db (POST)</h1>
	</header>

	<main>

		<h3>Ajouter un usager</h3>

		<div data-js-form-wrapper>
			<form data-js-form>

				<div>
					<label for="usager">Nom d'usager :</label>
					<input type="text" name="usager" id="usager"/>
				</div>

				<div>
					<label for="mot-de-passe">Mot de passe : </label>
					<input type="text" name="mot-de-passe" id="mot-de-passe"/>
				</div>
				
				<div>
					<label for="nom">Nom :</label>
					<input type="text" name="nom" id="nom"/>
				</div>
				
				<div>
					<label for="prenom">Prénom: </label>
					<input type="text" name="prenom" id="prenom"/>
				</div>
				
				<div>
					<button data-js-btn>Soumettre</button>
				</div>

			</form>

			<div data-js-nouvel-usager></div>
		</div>

	</main>
</body>
</html>