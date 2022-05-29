import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { removeStorage } from 'src/services/storage';
import { getStorage } from '../services/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  apikey: any;
  isLoggedIn = false;
  
  constructor(private router: Router) {
    
  }
  ionViewWillEnter(){
    this.getDataStorage();
  }
  
  logout(){
    this.removeData().then(() => {
      this.router.navigate(['/login']);
      this.isLoggedIn = false;
    });
  }

  async removeData(){
    return await removeStorage('apiKey')
  }

  async getDataStorage(){
    this.apikey = await getStorage('apiKey');
    if(this.apikey == null){
      this.isLoggedIn = false;
    }else{
      this.isLoggedIn = true;
    }
  }
}
