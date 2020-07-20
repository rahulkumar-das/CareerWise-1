import { Injectable } from '@angular/core';
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  tokenName = "--token-ASM-PROD"; //name of the token inside of browser
  postThemeName = "--post-theme-ASM-PROD";

  private set(key, value){
    if(localStorage){
      localStorage.setItem(key, value);
    }
    else{
      alert("Browser does not support Local storage API");
    }
  }

  private get(key){
    if(localStorage){
      if(key in localStorage){
        return localStorage.getItem(key);
      }
    }
    else{
      alert("Browser does not support Local storage API");

    }
  }

  public setToken(token){
    this.set(this.tokenName, token);

  }

  public getToken(){
    return this.get(this.tokenName)
  }

  public getParsedToken(){
    let token = this.getToken();
    

    //To decryprt the token 
    return JSON.parse(atob(token.split(".")[1]));
  }

  public removeToken(){
    localStorage.removeItem(this.tokenName)
  }

  public setPostTheme(theme){
  this.set(this.postThemeName, theme);

  }

  public getPostTheme(){
    return this.get(this.postThemeName);
  }


}
