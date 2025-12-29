import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [RouterLink, CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  product:any[]=[];//array declaration
  constructor(private apiservice:Apiservice){}//connected services

  ngOnInit() { //for loading the page on angular
    this.apiservice.getProduct().subscribe((data:any)=>{ //store the data from the linl into the array
      this.product=data;

    });
  }

}
