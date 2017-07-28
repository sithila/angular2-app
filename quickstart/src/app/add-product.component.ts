import { Component, Inject } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';


import { lookupListToken } from './providers';

@Component({
    selector: 'add-product-form',
    templateUrl: 'app/add-product.component.html',

})
export class ProductAddComponent {
    form;
    constructor( private formBuilder: FormBuilder, 
    @Inject(lookupListToken) public lookupLists 
    ) { 
    
    
    
    }
     onSubmit(ProductItem) {
        console.log(ProductItem);

    }
    
    ngOnInit() {
        this.form = this.formBuilder.group({
            mtype: this.formBuilder.control('student'),
            name: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+'),
            ])),
            detail: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+'),
            ])),
            
        });
    }
    
    
    }