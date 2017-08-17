//ici on utile l'objet angular

angular.module('tableau', []) 
    .controller('TableauController', function TableauController() {
        
        this.continent = [
        {cle:0, pays:'france', ville:'paris'},
        {cle:1, pays:'RDC', ville:'kinshasa'},
        {cle:2, pays:'congo', ville:'brazza'},
        {cle:3, pays:'angola', ville:'luanda'},
        {cle:4, pays:'zambie', ville:'lusaka'},
        {cle:5, pays:'tunisie', ville:'tunis'}
            
        ];

        this.supprimer = function supprimer(key) {
            this.continent.splice(key, 1);
            window.alert('voulez-vous vraiment supprimer?');
        };
    });