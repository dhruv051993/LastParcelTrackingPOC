import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcelDetailsComponent } from './parcel-details/parcel-details.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    { path: 'details', component: ParcelDetailsComponent, canActivate: [AuthGuard], data: {role: 'user'}},
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
export class UserParcelRoutingModule { }

