import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { Usuario } from '../interfaces/usuario.interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardarService {

  private firestore = inject(Firestore);
  private usuarioCollection = collection(this.firestore, 'usuarios')

  agregarUsuario(nombre: string, email: string, password:string) {
    return of(addDoc(this.usuarioCollection, {nombre, email, password}));
  }
}
