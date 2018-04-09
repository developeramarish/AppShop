import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormConfig } from '@app/shared/form';
import { Observable } from 'rxjs/Observable';

import { ProductFormConfig } from './product-form.config';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
})
export class ProductFormComponent {
  formConfig: FormConfig;
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ){
    activatedRoute.params.subscribe(p => {
      this.id = p['id'];
    });
  }

  ngOnInit(): void {
    if(this.id)
      this.productService.get(this.id).subscribe(
        p => this.formConfig = ProductFormConfig.get(p)
      );
    else
      this.formConfig = ProductFormConfig.get();
  }

  processForm(values){
    if(this.id)
      this.create(values);
    else
      this.update(values);
  }

  private create(values: any): void{
    console.log("CREATING..", values);
  }

  private update(values: any): void{
    console.log("UPDATING..", this.id, values);
  }
}
