import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DisplayComponent } from '../display/display.component';
import { ButtonComponent } from '../button/button.component';
import { CalcService } from '../../service/calc.service';

@Component({
  selector: 'app-mycalculator',
  standalone: true,
  imports: [CommonModule, DisplayComponent, ButtonComponent],
  templateUrl: './mycalculator.component.html',
  styleUrl: './mycalculator.component.css',
})
export class MycalculatorComponent {
  position = 1;
  constructor(private service: CalcService) {}
  togglePosition() {
    console.log('clicked');

    if (this.position === 1) {
      this.position = 2;
    } else if (this.position === 2) {
      this.position = 3;
    } else {
      this.position = 1;
    }
    this.service.position.set(this.position);
    console.log(this.service.position());
  }
  positionOne() {
    this.position = 1;
    this.service.position.set(this.position);
  }
  positionTwo() {
    this.position = 2;
    this.service.position.set(this.position);
  }
  positionThree() {
    this.position = 3;
    this.service.position.set(this.position);
  }
}
