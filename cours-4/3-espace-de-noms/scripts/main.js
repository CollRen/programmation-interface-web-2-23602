(function(monEspaceDeNoms) {

    /**
     * Récupère les objets stockés dans l'objet monEspaceDeNoms
     */

    //console.log(monEspaceDeNoms);

    let Personne = monEspaceDeNoms.Personne,
        Etudiant = monEspaceDeNoms.Etudiant,
        Professeur = monEspaceDeNoms.Professeur;


    /*
    * Instances de Personne
    */

    let personne1 = new Personne('Tom', 'Tucker'),
        personne2 = new Personne('Tricia', 'Takanawa'); 

    console.log(personne1.sePresente());
    personne1.setNom('Peter');
    personne1.setPrenom('Griffin');
    console.log(personne1.sePresente());
    console.log(personne2.sePresente());
        

    /*
    * Instances de Etudiant
    */

    let etudiant1 = new Etudiant('Meg', 'Griffin');
        etudiant2 = new Etudiant('Chris', 'Griffin');

    console.log(etudiant1.sePresente());
    etudiant1.setPrenom('Megan');
    etudiant1.setNom('Harvey Oswald Griffin');
    console.log(etudiant1.sePresente());
    etudiant1.ajouteCours('Chimie');
    etudiant1.ajouteCours('Math');
    etudiant1.ajouteCours('Français');
    etudiant1.ajouteCours('Anglais');
    etudiant1.ajouteCours('Philosophie');			
    console.log(etudiant1.afficheCours());
    
    console.log(etudiant2.sePresente());
    etudiant2.ajouteCours('WordPress');
    etudiant2.ajouteCours('JavaScript');			
    console.log(etudiant2.afficheCours());


    /*
    * Instances de Professeur
    */

    let professeur1 = new Professeur('Simon', 'Bouchard');
        professeur2 = new Professeur('Guillaume', 'Harvey');
        
    console.log(professeur1.sePresente());
    professeur1.setNom('C-Bouchard');
    console.log(professeur1.sePresente());
    professeur1.ajouteCours('Introduction CMS');
    professeur1.ajouteCours('Programmation d\'interface 2');			
    console.log(professeur1.afficheCours());
    professeur1.setHoraire('Introduction CMS : mercredi 12h');
    professeur1.setHoraire('Programmation d\'interface 2 : jeudi 9h');
    console.log(professeur1.afficheHoraire());
    professeur1.setCourriel('scotebouchard@cmaisonneuve.qc.ca');
    console.log(professeur1.afficheCourriel());

    console.log(professeur2.sePresente());
    professeur2.ajouteCours('PHP I');
    professeur2.ajouteCours('PHP II');
    professeur2.ajouteCours('PHP III');
    console.log(professeur2.afficheCours());
    professeur2.setHoraire('PHP I : lundi 9h, jeudi 13h');
    professeur2.setHoraire('PHP II : mardi 9h, vendredri 9h');
    professeur2.setHoraire('PHP III : lundi 13h, vendredri 13h');
    console.log(professeur2.afficheHoraire());
    professeur2.setCourriel('gharvey@cmaisonneuve.qc.ca');
    console.log(professeur2.afficheCourriel());

})(monEspaceDeNoms);