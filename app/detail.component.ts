import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "ns-app",
  template: `

<ActionBar class="action-bar" [title]="pokemon.name"></ActionBar>
`
})

export class DetailComponent implements OnInit {
  pokemon;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach(params => {
      this.pokemon = params;
    })
  }
}
