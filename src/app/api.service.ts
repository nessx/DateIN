import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) { 
    
  }

  login(data){
    console.log(data.name);
    return this.http.get('http://orangeyoutube.local/frmk/login/' + data.name + '/' + data.password, {'observe': 'response'});
  }

  register(data){
    console.log(data.nick);
    return this.http.post('http://orangeyoutube.local/frmk/registre/',data, {'observe': 'response'});
  }

  SendAction(data, apikey){
    console.log("SendAction ApiKey: "+apikey);
    const headers = {'x-api-key': apikey};
    return this.http.get('http://orangeyoutube.local/frmk/action/'+data.dest+'/'+data.choice, {'headers':headers , observe: 'response'});
  }

  //API
  giveUsers(data){
    console.log("id: "+data);
    return this.http.get('http://orangeyoutube.local/frmk/users/',{
      headers: {'x-api-key':data}
   });
  }
  

  addUser(data){
    console.log(data.nick)
    return this.http.post('http://orangeyoutube.local/frmk/register/', data , {'observe': 'response'});
  }
}
