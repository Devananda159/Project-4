import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Singleviewlist } from './singleviewlist/singleviewlist';


export const routes: Routes = [
    {path:'',redirectTo:'/product',pathMatch:'full'},
    {path:'product',component:Product},
    {path:'singleview-list/:id',component:Singleviewlist}
];
