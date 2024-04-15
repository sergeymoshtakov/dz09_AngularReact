import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  houses = [
    {
      name: "Central Park Mansion",
      city: "New York",
      photo: "assets/images/central_park_mansion.jpg",
      description: "Luxurious mansion located in the heart of Central Park.",
      price: 2000,
    },
    {
      name: "Bayview Bungalow",
      city: "San Francisco",
      photo: "assets/images/bayview_bungalow.jpg",
      description: "Quaint bungalow with stunning views of the Bay Area.",
      price: 3000,
    },
    {
      name: "Miami Beach Villa",
      city: "Miami",
      photo: "assets/images/miami_beach_villa.jpg",
      description: "Spacious villa steps away from the vibrant Miami Beach.",
      price: 3500,
    },
    {
      name: "Chicago Loft",
      city: "Chicago",
      photo: "assets/images/chicago_loft.jpg",
      description: "Chic loft apartment in the bustling city of Chicago.",
      price: 2500,
    },
    {
      name: "Seattle Suburban",
      city: "Seattle",
      photo: "assets/images/seattle_suburban.jpg",
      description: "Cozy suburban home nestled in the picturesque city of Seattle.",
      price : 2400,
    }
  ];
}