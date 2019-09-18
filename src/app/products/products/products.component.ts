import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product = {
    id: 75,
    title: 'How to make router & navigation in Angular 8',
    author: 'Didin J.',
    description: 'A complete tutorial about creating router and navigation in the Angular 8 Web Application'
  };
  constructor(private router: Router) {
    this.router = router;
  }
  gotoDetails(productId: any) {
    this.router.navigate(['/product/', productId]);
  }

  ngOnInit() {
  }

}
