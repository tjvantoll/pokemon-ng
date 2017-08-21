"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var pokemon_service_1 = require("./pokemon/pokemon.service");
var ListComponent = (function () {
    function ListComponent(router, pokemonService) {
        this.router = router;
        this.pokemonService = pokemonService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.list().then(function (data) {
            _this.pokemonList = data;
        });
    };
    ListComponent.prototype.onTap = function (event, pokemon) {
        this.router.navigate(["/detail", pokemon], {
            transition: {
                name: "curlUp",
                duration: 500
            }
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        styleUrls: ["list.css"],
        template: "\n\n<ActionBar class=\"action-bar\" title=\"Pok\u00E9mon!\"></ActionBar>\n\n<ScrollView>\n  <FlexboxLayout class=\"container\">\n    <Image *ngFor=\"let pokemon of pokemonList\"\n      [src]=\"pokemon.sprite\"\n      (tap)=\"onTap($event, pokemon)\"\n      ></Image>\n  </FlexboxLayout>\n</ScrollView>\n"
    }),
    __metadata("design:paramtypes", [router_1.RouterExtensions, pokemon_service_1.PokemonService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFFL0QsNkRBQTJEO0FBb0IzRCxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLE1BQXdCLEVBQVUsY0FBOEI7UUFBaEUsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBRyxDQUFDO0lBRXhGLGdDQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUNuQyxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLE9BQU87UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDekMsVUFBVSxFQUFFO2dCQUNWLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRSxHQUFHO2FBQ2Q7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBbkJELElBbUJDO0FBbkJZLGFBQWE7SUFsQnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUM7UUFDdkIsUUFBUSxFQUFFLGlUQVlYO0tBQ0EsQ0FBQztxQ0FLNEIseUJBQWdCLEVBQTBCLGdDQUFjO0dBSHpFLGFBQWEsQ0FtQnpCO0FBbkJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUG9rZW1vblNlcnZpY2UgfSBmcm9tIFwiLi9wb2tlbW9uL3Bva2Vtb24uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gIHN0eWxlVXJsczogW1wibGlzdC5jc3NcIl0sXG4gIHRlbXBsYXRlOiBgXG5cbjxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgdGl0bGU9XCJQb2vDqW1vbiFcIj48L0FjdGlvbkJhcj5cblxuPFNjcm9sbFZpZXc+XG4gIDxGbGV4Ym94TGF5b3V0IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPEltYWdlICpuZ0Zvcj1cImxldCBwb2tlbW9uIG9mIHBva2Vtb25MaXN0XCJcbiAgICAgIFtzcmNdPVwicG9rZW1vbi5zcHJpdGVcIlxuICAgICAgKHRhcCk9XCJvblRhcCgkZXZlbnQsIHBva2Vtb24pXCJcbiAgICAgID48L0ltYWdlPlxuICA8L0ZsZXhib3hMYXlvdXQ+XG48L1Njcm9sbFZpZXc+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBva2Vtb25MaXN0O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIHBva2Vtb25TZXJ2aWNlOiBQb2tlbW9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBva2Vtb25TZXJ2aWNlLmxpc3QoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnBva2Vtb25MaXN0ID0gZGF0YTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uVGFwKGV2ZW50LCBwb2tlbW9uKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2RldGFpbFwiLCBwb2tlbW9uXSwge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBuYW1lOiBcImN1cmxVcFwiLFxuICAgICAgICBkdXJhdGlvbjogNTAwXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==