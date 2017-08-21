import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import * as SocialShare from "nativescript-social-share";

@Component({
  selector: "ns-app",
  template: `

<ActionBar class="action-bar" [title]="pokemon.name">
  <ActionItem text="Share" (tap)="share(event, pokemon)" android.systemIcon="ic_menu_share_holo_dark" ios.systemIcon="9" ios.position="right"></ActionItem>
</ActionBar>

<FlexboxLayout justifyContent="center">
  <Image [src]="pokemon.sprite"></Image>
</FlexboxLayout>
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

  share(event, pokemon) {
    SocialShare.shareImage(pokemon.sprite);
  }
}
