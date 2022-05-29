import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage } from '../../../services/storage';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  apikey;

  constructor(private router: Router) { 
  }
  
  ionViewWillEnter() {
    this.getDataStorage();
  }

  async getDataStorage(){
    this.apikey = await getStorage('apiKey');
    console.log(this.apikey);
    if(this.apikey != null){
      this.router.navigate(['/cards']);
    }
  }

}
