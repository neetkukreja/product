import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http';
import { userMockData } from '../shared/people-mock';
import { dietdata } from './diet-mock';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {

  constructor(private Http: HttpClient) { }


  getData(){
    let url:string = "https://jsonplaceholder.typicode.com/users/";
    return this.Http.get(url);
  }
  getalbums(){
    let albumUrl: string = "https://jsonplaceholder.typicode.com/albums";
    return this.Http.get(albumUrl);
  }
  getphotos(){
    let photos: string = "https://jsonplaceholder.typicode.com/photos"
    return this.Http.get(photos);
  }

  createPost(){
    let url: string = 'https://jsonplaceholder.typicode.com/posts';
    let body = [{
      title: 'foo',
      body: 'bar',
      userId: 1,
    }]

    return this.Http.post(url, body)
  }
  users(){
    return userMockData
  }


}
