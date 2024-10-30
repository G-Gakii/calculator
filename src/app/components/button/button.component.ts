import { Component, effect } from '@angular/core';
import { CalcService } from '../../service/calc.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  evalInput: string[] = [];
  evalString = '';
  position = 1;
  constructor(private service: CalcService) {
    effect(() => {
      this.position = this.service.position();
    });
  }
  getUserInput(value: string) {
    this.evalString = this.evalString + value;

    this.service.userInput.set(this.evalString);
  }

  getResults() {
    let result = eval(this.service.userInput());
    this.service.userInput.set(result);
  }
  reset() {
    this.evalString = '';
    this.service.userInput.set(this.evalString);
  }
  Delete() {
    this.evalString = this.evalString.slice(0, -1);
    this.service.userInput.set(this.evalString);
  }
}
