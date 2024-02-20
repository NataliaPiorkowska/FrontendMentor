import { Component } from '@angular/core';
import { ApiService } from '../services/api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Advice } from './domain/advice';
import { CommonModule } from '@angular/common';
import { AdviceCardComponent } from "./components/advice-card/advice-card.component";

@Component({
    selector: 'app-root',
    standalone: true,
    providers: [ApiService],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HttpClientModule, CommonModule, AdviceCardComponent]
})
export class AppComponent  {

}
