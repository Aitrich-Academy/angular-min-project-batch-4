import { Component } from '@angular/core';
import { Recipe } from 'src/modals/recipe';
@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent {

  recipes:Recipe[]=[
    {
      id:1,
      image:'assets/images/product4.jpg',
      name:'Crab Louie',
      price:120


    },
    {
      id:2,
      image:'assets/images/pexels-ruslan-khmelevsky-7226367.jpg',
      name:'Orzo salad',
      price:150


    },
    {
      id:3,
      image:'assets/images/pexels-jan-n-g-u-y-e-n-🍁-699953.jpg',
      name:'Acar',
      price:250


    },
    {
      id:4,
      image:'assets/images/product5.jpg',
      name:'Pasta',
      price:50


    },
    {
      id:5,
      image:'assets/images/product6.jpg',
      name:'Paneer',
      price:60


    },
    {
      id:6,
      image:'assets/images/product3.jpg',
      name:'Beef Bisque',
      price:250


    },
    
    {
      id:6,
      image:'assets/images/greek-salad.jpg',
      name:'Greek Salad',
      price:80


    },
    {
      id:7,
      image:'assets/images/lobster-roll.jpg',
      name:'Lobster Roll',
      price:200


    },
    {
      id:8,
      image:'assets/images/caesar.jpg',
      name:'Caesar',
      price:100


    }

  ]

}
