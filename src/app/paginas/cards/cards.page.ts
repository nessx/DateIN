import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage } from '../../../services/storage';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage {
  cards;
  apikey;
  
  constructor(public apiService : ApiService, private router: Router) {
    this.cards = [];
    this.getDataStorage();
   // this.giveUsers();
  }


  sendaction(value){
    this.apiService.SendAction(value, this.apikey).subscribe(() => {});
  }

  async getDataStorage(){
    this.apikey = await getStorage('apiKey');
    console.log("DataStorage ApiKey: " + this.apikey);
    this.giveUsers(this.apikey);
  }

  giveUsers(apikey){
    this.apiService.giveUsers(apikey).subscribe((data) => {
      this.cards = this.shuffle(data);
    });
  }

  shuffle(array) {
    if(array.length == null){    
      return array;
    }else{
      let currentIndex = array.length,  randomIndex;
  
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }
  }
}

