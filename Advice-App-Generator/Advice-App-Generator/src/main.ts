import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { enableProdMode } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient()
  ],
}).catch((err) => console.error(err));
