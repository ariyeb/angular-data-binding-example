import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-example',
  templateUrl: './data-binding-example.component.html',
  styleUrls: ['./data-binding-example.component.css']
})
export class DataBindingExampleComponent implements OnInit {
  title = 'angular-data-binding!!!';
  inputPlaceHolder = "Enter Text"
  isButtonDisabled = false
  mouseDivX = "0"
  mouseDivY = "0"
  buttonClasses = {
    'red-background': this.isButtonDisabled,
    'blue-background': !this.isButtonDisabled
  }
  buttonCounter = 0
  buttonCounterClasses = {};
  isEmailValid = true
  persons = [
    {
      name: 'moshe',
      age: 24
    },
    {
      name: 'dan',
      age: 56
    },
    {
      name: 'yaffa',
      age: 9
    }
    // {
    //   name: 'david',
    //   age: 12
    // }
  ]
  messages = []
  squares = []
  selectValue = "full"

  ngOnInit() {
    for (let i = 0; i < 64; i++) {
      this.squares.push({
        isPieceExist: false
      })
    }
  }

  returnHelloWorld() {
    return 'Helloo World'
  }

  onclickButtonEnable() {
    this.isButtonDisabled = !this.isButtonDisabled

    this.buttonClasses = {
      'red-background': this.isButtonDisabled,
      'blue-background': !this.isButtonDisabled
    }
  }

  onInputInputTitle(event) {
    // console.log(event)
    const text: string = event.target.value

    if (text.length === 0) {
      this.title = 'Data Binding Example'
      return;
    }

    this.title = text
  }

  onMousemoveInMouseDiv(event) {
    this.mouseDivX = event.offsetX
    this.mouseDivY = event.offsetY
  }

  onClickButtonCounter() {
    this.buttonCounter = this.buttonCounter < 3 ? this.buttonCounter + 1 : 0;
    switch (this.buttonCounter) {
      case 0:
        this.buttonCounterClasses = {}
        break;
      case 1:
        this.buttonCounterClasses = {
          'yellow-background': true
        }
        break;
      case 2:
        this.buttonCounterClasses = {
          'yellow-background': true,
          'blue-border': true
        }
        break;
      case 3:
        this.buttonCounterClasses = {
          'yellow-background': true,
          'blue-border': true,
          'red-text': true
        }
        break;
    }

  }

  onInputInInputEmail(event) {
    const text = event.target.value
    if (text.length === 0) {
      this.isEmailValid = true
    }

    const emailRegEx: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.isEmailValid = emailRegEx.test(text) ? true : false
  }

  onClickAddMessage(input) {
    this.messages.push(input.value)
    input.value = ""
  }

  isSquareBlack(index: number) {
    const isEvenColumn = index % 2 === 0;
    const isEvenRow = Math.floor(index / 8) % 2 === 0;

    if (isEvenRow) {
      return isEvenColumn ? false : true
    } else {
      return isEvenColumn ? true : false
    }
  }

  onClickSquare(index) {
    if (this.isSquareBlack(index)) {
      this.squares[index].isPieceExist = !this.squares[index].isPieceExist
    }
  }

  onChangeSelect(event) {
    this.selectValue = event.target.value
  }



}
