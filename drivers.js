// Charger et afficher les pilotes
fetch('pilotes.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error("Impossible de charger le fichier pilotes.txt");
        }
        return response.text();
    })
    .then(data => {
        const lignes = data.trim().split('\n');
        const tableau = document.getElementById('tableau-pilotes');

        lignes.forEach(ligne => {
            // Séparer les colonnes par "|"
            const [nom, ecurie, points, palmares, photoUrl] = ligne.split('|').map(colonne => colonne.trim());

            // Vérifier que chaque colonne est présente pour éviter les erreurs
            if (!nom || !ecurie || !points || !palmares || !photoUrl) return;

            // Créer une ligne de tableau
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><img src="${photoUrl}" alt="${nom}" class="pilote-photo"></td>
                <td>${nom}</td>
                <td>${ecurie}</td>
                <td>${points}</td>
                <td>${palmares}</td>
            `;
            tableau.appendChild(tr);
        });
    })
    .catch(error => {
        console.error("Erreur lors du chargement : ", error);
    });
