"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var explosion = require("nativescript-explosionfield");
var pokemon_service_1 = require("./pokemon/pokemon.service");
var AppComponent = (function () {
    function AppComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
    Object.defineProperty(AppComponent.prototype, "typeData", {
        get: function () {
            return [
                { type: "Poison", count: 59 }, { type: "Grass", count: 84 }, { type: "Fire", count: 56 },
                { type: "Flying", count: 90 }, { type: "Water", count: 118 }, { type: "Bug", count: 66 },
                { type: "Normal", count: 97 }, { type: "Electric", count: 42 }, { type: "Ground", count: 60 },
                { type: "Fairy", count: 35 }, { type: "Fighting", count: 44 }, { type: "Psychic", count: 74 },
                { type: "Rock", count: 55 }, { type: "Steel", count: 41 }, { type: "Ice", count: 33 },
                { type: "Ghost", count: 35 }, { type: "Dragon", count: 38 }, { type: "Dark", count: 44 }
            ];
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.list().then(function (data) {
            _this.pokemonList = data;
        });
    };
    AppComponent.prototype.onTap = function (event, pokemon) {
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
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        template: "\n\n<ActionBar class=\"action-bar\" title=\"Pok\u00E9mon!\"></ActionBar>\n<ScrollView>\n  <StackLayout>\n    <RadCartesianChart height=\"400\">\n      <CategoricalAxis tkCartesianVerticalAxis></CategoricalAxis>\n      <LinearAxis tkCartesianHorizontalAxis></LinearAxis>\n      <BarSeries tkCartesianSeries [items]=\"typeData\" categoryProperty=\"type\" valueProperty=\"count\"></BarSeries>\n    </RadCartesianChart>\n  </StackLayout>\n\n  <!--\n  <FlexboxLayout class=\"container\">\n    <Image *ngFor=\"let pokemon of pokemonList\"\n      [src]=\"pokemon.sprite\"\n      (tap)=\"onTap($event, pokemon)\"\n      ></Image>\n  </FlexboxLayout>\n  -->\n</ScrollView>\n\n"
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFLbEQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFFdkQsNkRBQTJEO0FBNEIzRCxJQUFhLFlBQVk7SUFjdkIsc0JBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFYdEQsc0JBQUksa0NBQVE7YUFBWjtZQUNFLE1BQU0sQ0FBQztnQkFDTCxFQUFFLElBQUksRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQ3JGLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtnQkFDdEYsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2dCQUM3RixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUU7Z0JBQzVGLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTtnQkFDcEYsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBQyxFQUFFLEVBQUUsSUFBSSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFO2FBQ3ZGLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUlELCtCQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNuQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLE9BQU87UUFDbEI7Ozs7OztVQU1FO1FBRUY7Ozs7Ozs7VUFPRTtRQUVGOzs7Ozs7O1VBT0U7SUFDSixDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBakRELElBaURDO0FBakRZLFlBQVk7SUExQnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsNnBCQXNCWDtLQUNBLENBQUM7cUNBZW9DLGdDQUFjO0dBZHZDLFlBQVksQ0FpRHhCO0FBakRZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgVE5TRmFuY3lBbGVydCwgVE5TRmFuY3lBbGVydEJ1dHRvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFuY3lhbGVydFwiO1xuaW1wb3J0IHsgVE5TVGV4dFRvU3BlZWNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZXh0dG9zcGVlY2hcIjtcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXVkaW9cIjtcbnZhciBleHBsb3Npb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWV4cGxvc2lvbmZpZWxkXCIpO1xuXG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gXCIuL3Bva2Vtb24vcG9rZW1vbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgdGVtcGxhdGU6IGBcblxuPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiB0aXRsZT1cIlBva8OpbW9uIVwiPjwvQWN0aW9uQmFyPlxuPFNjcm9sbFZpZXc+XG4gIDxTdGFja0xheW91dD5cbiAgICA8UmFkQ2FydGVzaWFuQ2hhcnQgaGVpZ2h0PVwiNDAwXCI+XG4gICAgICA8Q2F0ZWdvcmljYWxBeGlzIHRrQ2FydGVzaWFuVmVydGljYWxBeGlzPjwvQ2F0ZWdvcmljYWxBeGlzPlxuICAgICAgPExpbmVhckF4aXMgdGtDYXJ0ZXNpYW5Ib3Jpem9udGFsQXhpcz48L0xpbmVhckF4aXM+XG4gICAgICA8QmFyU2VyaWVzIHRrQ2FydGVzaWFuU2VyaWVzIFtpdGVtc109XCJ0eXBlRGF0YVwiIGNhdGVnb3J5UHJvcGVydHk9XCJ0eXBlXCIgdmFsdWVQcm9wZXJ0eT1cImNvdW50XCI+PC9CYXJTZXJpZXM+XG4gICAgPC9SYWRDYXJ0ZXNpYW5DaGFydD5cbiAgPC9TdGFja0xheW91dD5cblxuICA8IS0tXG4gIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPEltYWdlICpuZ0Zvcj1cImxldCBwb2tlbW9uIG9mIHBva2Vtb25MaXN0XCJcbiAgICAgIFtzcmNdPVwicG9rZW1vbi5zcHJpdGVcIlxuICAgICAgKHRhcCk9XCJvblRhcCgkZXZlbnQsIHBva2Vtb24pXCJcbiAgICAgID48L0ltYWdlPlxuICA8L0ZsZXhib3hMYXlvdXQ+XG4gIC0tPlxuPC9TY3JvbGxWaWV3PlxuXG5gXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBva2Vtb25MaXN0O1xuXG4gIGdldCB0eXBlRGF0YSgpOiBBcnJheTxPYmplY3Q+IHtcbiAgICByZXR1cm4gW1xuICAgICAgeyB0eXBlOlwiUG9pc29uXCIsIGNvdW50OiA1OSB9LCB7IHR5cGU6XCJHcmFzc1wiLCBjb3VudDogODQgfSwgeyB0eXBlOiBcIkZpcmVcIixjb3VudDogNTYgfSxcbiAgICAgIHsgdHlwZTogXCJGbHlpbmdcIiwgY291bnQ6IDkwIH0sIHsgdHlwZTpcIldhdGVyXCIsIGNvdW50OiAxMTggfSx7IHR5cGU6IFwiQnVnXCIsIGNvdW50OiA2NiB9LFxuICAgICAgeyB0eXBlOiBcIk5vcm1hbFwiLCBjb3VudDogOTcgfSwgeyB0eXBlOiBcIkVsZWN0cmljXCIsIGNvdW50OiA0MiB9LCB7IHR5cGU6IFwiR3JvdW5kXCIsIGNvdW50OiA2MCB9LFxuICAgICAgeyB0eXBlOiBcIkZhaXJ5XCIsIGNvdW50OiAzNSB9LCB7IHR5cGU6XCJGaWdodGluZ1wiLCBjb3VudDogNDQgfSwgeyB0eXBlOiBcIlBzeWNoaWNcIiwgY291bnQ6IDc0IH0sXG4gICAgICB7IHR5cGU6IFwiUm9ja1wiLCBjb3VudDogNTUgfSwgeyB0eXBlOlwiU3RlZWxcIiwgY291bnQ6IDQxIH0sIHsgdHlwZTogXCJJY2VcIiwgY291bnQ6IDMzIH0sXG4gICAgICB7IHR5cGU6IFwiR2hvc3RcIiwgY291bnQ6IDM1IH0sIHsgdHlwZTogXCJEcmFnb25cIiwgY291bnQ6IDM4fSwgeyB0eXBlOlwiRGFya1wiLCBjb3VudDogNDQgfVxuICAgIF07XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBva2Vtb25TZXJ2aWNlLmxpc3QoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnBva2Vtb25MaXN0ID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uVGFwKGV2ZW50LCBwb2tlbW9uKSB7XG4gICAgLypcbiAgICBUTlNGYW5jeUFsZXJ0LnNob3dXYXJuaW5nKFwiREFOR0VSIO2gve26qFwiLCBwb2tlbW9uLm5hbWUgKyBcIiBpcyBhYm91dCB0byBibG93IHVwXCIsIFwi7aC97bKlXCIsIDIpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBleHBsb3Npb24uZXhwbG9kZShldmVudC52aWV3KTtcbiAgICB9LCAyMDAwKTtcbiAgICAqL1xuXG4gICAgLypcbiAgICB2YXIgcGxheWVyID0gbmV3IFROU1BsYXllcigpO1xuICAgIHBsYXllci5pbml0RnJvbUZpbGUoe1xuICAgICAgYXVkaW9GaWxlOiBcIn4vc291bmRzL3dvb3AubXAzXCIsXG4gICAgICBsb29wOiBmYWxzZVxuICAgIH0pO1xuICAgIHBsYXllci5wbGF5KCk7XG4gICAgKi9cblxuICAgIC8qXG4gICAgdmFyIFRUUyA9IG5ldyBUTlNUZXh0VG9TcGVlY2goKTtcbiAgICBUVFMuc3BlYWsoe1xuICAgICAgdGV4dDogcG9rZW1vbi5uYW1lLFxuICAgICAgcGl0Y2g6IDMuMCxcbiAgICAgIHNwZWFrUmF0ZTogMy4wXG4gICAgfSk7XG4gICAgKi9cbiAgfVxufVxuIl19