import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardOpenComponent } from './card-open/card-open.component';
import { MuralComponent } from './mural/mural.component';

export const routes: Routes = [
    {path:'', component: MuralComponent},
    {path: 'cardopen', component: CardOpenComponent}
];
