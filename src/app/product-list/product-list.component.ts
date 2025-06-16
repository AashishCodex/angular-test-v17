import { Component } from '@angular/core';

import { Options } from '@angular-slider/ngx-slider';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

 products = [...products];
  inputValue: number = 30;
  value: number = 30;
  options: Options = {
    floor: 5,
    ceil: 30
  };

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  onInputChange(event: any) {
    console.log('input',event.target.value);
    const parsedValue = parseFloat(event.target.value);
    if (!isNaN(parsedValue) && parsedValue >= 5 && parsedValue <= 30) {
      this.value = parsedValue;
    }
  }

  onInputBlur() {
    console.log('blur_called...',this.inputValue,this.value)
    if (isNaN(this.inputValue) || this.inputValue < 5 || this.inputValue >= 30) {
      this.value = this.inputValue = 15;
    }
  }

  onSliderChange(event: any) {
    console.log('slider_event',event);
    this.value = this.inputValue = event;
  }
}