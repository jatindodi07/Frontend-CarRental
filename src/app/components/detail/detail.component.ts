import { Component, OnInit } from '@angular/core';
import { CarServiceService } from '../../services/car-service.service';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{
  constructor(private carService:CarServiceService){
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
