import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, AbstractControl, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe-form',
  templateUrl: './subscribe-form.component.html',
  styleUrls: ['./subscribe-form.component.css']
})
export class SubscribeFormComponent implements OnInit {
  // inputTitle = new FormControl('Initial value')
  subscribeForm: FormGroup;
  firstName: AbstractControl
  lastName
  age
  email
  password
  passwordRepeated
  terms

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // this.subscribeForm = new FormGroup({
    //   firstName: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   lastName: new FormControl('', [Validators.required]),
    //   age: new FormControl(0, [Validators.required, Validators.min(12)]),
    //   email: new FormControl('', [Validators.required]),
    //   password: new FormControl('', [Validators.required]),
    //   passwordRepeated: new FormControl('', [Validators.required]),
    //   terms: new FormControl(false)
    // })

    this.subscribeForm = this.fb.group({
      firstName: ['', [
        Validators.required,
        Validators.minLength(4),
        this.mosheValidator
      ]],
      lastName: ['', [Validators.required]],
      age: [, [Validators.required, Validators.min(12)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        this.passwordValidator
      ]],
      passwordRepeated: ['', [Validators.required]],
      terms: [new FormControl(false), [Validators.requiredTrue]]
    }, {
      validators: this.passwordRepeatedValidator
    })

    this.firstName = this.subscribeForm.get('firstName')
    this.lastName = this.subscribeForm.get('lastName')
    this.age = this.subscribeForm.get('age')
    this.email = this.subscribeForm.get('email')
    this.password = this.subscribeForm.get('password')
    this.passwordRepeated = this.subscribeForm.get('passwordRepeated')
    this.terms = this.subscribeForm.get('terms')
  }

  // onClickButtonDefault() {
  //   this.inputTitle.setValue('Default')
  // }

  invalidFirstNameMessage() {
    const errors = this.firstName.errors
    if (errors?.required) {
      return 'You must enter your first name.'
    }
    if (errors?.minlength) {
      return 'First name must be at least 4 characters.'
    }
    if (errors?.namemoshe) {
      return 'First name cannot be MOSHE!!!'
    }
  }

  invalidAgeMessage() {
    const errors = this.age.errors
    if (errors?.required) {
      return 'You must enter your age.'
    }

    if (errors?.min) {
      return 'You must be at least 12 years old to signup.'
    }
  }

  invalidPsswordMessage() {
    const errors = this.password.errors
    if (errors?.required) {
      return 'You must enter password'
    }
    if (errors?.passwordinvalid) {
      return 'Passwors must incluse digits and cannot contain white spaces'
    }
  }

  invalidPsswordRepeatedMessage() {
    if (this.passwordRepeated.errors?.required) {
      return 'You must repeat on the password'
    }

    if (this.subscribeForm.errors?.passwordnotrepeated) {
      return 'Two passwords must ne identical.'
    }
  }

  mosheValidator(control: AbstractControl): ValidationErrors | null {
    const invalid = control.value.trim().toLowerCase() === 'moshe'
    return invalid ? { 'namemoshe': control.value } : null
  }

  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const isIncludesWhiteSpace = control.value.includes(' ')
    const isIncludesDigits = (/\d/).exec(control.value)
    const invalid = !isIncludesDigits || isIncludesWhiteSpace
    return invalid ? { 'passwordinvalid': true } : null
  }

  passwordRepeatedValidator(control: FormGroup): ValidationErrors | null {
    const password = control.get('password').value
    const passwordRepeated = control.get('passwordRepeated').value
    return password !== passwordRepeated ? { 'passwordnotrepeated': true } : null
  }

  onSubmitSubscribeForm() {
    // console.log(this.subscribeForm.get('lastName').value)
    this.router.navigate(['/rooms'])
  }

  // ng serve --liveReload=false

}
