import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { map } from "rxjs/operators";

@Injectable()
export class LoginService {

    /*API de AngularFireAuth regresa una promesa una vez que se hizo login es por eso que 
     se debe utilizar una instancia de Promise*/

    constructor(private authService: AngularFireAuth) { }

    login(email: string, password: string){
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(email, password)
                .then((datos) => resolve(datos))
                .catch((error) => reject(error));
        });
    }
    
    getAuth(){
        return this.authService.authState.pipe(
            map(auth => auth)
        );
    }
    
    logout(){
        this.authService.signOut();
    }

    registrarse(email:string, password:string){
        return new Promise((resolve, reject) => {
        this.authService.createUserWithEmailAndPassword(email, password)
            .then((datos) => resolve(datos))
            .catch((error) => reject(error));
    });
    }
}
