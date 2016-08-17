import { bootstrap }    from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutes } from './app.routes';

bootstrap(AppComponent, [
    provideRouter(AppRoutes)
]);
