import { Component, effect } from '@angular/core';
import { CalcService } from '../../service/calc.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css',
})
export class DisplayComponent {
  evalData = '';
  position = 1;
  constructor(private service: CalcService) {
    effect(() => {
      this.evalData = service.userInput();
      this.position = service.position();
    });
  }
}
