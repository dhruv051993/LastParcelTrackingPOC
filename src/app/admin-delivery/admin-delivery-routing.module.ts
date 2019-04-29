import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryDetailsComponent } from './delivery-details/delivery-details.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    { path: 'details', component: DeliveryDetailsComponent, canActivate: [AuthGuard], data: {role: 'admin'}},
    { path: '', redirectTo: 'details', pathMatch: 'full' }
];

@NgModule(
    {
        imports: [
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]
    }
)
export class AdminDeliveryRoutingModule { }

