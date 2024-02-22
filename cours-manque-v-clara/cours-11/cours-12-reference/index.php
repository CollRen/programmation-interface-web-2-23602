<!DOCTYPE html>
<html lang="fr_CA">
<head>
    <!-- meta -->
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Cours 12 | Appels fetch | API Fetch</title>
	<meta name="description" content="Exercice cours 12 du cours 582-31F-MA Programmation d'interface Web 2 : API Fetch">

	<!-- styles -->
    <link rel="stylesheet" type="text/css" href="./assets/styles/styles.css">
    
	<!-- scripts -->
    <script src="./assets/scripts/main.js" defer></script>
</head>

<body>
	<header>
		<h1>Cours 12 - Appels fetch</h1>
	</header>

	<main>

        <section class="ligue" data-js-ligue>

            <form class="ligue__form" data-js-form>

                <h3>Sélectionner une équipe</h3>

                <div>
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
                </div>

                <h3>Ajouter un joueur</h3>

                <div>
                    <label for="prenom">Prénom : </label>
                    <input type="text" id="prenom" name="prenom" value="Tom">
                </div>

                <div>
                    <label for="nom">Nom : </label>
                    <input type="text" id="nom" name="nom" value="Tucker">
                </div>

                <div>
                    <label for="numero">Numéro : </label>
                    <input type="number" id="numero" name="numero" value="44">
                </div>

                <div>
                    <button>Soumettre</button>
                </div>
            </form>
            
            <div class="ligue__joueurs" data-js-joueurs>
                <h3>Joueurs</h3>
                <ul></ul>
            </div>

        </section>
	</main>
</body>
</html>