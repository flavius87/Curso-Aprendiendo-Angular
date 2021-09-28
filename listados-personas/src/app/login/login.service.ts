import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService{

    token: any;

    constructor(private router: Router){}
    
    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                (                response: any) => {
                    firebase.auth().currentUser.getIdToken().then(
                        (                        token: any) => {
                            this.token = token;
                            this.router.navigate(['/']);
                        }
                    )
                }
            )
    }

    getIdToken(){
        return this.token;
    }

    isAutenticado(){
        return this.token != null;
    }

    logout(){
        this.auth().signOut().then(() => {
            this.token = null;
            this.router.navigate(['login']);
        }).catch((error: any) => console.log("error de logout"));
    }
}

    
