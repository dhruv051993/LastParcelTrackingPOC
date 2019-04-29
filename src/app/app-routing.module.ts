import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'authentication', loadChildren: './authentication/authentication.module#AuthenticationModule' },
    { path: 'adminDelivery', loadChildren: './admin-delivery/admin-delivery.module#AdminDeliveryModule' },
    { path: 'userParcel', loadChildren: './user-parcel/user-parcel.module#UserParcelModule' },
    { path: '', redirectTo: 'authentication', pathMatch: 'full' },
    {path: '**' , redirectTo: 'authentication'}
];

@NgModule(
    {
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [RouterModule]
    }
)
export class AppRoutingModule { }

