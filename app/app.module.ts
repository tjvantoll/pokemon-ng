import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { PokemonService } from "./pokemon/pokemon.service";

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    PokemonService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
