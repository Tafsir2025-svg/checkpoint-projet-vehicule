// Implémentation de la classe Car qui respecte l'interface Véhicule
var Car = /** @class */ (function () {
    // Constructeur pour initialiser les propriétés de la voiture
    function Car(faire, modèle, année) {
        this.faire = faire;
        this.modèle = modèle;
        this.année = année;
    }
    // Méthode démarrer qui affiche un message dans la console
    Car.prototype.démarrer = function () {
        console.log("Le moteur de la voiture a démarré");
    };
    return Car;
}());
// Créer une instance de la classe Car
var maVoiture = new Car("Toyota", "Corolla", 2020);
// Appeler la méthode démarrer sur l'instance
maVoiture.démarrer(); // Cela va afficher "Le moteur de la voiture a démarré" dans la console
