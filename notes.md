## fl2

```
import { PokemonService } from "./pokemon/pokemon.service";
```

## fl3

```
export class AppComponent implements OnInit {
  pokemonList;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemonService.list().then((data) => {
      this.pokemonList = data;
    });
  }
}
```

## fl4

```
<ScrollView>
  <FlexboxLayout class="container">
    <Image *ngFor="let pokemon of pokemonList"
      [src]="pokemon.sprite"
      ></Image>
  </FlexboxLayout>
</ScrollView>
```

## fl5

```
.container {
  flex-wrap: wrap;
  justify-content: space-around;
}
```

## fl6

```
import { TNSTextToSpeech } from "nativescript-texttospeech";
```

## fl7

```
(tap)="onTap($event, pokemon)"
```

## fl8

```
onTap(event, pokemon) {
  var TTS = new TNSTextToSpeech();
  TTS.speak({
    text: pokemon.name
  });
}
```


```
pitch: 2.0,
speakRate: 0.5
```

## fl9

```
import { TNSFancyAlert } from "nativescript-fancyalert";
```

## fl10

```
TNSFancyAlert.showWarning("DANGER 🚨", pokemon.name + " is about to blow up", "💥");
```

## fl11

```
import { TNSPlayer } from "nativescript-audio";
```

## fl12

```
this.player = new TNSPlayer();
this.player.initFromFile({
  audioFile: "~/sounds/woop.mp3",
  loop: false
});
```

```
player;
```

```
this.player.play();
```

## fl13

```
var explosion = require("nativescript-explosionfield");
```

## fl14

```
setTimeout(() => {
  explosion.explode(event.view);
}, 2000);
```

## fl15

```
<RadCartesianChart height="400">
  <CategoricalAxis tkCartesianVerticalAxis></CategoricalAxis>
  <LinearAxis tkCartesianHorizontalAxis></LinearAxis>
  <BarSeries tkCartesianSeries [items]="typeData" categoryProperty="type" valueProperty="count"></BarSeries>
</RadCartesianChart>
```

## fl16

```
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
```