import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nick;
  password;
  descripcion;
  constructor(private router: Router, public apiService : ApiService) { }

  register(){
    let data = {
      nick : this.nick,
      password : this.password,
      descripcion : this.descripcion
    }

    this.apiService.register(data).subscribe((response) => {
      console.log("SUSCRIBE: "+response);

      if (response.status == 204){
        this.router.navigate(['/login']);

      }else{
        console.log("ERROR");
        this.router.navigate(['/register']);
      }
    });
  }
  ngOnInit() {
  }

}
