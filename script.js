// Fonction pour basculer la visibilité du menu
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');

    // Basculer la classe 'active' pour afficher/masquer le menu
    navbar.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Ajouter un gestionnaire d'événements pour le hamburger
document.querySelector('.hamburger').addEventListener('click', toggleMenu);
