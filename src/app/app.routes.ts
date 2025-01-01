import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthComponent } from './pages/auth/auth.component';
import { SighnUpPageComponent } from './pages/sighn-up-page/sighn-up-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UpdateComponent } from './components/update/update.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { BookingHistoryComponent } from './components/booking-history/booking-history.component';
import { Component } from '@angular/core';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { CarPicsComponent } from './components/car-pics/car-pics.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { CarComponent } from './pages/car/car.component';
import { DetailComponent } from './components/detail/detail.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { RenterhomeComponent } from './pages/renterhome/renterhome.component';
import { RentercarComponent } from './components/rentercar/rentercar.component';
import { CarHistoryComponent } from './components/car-history/car-history.component';
import { RenterCarPageComponent } from './pages/renter-car-page/renter-car-page.component';
import { RenterLoginComponent } from './components/renter-login/renter-login.component';
import { BookingComponent } from './pages/booking/booking.component';
import { PassengerlistComponent } from './components/passengerlist/passengerlist.component';


export const routes: Routes = [
    {
        path:"",  component:AuthComponent
    
    },
    {
        path:"login" , component:LoginPageComponent
    
    },
    {
        path:"sign-up", component:SighnUpPageComponent
    },
    {
         path:'renter-page', component:RenterhomeComponent,children:[{
            
                path:'add-car', component : AddCarComponent,children:[{
                    path:'', component :CarDetailsComponent
                },
                {
                    path:'upload-photos',component:CarPicsComponent
                }]
            
         },
        {
           path:'car-list', component:RenterCarPageComponent,children:[
            {
                path:'',component:RentercarComponent
            },
            {
                path:'car-history/:id',component:CarHistoryComponent
            }
           ]
        }
        
    ]
    },

    {
        path:"home-page",component:HomePageComponent,children:[
            {
                path:'', component : CarListComponent
            },
            {
                path:'available',component:AvailabilityComponent,
                 
            },
            {
                path:'detail',component:DetailComponent
            },
            {
                path:'update', component : UpdateComponent
            },
            {
                path:'booking-history', component : BookingComponent,children:[{
                    path:'',component:BookingHistoryComponent
                },
                {
                    path:'passenger-list',component:PassengerlistComponent
                }
            
        ]
            },
            {
                path:'renter-login',component:RenterLoginComponent
            },
            {
                path:'passenger/:id',component:PassengerComponent

            }
           
        ]

    }
   
];
