import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length: number;
  password: string;
  includeLetters: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;

  constructor() {
    this.password = '';
    this.includeLetters = false;
    this.includeNumbers = false;
    this.includeSymbols = false;
    this.length = 0;
  }

  onChangeLength(value: string){
    const parseValue = parseInt(value);

    if(!isNaN(parseValue)){
      this.length = parseValue;
    }
  }

  select(type: string) {
    if(type == 'letter') {
      this.includeLetters = !this.includeLetters;
    } else if(type == 'number'){
      this.includeNumbers = !this.includeNumbers;
    } else {
      this.includeSymbols = !this.includeSymbols;
    }
  }

  onButtonClicked(){
    const numbers = '0123456789';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '?!@#$%^&*()';

    let validChars = '';

    if(this.includeLetters) {
      validChars += letters;
    }

    if(this.includeNumbers) {
      validChars += numbers;
    }

    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0; i<this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
