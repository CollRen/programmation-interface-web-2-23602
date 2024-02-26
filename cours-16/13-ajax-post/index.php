<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 16 | Appel AJAX jQuery - POST | jQuery et jQuery UI</title>
	<meta name="description" content="Cours 16 du cours 582-31F-MA Programmation d'interface Web 2 : Librairie externe jQuery et jQuery UI">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="../styles/styles.css">
    
	<!-- scripts -->
	<!-- jQuery CDN -->
	<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
	
    <script src="./main.js"></script>
</head>

<body>
	<header>
		<h1>Cours 16 - Appel AJAX jQuery - POST</h1>
	</header>

	<main>

		<h3>Ajouter un usager (POST)</h3>

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
		</div>

	</main>
</body>
</html>