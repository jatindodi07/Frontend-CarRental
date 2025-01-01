import { NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PassengerService } from '../../services/passenger.service';

@Component({
  selector: 'app-passenger',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './passenger.component.html',
  styleUrl: './passenger.component.css'
})
export class PassengerComponent {
   flag:boolean=false;
  numberOfGuests: number = 0;
  guests: {name: string, age: any, contact_number: any}[] = [];
  msg: string | undefined;
  bid: any;
  successMsg: string | undefined;

  constructor(private actRoute: ActivatedRoute, private passengerService: PassengerService) {
    actRoute.paramMap.subscribe(p => {
      this.bid = p.get('id');
    });
  }

  onSubmit() {
    this.guests.forEach(g => {
      if (g.age >= 18) {
        this.flag = true;
      }
    })

    if (this.flag) {
      this.guests.forEach(g => {
        if (g.name == ''){
          this.successMsg = undefined;
          this.msg = "Name of Guests cannot be Null";
        }
        else if (g.age == null || g.age < 0){
          
          this.successMsg = undefined;
          this.msg = "Enter Valid Age of All Guests";}
        else if (g.contact_number == '' || g.contact_number.length != 10){
          this.successMsg = undefined;
          this.msg = "Enter Valid Contact";}
        else {
  
          this.passengerService.addPassenger(this.bid, g).subscribe({
            next : (data) => {
              console.log(data);
              this.msg = undefined;
              this.successMsg = "Booking Successful";
            },
            error : (err) => {
              console.log(err);
            }
          })
        }
  
      });
    } else {
      this.successMsg = undefined;
        this.msg = "Atleast one Guest should be above 18";
    }
  }

  generateForms() {
    this.guests = Array.from({ length: this.numberOfGuests }, () => ({
      name : '',
      age : null,
      contact_number : ''
    }));
  }

}
