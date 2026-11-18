# Site vitrine ASTELME

Site statique (HTML, CSS, JavaScript), sans installation, sans compilation, sans service externe.

## Fichiers

| Quoi | Où |
| --- | --- |
| Page d'accueil (textes, tarifs, FAQ, coordonnées) | `index.html` |
| Mentions légales | `mentions-legales.html` |
| Confidentialité | `confidentialite.html` |
| Couleurs (charte) et polices | variables en haut de `assets/css/style.css` |
| Logo, bannière | `assets/img/` |
| Polices EB Garamond et Inter (hébergées avec le site) | `assets/fonts/` |

Voir le site en local : double-cliquer sur `index.html`.

Un tarif apparaît à plusieurs endroits (carte de l'offre, conditions, FAQ) : les mettre tous à jour en même temps.

## Ce que le site n'intègre pas

Aucun outil de statistiques, aucun cookie, aucun traceur, aucun formulaire, aucune police ou ressource chargée depuis un service tiers. Seul l'hébergeur (GitHub) enregistre des journaux techniques de connexion. Si un outil est ajouté plus tard, mettre à jour `confidentialite.html`.

## Avant publication (accord de N'goné obligatoire)

- Arrêter les durées de conservation dans `confidentialite.html`, puis retirer la balise `noindex`.
- Vérifier le téléphone de l'hébergeur dans `mentions-legales.html`.
- Ajouter le lien LinkedIn quand l'URL exacte est confirmée.
- Faire valider l'aperçu complet.

## Mise en ligne sur GitHub Pages (gratuit)

1. Dans le compte GitHub d'ASTELME, créer un dépôt **public** (par exemple `astelme`).
2. Y envoyer tout le contenu de ce dossier (« Add file » → « Upload files »), y compris le fichier `.nojekyll`.
3. **Settings → Pages → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`.
4. Aperçu en ligne après une à deux minutes : `https://<compte>.github.io/astelme/`.

Coût : 0 €. L'hébergement GitHub Pages est gratuit pour un dépôt public. Le domaine astelme.fr reste payé chez OVHcloud comme aujourd'hui.

## Brancher astelme.fr (domaine chez OVHcloud)

À faire uniquement avec l'accord de N'goné.

1. GitHub : **Settings → Pages → Custom domain** → `www.astelme.fr`.
2. OVHcloud, zone DNS d'astelme.fr :
   - `CNAME` : `www` → `<compte>.github.io.`
   - pour `astelme.fr` sans www : les enregistrements `A` indiqués dans la documentation GitHub Pages (« Managing a custom domain »).
3. Ne modifier **que** ces lignes. Ne pas toucher aux enregistrements `MX`, `SPF` (TXT), `DKIM` ni `autodiscover`, sinon la messagerie contact@astelme.fr cesse de fonctionner.
4. Une fois le certificat émis, cocher **Enforce HTTPS**.

## Mettre à jour le site

Modifier le fichier concerné sur github.com (icône crayon), puis « Commit changes » : le site se met à jour en une à deux minutes.
