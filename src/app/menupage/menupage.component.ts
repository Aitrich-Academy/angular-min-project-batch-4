

import { Component } from '@angular/core';
import { Recipe } from 'src/modals/recipe';


@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {

  term : string='';
  category: string='';

  getCategory(category:string){
    this.category = category;
  }

  recipes:Recipe[]=[
    {
      id:1,
      image:'assets/images/product1.jpg',
      name:'Crab Louie',
      category: 'meal',
      description: 'crab meat,tomatoes,egg,lettuce,spring onion,avocado',
      price:120


    },
    {
      id:2,
      image:'assets/images/product2.jpg',
      name:'Orzo salad',
      category: 'meal',
      description: 'Orzo, red wine vinaigrette, red wine vinegar, garbanzo beans, honey',
      price:150


    },
    {
      id:3,
      image:'assets/images/product3.jpg',
      name:'Acar',
      category: 'cuisine',
      description: 'Cauliflower, french beans, shrimp paste, white cabbage, peppers',
      price:250


    },
    {
      id:4,
      image:'assets/images/product4.png',
      name:'Pasta',
      category: 'meal',
      description: 'Pav bhaji, baby corn, penne pasta, green peas, bell pepper',
      price:50


    },
    {
      id:5,
      image:'assets/images/product5.png',
      name:'Paneer pepper',
      category: 'dietary',
      description: 'Paneer, tomato sauce, fennel, corn flour, garam masala',
      price:60


    },
    {
      id:6,
      image:'assets/images/product6.jpg',
      name:'Beef Bisque',
      category: 'meal',
      description: 'Beef brisket, brown sugar, barbecue sauce, chili, worcestershire sauce',
      price:250


    },
    
    {
      id:6,
      image:'assets/images/product7.png',
      name:'Greek Salad',
      category: 'dietary',
      description: 'sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese',
      price:80


    },
    {
      id:7,
      image:'assets/images/product8.png',
      name:'Lobster Roll',
      category: 'cuisine',
      description: 'Hot dog buns, potato chips, cooked lobster meat, filling, lemon juice',
      price:200


    },
    {
      id:8,
      image:'assets/images/product9.png',
      name:'Caesar Salad',
      category: 'dietary',
      description: 'Anchovy paste, romaine lettuce, parmesan cheese, olive oil, lemon juice',
      price:100


    }

  ];

}