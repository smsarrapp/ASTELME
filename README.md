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
| Polices EB Garamond (titres) et Public Sans (texte), hébergées avec le site | `assets/fonts/` |

Voir le site en local : double-cliquer sur `index.html`.

## Règles de design

Le site suit le skill `frontend-design` (dans `.claude/skills/`). Pour tout ajout :

- pas de sur-titre en capitales au-dessus des titres, pas de mot isolé en italique ou en couleur dans un titre ;
- pas de numéros 01 / 02 / 03, sauf pour une vraie suite d’étapes (la méthode) ;
- pas de flèche → dans les boutons et liens, pas de séparateur « · » ;
- une seule animation automatique : l’apparition du premier écran ;
- espace fine insécable avant « ? : ; ! ».

## Ce que le site n'intègre pas

Aucun outil de statistiques, aucun cookie, aucun traceur, aucun formulaire, aucune police ou ressource chargée depuis un service tiers. Seul l'hébergeur (Cloudflare) traite des journaux techniques de connexion. Ne pas activer Cloudflare Web Analytics sans mettre à jour `confidentialite.html`. Si un outil est ajouté plus tard, mettre à jour `confidentialite.html`.

## Avant publication (accord de N'goné obligatoire)

- Arrêter les durées de conservation dans `confidentialite.html`, puis retirer la balise `noindex`.
- Vérifier le téléphone de l'hébergeur dans `mentions-legales.html`.
- Ajouter le lien LinkedIn quand l'URL exacte est confirmée.
- Faire valider l'aperçu complet.

## Mise en ligne sur Cloudflare Pages (gratuit)

1. Pousser ce dossier dans un dépôt GitHub (privé ou public).
2. Cloudflare : **Workers & Pages → Create → Pages → Connect to Git**, choisir le dépôt.
3. Réglages de build : **Framework preset : None**, **Build command : vide**, **Build output directory : `/`**.
4. Aperçu en ligne après une minute : `https://<projet>.pages.dev`.

Coût : 0 €. Le domaine astelme.fr reste payé chez OVHcloud.

## Brancher astelme.fr (domaine chez OVHcloud)

À faire uniquement avec l'accord de N'goné.

1. Cloudflare Pages : **Custom domains → Set up a custom domain** → `www.astelme.fr`, puis `astelme.fr`.
2. Deux options :
   - garder les DNS chez OVHcloud : ajouter le `CNAME` `www` → `<projet>.pages.dev.` indiqué par Cloudflare ;
   - ou transférer la gestion DNS à Cloudflare (changement des serveurs DNS chez OVHcloud), nécessaire pour le domaine sans www.
3. Dans les deux cas, recopier **à l’identique** les enregistrements `MX`, `SPF` (TXT), `DKIM` et `autodiscover`, sinon la messagerie contact@astelme.fr cesse de fonctionner.
4. Le certificat HTTPS est émis automatiquement par Cloudflare.

## Mettre à jour le site

Modifier le fichier concerné sur github.com (icône crayon), puis « Commit changes » : Cloudflare republie le site en une à deux minutes.
