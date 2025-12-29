import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apiservice } from '../apiservice';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-singleview-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './singleviewlist.html',
  styleUrl: './singleviewlist.css',
})
export class Singleviewlist implements OnInit {
   singleproduct: any = null;
   
   constructor(private route: ActivatedRoute, private apiservice: Apiservice,private cdr:ChangeDetectorRef) {}
   
   ngOnInit() {
     const productId = this.route.snapshot.paramMap.get('id');
     
     if(productId) {
       this.apiservice.getsingleproduct(productId).subscribe({
         next: (data: any) => {
           this.singleproduct = data;
           this.cdr.detectChanges();
         },
         error: (error: any) => {
           console.error('Error loading product:', error);
         }
       });
     }
   }
 
    

}