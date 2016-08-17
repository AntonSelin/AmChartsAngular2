import {BarClusteredComponent } from './charts/BarClustered.component';
import {EmptyRouteComponent } from './charts/EmptyRoute.component';
import {MapComponent } from './charts/Map.component';

export const AppRoutes = [
    {path: '', component: EmptyRouteComponent },
    {path: 'charts/barclustered', component: BarClusteredComponent},
    {path: 'charts/map', component: MapComponent}
];