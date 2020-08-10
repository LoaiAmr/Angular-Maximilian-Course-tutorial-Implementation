import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answerOfQuestion = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuesion: '',
    answer: '',
    gender: '',
  }
  submitted = false;


  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(){
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuesion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.qustionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset();
  }
}
