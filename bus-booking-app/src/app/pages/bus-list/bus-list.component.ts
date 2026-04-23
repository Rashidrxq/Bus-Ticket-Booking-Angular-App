import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-list',
  imports: [CommonModule],
  templateUrl: './bus-list.html',
  styleUrl: './bus-list.css',
})
export class BusListComponent {
  from: string = '';
  to: string = '';
  date: string = '';

  buses = [
    {
      name: 'KSRTC Express',
      from: 'ksr',
      to: 'kozhikode',
      time: '08:00 AM',
      type: 'Non-AC Push Back',
      price: 500,
      seats: 12
    },
    {
      name: 'KSRTC Express',
      from: 'kochi',
      to: 'kozhikode',
      time: '08:00 AM',
      type: 'Non-AC Push Back',
      price: 500,
      seats: 15
    },
    {
      name: 'Super Fast Travels',
      from: 'kochi',
      to: 'kozhikode',
      time: '10:00 AM',
      type: 'AC Multi-Axle',
      price: 650,
      seats: 8
    },
    {
      name: 'Night Rider',
      from: 'kochi',
      to: 'kozhikode',
      time: '09:00 PM',
      type: 'AC Sleeper',
      price: 700,
      seats: 5
    },
    {
      name: 'KSRTC Express',
      from: 'kochi',
      to: 'kozhikode',
      time: '08:00 AM',
      type: 'Express',
      price: 500,
      seats: 20
    },
    {
      name: 'Super Fast Travels',
      from: 'palakkad',
      to: 'kozhikode',
      time: '10:00 AM',
      type: 'Super Fast',
      price: 650,
      seats: 10
    },
    {
      name: 'Night Rider',
      from: 'kochi',
      to: 'kozhikode',
      time: '09:00 PM',
      type: 'Premium AC',
      price: 700,
      seats: 4
    },
    {
      name: 'KSRTC Express',
      from: 'kochi',
      to: 'kozhikode',
      time: '08:00 AM',
      type: 'Fast Passenger',
      price: 500,
      seats: 18
    },
    {
      name: 'Super Fast Travels',
      from: 'kochi',
      to: 'kozhikode',
      time: '10:00 AM',
      type: 'Intercity',
      price: 650,
      seats: 12
    },
    {
      name: 'Night Rider',
      from: 'kochi',
      to: 'kozhikode',
      time: '09:00 PM',
      type: 'Luxury AC',
      price: 700,
      seats: 6
    },
    {
      name: 'KSRTC Express',
      from: 'kochi',
      to: 'kozhikode',
      time: '08:00 AM',
      type: 'Standard',
      price: 500,
      seats: 25
    },
    {
      name: 'Super Fast Travels',
      from: 'malapuram',
      to: 'kozhikode',
      time: '10:00 AM',
      type: 'Super Fast',
      price: 650,
      seats: 9
    },
    {
      name: 'Night Rider',
      from: 'tvm',
      to: 'kozhikode',
      time: '09:00 PM',
      type: 'Sleeper AC',
      price: 700,
      seats: 2
    }
  ];

  filteredBuses: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.from = params['from'];
      this.to = params['to'];
      this.date = params['date'];
      this.filterBuses();
    });
  }

  filterBuses() {
    if (this.from && this.to) {
      this.filteredBuses = this.buses.filter(bus =>
        bus.from.toLowerCase() === this.from.toLowerCase() &&
        bus.to.toLowerCase() === this.to.toLowerCase()
      );
    } else {
      this.filteredBuses = [...this.buses];
    }
  }

  selectBus(bus: any) {
  this.router.navigate(['/booking'], {
    queryParams: {
      name: bus.name,
      time: bus.time,
      price: bus.price,
      from: this.from || bus.from,
      to: this.to || bus.to,
      date: this.date || 'Not Selected'
    }
  });
}

  
}
