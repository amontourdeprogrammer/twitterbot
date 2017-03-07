twitter bot qui envoie des tweets pour prévenir de la clôture des expositions parisiennes

#TO DO
* request depuis https://api.paris.fr
* obtention d'un fichier json dans lequel il va falloir dire au script les valeurs à choisir
	1. dans toutes les champs dateRealEnd, trouver un dateRealEnd = aujourd'hui + 21 jours > cela détermine l'évènement sur lequel on va twitter
	2. dans l'évènement, le script va maintenant chercher ces valeurs : nom de l'expo, lieu, domaine, url (pas encore décidé si url raccourcie ou url longue qui sera raccourcie pour Twitter)
* le script réuni ces informations et les met dans un tweet (à voir comment on personalise de tweet pour le rendre plus "humain")
* le tweet est publié 🎉