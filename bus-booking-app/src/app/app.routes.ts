import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BusListComponent } from './pages/bus-list/bus-list.component';
import { BookingComponent } from './pages/booking/booking'


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bus-list', component: BusListComponent },
    {path: 'booking', component: BookingComponent}

];
