import { Component, OnInit } from "@angular/core";
import { ObservableArray } from "data/observable-array";
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
  <StackLayout>
    <RadCartesianChart height="400">
      <CategoricalAxis tkCartesianVerticalAxis></CategoricalAxis>
      <LinearAxis tkCartesianHorizontalAxis></LinearAxis>
      <BarSeries tkCartesianSeries [items]="typeData" categoryProperty="type" valueProperty="count"></BarSeries>
    </RadCartesianChart>
  </StackLayout>

  <!--
  <FlexboxLayout class="container">
    <Image *ngFor="let pokemon of pokemonList"
      [src]="pokemon.sprite"
      (tap)="onTap($event, pokemon)"
      ></Image>
  </FlexboxLayout>
  -->
</ScrollView>

`
})
export class AppComponent implements OnInit {
  pokemonList;

  get typeData(): Array<Object> {
    return [
      { type:"Poison", count: 59 }, { type:"Grass", count: 84 }, { type: "Fire",count: 56 },
      { type: "Flying", count: 90 }, { type:"Water", count: 118 },{ type: "Bug", count: 66 },
      { type: "Normal", count: 97 }, { type: "Electric", count: 42 }, { type: "Ground", count: 60 },
      { type: "Fairy", count: 35 }, { type:"Fighting", count: 44 }, { type: "Psychic", count: 74 },
      { type: "Rock", count: 55 }, { type:"Steel", count: 41 }, { type: "Ice", count: 33 },
      { type: "Ghost", count: 35 }, { type: "Dragon", count: 38}, { type:"Dark", count: 44 }
    ];
  }

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
