// Charger les écuries depuis le fichier .txt
fetch('ecuries.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error("Impossible de charger le fichier des écuries.");
        }
        return response.text();
    })
    .then(data => {
        const lignes = data.trim().split('\n');
        const tableBody = document.getElementById('teams-table-body');

        lignes.forEach(ligne => {
            // Séparer les colonnes par le caractère "|"
            const [nom, pays, description, imageUrl] = ligne.split('|');

            // Créer une nouvelle ligne HTML pour le tableau
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${nom}</td>
                <td>${pays}</td>
                <td>${description}</td>
                <td><img src="${imageUrl}" alt="${nom}" style="width: 300px; height: auto;"></td>
            `;

            // Ajouter la ligne au tableau
            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Erreur : ", error);
    });
