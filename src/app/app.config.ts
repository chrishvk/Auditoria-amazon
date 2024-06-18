import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'auditoria-4dd32',
        appId: '1:467941264316:web:9e11b7ebb5a27a7b9f39b9',
        storageBucket: 'auditoria-4dd32.appspot.com',
        apiKey: 'AIzaSyDfii7Ev-oWech_IjYNCBYRCMMGObI8vGg',
        authDomain: 'auditoria-4dd32.firebaseapp.com',
        messagingSenderId: '467941264316',
        measurementId: 'G-KDXZT325LB',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
};
