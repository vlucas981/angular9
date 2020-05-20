import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // propLegal = "qualquer";

  product: Product = {
    name: '',
    price: null
  }

  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit(): void {

  }

  /* fazerAlgo(): void {
    console.log("Fazendo algo!");
  }*/

  createProduct(): void {
    this.ps.create(this.product).subscribe(() => {
      this.ps.showMessage('Produto inserido com sucesso!', false)
      this.router.navigate(['/products'])
    });

  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
