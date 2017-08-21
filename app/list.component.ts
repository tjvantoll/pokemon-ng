import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { PokemonService } from "./pokemon/pokemon.service";

@Component({
  selector: "ns-app",
  styleUrls: ["list.css"],
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

export class ListComponent implements OnInit {
  pokemonList;

  constructor(private router: RouterExtensions, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.list().then((data) => {
      this.pokemonList = data;
    });
  }

  onTap(event, pokemon) {
    this.router.navigate(["/detail", pokemon], {
      transition: {
        name: "curlUp",
        duration: 500
      }
    });
  }
}
