import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LauchesComponent } from '../lauches/lauches.component';
import { UpcomingComponent } from '../upcoming/upcoming.component';


const routes: Routes = [
{ path: 'home', component: HomeComponent},
{ path: 'lauches', component: LauchesComponent},
{ path: 'upcoming', component: UpcomingComponent},
{
path: '',
redirectTo: '/home',
pathMatch: 'full'
}

];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
}) 
export class AppRoutingModule { }
