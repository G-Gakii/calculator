import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  userInput = signal('');
  position = signal(1);

  constructor() {}
}
