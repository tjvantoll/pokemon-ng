import { Injectable } from "@angular/core";
import { knownFolders } from "file-system";

@Injectable()
export class PokemonService {
  list() {
    var jsonFile = knownFolders.currentApp().getFile("pokemon/pokemon.json");
    return new Promise(function(resolve, reject) {
        jsonFile.readText()
          .then(function(content) {
            var data = JSON.parse(content);
            data.forEach(function(pokemon) {
              pokemon.sprite = "~/img/" + pokemon.number + ".png";
              pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
            });
            resolve(data);
          }).catch(function(err) {
            reject(err);
          });
    });
  }

  types() {
    return [
      { type:"Poison", count: 59 }, { type:"Grass", count: 84 }, { type: "Fire",count: 56 },
      { type: "Flying", count: 90 }, { type:"Water", count: 118 },{ type: "Bug", count: 66 },
      { type: "Normal", count: 97 }, { type: "Electric", count: 42 }, { type: "Ground", count: 60 },
      { type: "Fairy", count: 35 }, { type:"Fighting", count: 44 }, { type: "Psychic", count: 74 },
      { type: "Rock", count: 55 }, { type:"Steel", count: 41 }, { type: "Ice", count: 33 },
      { type: "Ghost", count: 35 }, { type: "Dragon", count: 38}, { type:"Dark", count: 44 }
    ];
  }
}
