import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  length = 0;
  includeSymbols = false;
  includeNumbers = false;
  includeLetters = false;
  password = '';

  onChangeLength(value: string) {
    // all data from html is a string
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onButtonClick() {
    // data to choose from
    const numbers = '1234567890';
    const letters = 'qwertyuiopasdfghjklzxcvbnm';
    const symbols = '!@#$%^&*():"<>?,./-=|';
    // characters that pw must be made of
    let validChars = '';

    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    // generateing actual pw by randomly selecting from validChars
    let generatePassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars[index];
    }
    this.password = generatePassword;
  }



  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

}

