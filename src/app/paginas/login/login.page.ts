import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getStorage, setStorage } from '../../../services/storage';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name;
  password;
  apikey;

  constructor(private router: Router, public apiService : ApiService) {
    this.getDataStorage();
  }

  async getDataStorage(){
    this.apikey = await getStorage('apiKey');
    if(this.apikey != null){
      this.router.navigate(['/cards']);
    }
  }

  login(){
    let data = {
      name : this.name,
      password : this.password
    }

    console.log(this.name + "-" + this.password + "data " + data.name + "-" + data.password );

    setStorage('name',this.name);

    this.apiService.login(data).subscribe((response) => {
      console.log("SUSCRIBE: "+response);
      console.log(response.status);
      console.log(response.body);
      console.log(response.headers.get('x-api-key'));

      if (response.status == 201){
        setStorage('apiKey',response.headers.get('x-api-key'));
        this.router.navigate(['/cards']);
      }else{
        console.log("ERROR");
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
  }

}
