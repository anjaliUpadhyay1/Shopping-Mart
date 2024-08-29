import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { NgModule } from '@angular/core';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home Details'
    },  
];

NgModule({
    imports: [RouterModule.forRoot(routeConfig)],
    exports: [RouterModule]
})

export default routeConfig;