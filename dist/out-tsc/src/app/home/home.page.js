import * as tslib_1 from "tslib";
import { JokesService } from './../services/jokes.service';
import { Component } from '@angular/core';
var HomePage = /** @class */ (function () {
    function HomePage(service) {
        this.service = service;
    }
    HomePage.prototype.showJokes = function () {
        this.service.getAllJokes().subscribe(function (piadas) {
            console.log(piadas);
        });
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [JokesService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map