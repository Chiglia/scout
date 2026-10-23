import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'service-sheets',
        loadComponent: () => import('./pages/service-sheets/service-sheets').then(m => m.ServiceSheets),
        title: 'Schede servizio A5'
    },
    {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings').then(m => m.Settings),
        title: 'Impostazioni'
    },
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'Home'
    },
    {
        path: 'page-not-found',
        loadComponent: () => import('./pages/errors/page-not-found/page-not-found').then(m => m.PageNotFound),
        title: '404 - Page Not Found'
    },
    {
        path: '**',
        redirectTo: 'page-not-found',
        pathMatch: 'full'
    }
];
