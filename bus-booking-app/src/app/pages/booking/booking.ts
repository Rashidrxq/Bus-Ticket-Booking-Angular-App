import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  imports: [FormsModule, CommonModule],
  templateUrl: './booking.html',
  styleUrl: './booking.css',
})
export class BookingComponent {

  name: string = '';
  time: string = '';
  price: string = '';
  from: string = '';
  to: string = '';
  date: string = '';


  // user details
  userName: string = '';
  phone: string = '';
  email: string = '';
  gender: string = '';
  age: string = '';
  otp: string = '';

  // confirm
  isBookingConfirmed: boolean = false;


  // 
  allBookings: any[] = [];


  constructor(private route: ActivatedRoute) {

      // get all bookings from local storage
    this.allBookings = JSON.parse(localStorage.getItem('bookings') || '[]');

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.time = params['time'];
      this.price = params['price'];
      this.from = params['from'];
    this.to = params['to'];
    this.date = params['date'];
  });
}


// confirm booking
confirmBooking() {
  this.isBookingConfirmed = true;

  const booking = {
    name: this.userName,
    phone: this.phone,
    busName: this.name,
    from: this.from,
    to: this.to,
    date: this.date,
    time: this.time,
    price: this.price
  };

  // get existing bookings
  let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');

  // add new booking
  bookings.push(booking);

  // save back
  localStorage.setItem('bookings', JSON.stringify(bookings));
  console.log(this.from, this.to, this.date);
}


}
