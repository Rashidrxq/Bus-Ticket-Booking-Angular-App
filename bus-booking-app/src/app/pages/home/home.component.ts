import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})


export class HomeComponent {
from: string = '';
to: string = '';
date: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
  this.route.queryParams.subscribe(params => {
    this.from = params['from'];
    this.to = params['to'];
    this.date = params['date'];
  });
}

  searchBuses() {
  this.router.navigate(['/bus-list'], {
    queryParams: {
      from: this.from,
      to: this.to,
      date: this.date
    }
  });
}


}

  