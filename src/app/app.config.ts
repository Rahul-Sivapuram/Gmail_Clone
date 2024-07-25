import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyBeRZ63xXVizUpblsQtlCZ16OkXe0VSCmE',
        authDomain: 'fir-e81f1.firebaseapp.com',
        projectId: 'fir-e81f1',
        storageBucket: 'fir-e81f1.appspot.com',
        messagingSenderId: '832666915354',
        appId: '1:832666915354:web:f21e02dafab0cf449077a3',
      })
    ),
    provideFirestore(() => getFirestore()),
    provideAnimationsAsync(),
  ],
};
