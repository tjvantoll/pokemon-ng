"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("file-system");
var PokemonService = (function () {
    function PokemonService() {
    }
    PokemonService.prototype.list = function () {
        var jsonFile = file_system_1.knownFolders.currentApp().getFile("pokemon/pokemon.json");
        return new Promise(function (resolve, reject) {
            jsonFile.readText()
                .then(function (content) {
                var data = JSON.parse(content);
                data.forEach(function (pokemon) {
                    pokemon.sprite = "~/img/" + pokemon.number + ".png";
                    pokemon.name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                });
                resolve(data);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return PokemonService;
}());
PokemonService = __decorate([
    core_1.Injectable()
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZW1vbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9rZW1vbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDJDQUEyQztBQUczQyxJQUFhLGNBQWM7SUFBM0I7SUFpQkEsQ0FBQztJQWhCQyw2QkFBSSxHQUFKO1FBQ0UsSUFBSSxRQUFRLEdBQUcsMEJBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUN6RSxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBUyxPQUFPLEVBQUUsTUFBTTtZQUN2QyxRQUFRLENBQUMsUUFBUSxFQUFFO2lCQUNoQixJQUFJLENBQUMsVUFBUyxPQUFPO2dCQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVMsT0FBTztvQkFDM0IsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7b0JBQ3BELE9BQU8sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlFLENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBUyxHQUFHO2dCQUNuQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQztBQWpCWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7R0FDQSxjQUFjLENBaUIxQjtBQWpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzIH0gZnJvbSBcImZpbGUtc3lzdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb2tlbW9uU2VydmljZSB7XG4gIGxpc3QoKSB7XG4gICAgdmFyIGpzb25GaWxlID0ga25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKS5nZXRGaWxlKFwicG9rZW1vbi9wb2tlbW9uLmpzb25cIik7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBqc29uRmlsZS5yZWFkVGV4dCgpXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24oY29udGVudCkge1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKGNvbnRlbnQpO1xuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHBva2Vtb24pIHtcbiAgICAgICAgICAgICAgcG9rZW1vbi5zcHJpdGUgPSBcIn4vaW1nL1wiICsgcG9rZW1vbi5udW1iZXIgKyBcIi5wbmdcIjtcbiAgICAgICAgICAgICAgcG9rZW1vbi5uYW1lID0gcG9rZW1vbi5uYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcG9rZW1vbi5uYW1lLnNsaWNlKDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==