import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styles: [
  ]
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean = false;
  loggedInUser: string | any | null; 

  constructor(private loginService:LoginService,
              private router:Router) { }

  ngOnInit(): void {
    this.loginService.getAuth().subscribe((auth) => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      else{
        this.isLoggedIn = false;
      }
    })
  }

  logout(){
    this.loginService.logout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

}
