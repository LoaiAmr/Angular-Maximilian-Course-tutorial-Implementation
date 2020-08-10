import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris', 'Anna'];
  product: ProductModel = {
    id: 1,
    title: "ProductTitle",
    description: "product desc",
    price: 5
  };
  
  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    /** it is listening to the keyboard touch */
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    /** it is listening to the status for (valid | Invalid) changes for the keys */
    this.signupForm.statusChanges.subscribe(
      (status) => {console.log(status)}
    );

    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Loai',
    //     'email': 'loai@test.com'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // })

    // this.signupForm.patchValue({
    //   'userData': {
    //     'username' : this.porduct.id,
    //     'email': this.porduct.title
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // })
    // console.log(this.signupForm);
    
  }

  onSubmit(){
    console.log(this.signupForm);
    console.log(this.signupForm.value.userData.username)
    console.log(this.signupForm.value.userData.email)
    console.log(this.signupForm.value.gender)
    console.log(this.signupForm.value.hobbies)
  }

  onAddHobby() { 
    const controls = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(controls);
  }

  
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    /** (control.value) returns -1 when it's valid and other when it's not valid */
    if(this.forbiddenUsernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
        setTimeout(() => {
          if(control.value === 'loai@gmail.com'){
            resolve({'emailForbidden': true});
          } else {
            resolve(null)
          }
        },1500);
    });
    return promise;
  }


}