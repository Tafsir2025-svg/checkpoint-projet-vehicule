// Définir l'interface Vehicule (sans accent)
interface véhicule {
  faire: string;  // Fabricant du véhicule
  modèle: string; // Modèle du véhicule
  année: number;  // Année du véhicule

  // Méthode démarrer qui affiche un message dans la console
  démarrer(): void;
}

// Implémentation de la classe Car qui respecte l'interface Vehicule
class Car implements véhicule {
  faire: string;    // Le fabricant de la voiture
  modèle: string;   // Le modèle de la voiture
  année: number;    // L'année du modèle

  // Constructeur pour initialiser les propriétés de la voiture
  constructor(faire: string, modèle: string, année: number) {
    this.faire = faire;
    this.modèle = modèle;
    this.année = année;
  }

  // Méthode démarrer qui affiche un message dans la console
  démarrer(): void {
    console.log("Le moteur de la voiture a démarré");
  }
}

// Créer une instance de la classe Car
const maVoiture = new Car("Toyota", "Corolla", 2020);

// Appeler la méthode démarrer sur l'instance
maVoiture.démarrer();  // Cela va afficher "Le moteur de la voiture a démarré" dans la console
