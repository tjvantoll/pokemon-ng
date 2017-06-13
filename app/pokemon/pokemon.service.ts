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
}
