import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>My First Angular 2 App</h1>
    <div>
        <button routerLink="/charts/barclustered" type="button">Bar Clustered Chart</button>
        <button routerLink="/charts/map" type="button">Map Chart</button>
        <button type="button">Chart 3</button>
        <button type="button">Chart 4</button>
    </div>
    <div>
        <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent { }
