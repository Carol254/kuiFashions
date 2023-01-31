import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth:AngularFireAuth,private router:Router) { }
}
