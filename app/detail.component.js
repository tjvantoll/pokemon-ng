"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SocialShare = require("nativescript-social-share");
var DetailComponent = (function () {
    function DetailComponent(route) {
        this.route = route;
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.pokemon = params;
        });
    };
    DetailComponent.prototype.share = function (event, pokemon) {
        SocialShare.shareImage(pokemon.sprite);
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        selector: "ns-app",
        template: "\n\n<ActionBar class=\"action-bar\" [title]=\"pokemon.name\">\n  <ActionItem text=\"Share\" (tap)=\"share(event, pokemon)\" android.systemIcon=\"ic_menu_share_holo_dark\" ios.systemIcon=\"9\" ios.position=\"right\"></ActionItem>\n</ActionBar>\n\n<FlexboxLayout justifyContent=\"center\">\n  <Image [src]=\"pokemon.sprite\"></Image>\n</FlexboxLayout>\n"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHVEQUF5RDtBQWdCekQsSUFBYSxlQUFlO0lBRzFCLHlCQUFvQixLQUFxQjtRQUFyQixVQUFLLEdBQUwsS0FBSyxDQUFnQjtJQUN6QyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUM5QixLQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCwrQkFBSyxHQUFMLFVBQU0sS0FBSyxFQUFFLE9BQU87UUFDbEIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNILHNCQUFDO0FBQUQsQ0FBQyxBQWZELElBZUM7QUFmWSxlQUFlO0lBZDNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsaVdBU1g7S0FDQSxDQUFDO3FDQUsyQix1QkFBYztHQUg5QixlQUFlLENBZTNCO0FBZlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBTb2NpYWxTaGFyZSBmcm9tIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG5cbjxBY3Rpb25CYXIgY2xhc3M9XCJhY3Rpb24tYmFyXCIgW3RpdGxlXT1cInBva2Vtb24ubmFtZVwiPlxuICA8QWN0aW9uSXRlbSB0ZXh0PVwiU2hhcmVcIiAodGFwKT1cInNoYXJlKGV2ZW50LCBwb2tlbW9uKVwiIGFuZHJvaWQuc3lzdGVtSWNvbj1cImljX21lbnVfc2hhcmVfaG9sb19kYXJrXCIgaW9zLnN5c3RlbUljb249XCI5XCIgaW9zLnBvc2l0aW9uPVwicmlnaHRcIj48L0FjdGlvbkl0ZW0+XG48L0FjdGlvbkJhcj5cblxuPEZsZXhib3hMYXlvdXQganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgPEltYWdlIFtzcmNdPVwicG9rZW1vbi5zcHJpdGVcIj48L0ltYWdlPlxuPC9GbGV4Ym94TGF5b3V0PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIERldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBva2Vtb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGUucGFyYW1zLmZvckVhY2gocGFyYW1zID0+IHtcbiAgICAgIHRoaXMucG9rZW1vbiA9IHBhcmFtcztcbiAgICB9KVxuICB9XG5cbiAgc2hhcmUoZXZlbnQsIHBva2Vtb24pIHtcbiAgICBTb2NpYWxTaGFyZS5zaGFyZUltYWdlKHBva2Vtb24uc3ByaXRlKTtcbiAgfVxufVxuIl19