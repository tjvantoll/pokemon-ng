import { Component, OnInit } from "@angular/core";
import { TNSFancyAlert, TNSFancyAlertButton } from "nativescript-fancyalert";
import { TNSTextToSpeech } from "nativescript-texttospeech";
import { TNSPlayer } from "nativescript-audio";
var explosion = require("nativescript-explosionfield");

import { PokemonService } from "./pokemon/pokemon.service";

@Component({
  selector: "ns-app",
  template: `

<ActionBar class="action-bar" title="Pokémon!"></ActionBar>
<ScrollView>
  <FlexboxLayout class="container">
    <Image *ngFor="let pokemon of pokemonList"
      [src]="pokemon.sprite"
      (tap)="onTap($event, pokemon)"
      ></Image>
  </FlexboxLayout>
</ScrollView>

`
})
export class AppComponent implements OnInit {
  pokemonList;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.list().then((data) => {
      this.pokemonList = data;
    });
  }

  onTap(event, pokemon) {
    /*
    TNSFancyAlert.showWarning("DANGER 🚨", pokemon.name + " is about to blow up", "💥", 2);

    setTimeout(() => {
      explosion.explode(event.view);
    }, 2000);
    */

    /*
    var player = new TNSPlayer();
    player.initFromFile({
      audioFile: "~/sounds/woop.mp3",
      loop: false
    });
    player.play();
    */

    /*
    var TTS = new TNSTextToSpeech();
    TTS.speak({
      text: pokemon.name,
      pitch: 3.0,
      speakRate: 3.0
    });
    */
  }
}
