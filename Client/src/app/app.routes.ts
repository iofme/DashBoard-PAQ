import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CardOpenComponent } from './card-open/card-open.component';

export const routes: Routes = [
    {path:'', component: CardComponent},
    {path: 'cardopen', component: CardOpenComponent}
];
