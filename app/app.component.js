"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var explosion = require("nativescript-explosionfield");
var pokemon_service_1 = require("./pokemon/pokemon.service");
var AppComponent = (function () {
    function AppComponent(pokemonService) {
        this.pokemonService = pokemonService;
    }
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
        template: "\n\n<ActionBar class=\"action-bar\" title=\"Pok\u00E9mon!\"></ActionBar>\n<ScrollView>\n  <FlexboxLayout class=\"container\">\n    <Image *ngFor=\"let pokemon of pokemonList\"\n      [src]=\"pokemon.sprite\"\n      (tap)=\"onTap($event, pokemon)\"\n      ></Image>\n  </FlexboxLayout>\n</ScrollView>\n\n"
    }),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFJbEQsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFFdkQsNkRBQTJEO0FBa0IzRCxJQUFhLFlBQVk7SUFHdkIsc0JBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUFHLENBQUM7SUFFdEQsK0JBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFJO1lBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxLQUFLLEVBQUUsT0FBTztRQUNsQjs7Ozs7O1VBTUU7UUFFRjs7Ozs7OztVQU9FO1FBRUY7Ozs7Ozs7VUFPRTtJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUF0Q0QsSUFzQ0M7QUF0Q1ksWUFBWTtJQWhCeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxpVEFZWDtLQUNBLENBQUM7cUNBSW9DLGdDQUFjO0dBSHZDLFlBQVksQ0FzQ3hCO0FBdENZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVE5TRmFuY3lBbGVydCwgVE5TRmFuY3lBbGVydEJ1dHRvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZmFuY3lhbGVydFwiO1xuaW1wb3J0IHsgVE5TVGV4dFRvU3BlZWNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZXh0dG9zcGVlY2hcIjtcbmltcG9ydCB7IFROU1BsYXllciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYXVkaW9cIjtcbnZhciBleHBsb3Npb24gPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWV4cGxvc2lvbmZpZWxkXCIpO1xuXG5pbXBvcnQgeyBQb2tlbW9uU2VydmljZSB9IGZyb20gXCIuL3Bva2Vtb24vcG9rZW1vbi5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgdGVtcGxhdGU6IGBcblxuPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiB0aXRsZT1cIlBva8OpbW9uIVwiPjwvQWN0aW9uQmFyPlxuPFNjcm9sbFZpZXc+XG4gIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPEltYWdlICpuZ0Zvcj1cImxldCBwb2tlbW9uIG9mIHBva2Vtb25MaXN0XCJcbiAgICAgIFtzcmNdPVwicG9rZW1vbi5zcHJpdGVcIlxuICAgICAgKHRhcCk9XCJvblRhcCgkZXZlbnQsIHBva2Vtb24pXCJcbiAgICAgID48L0ltYWdlPlxuICA8L0ZsZXhib3hMYXlvdXQ+XG48L1Njcm9sbFZpZXc+XG5cbmBcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcG9rZW1vbkxpc3Q7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwb2tlbW9uU2VydmljZTogUG9rZW1vblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wb2tlbW9uU2VydmljZS5saXN0KCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5wb2tlbW9uTGlzdCA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBvblRhcChldmVudCwgcG9rZW1vbikge1xuICAgIC8qXG4gICAgVE5TRmFuY3lBbGVydC5zaG93V2FybmluZyhcIkRBTkdFUiDtoL3tuqhcIiwgcG9rZW1vbi5uYW1lICsgXCIgaXMgYWJvdXQgdG8gYmxvdyB1cFwiLCBcIu2gve2ypVwiLCAyKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZXhwbG9zaW9uLmV4cGxvZGUoZXZlbnQudmlldyk7XG4gICAgfSwgMjAwMCk7XG4gICAgKi9cblxuICAgIC8qXG4gICAgdmFyIHBsYXllciA9IG5ldyBUTlNQbGF5ZXIoKTtcbiAgICBwbGF5ZXIuaW5pdEZyb21GaWxlKHtcbiAgICAgIGF1ZGlvRmlsZTogXCJ+L3NvdW5kcy93b29wLm1wM1wiLFxuICAgICAgbG9vcDogZmFsc2VcbiAgICB9KTtcbiAgICBwbGF5ZXIucGxheSgpO1xuICAgICovXG5cbiAgICAvKlxuICAgIHZhciBUVFMgPSBuZXcgVE5TVGV4dFRvU3BlZWNoKCk7XG4gICAgVFRTLnNwZWFrKHtcbiAgICAgIHRleHQ6IHBva2Vtb24ubmFtZSxcbiAgICAgIHBpdGNoOiAzLjAsXG4gICAgICBzcGVha1JhdGU6IDMuMFxuICAgIH0pO1xuICAgICovXG4gIH1cbn1cbiJdfQ==