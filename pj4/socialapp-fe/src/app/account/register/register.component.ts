import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
import { SharedService } from '../../shared/shared.service';
import { ToastrService } from 'ngx-toastr';
import { Country } from '../../shared/models/user/country.model';
import { City } from '../../shared/models/user/city.model';
import { State } from '../../shared/models/user/state.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VerificationComponent } from '../verification/verification.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  errorMessage: string[] = [];
  maxDate = new Date();
  listCountry!: Country[]
  countrySelected!: string;
  listState!: State[]
  selectedState!: string
  listCity!: City[]
  modalRef?: BsModalRef;

  constructor(
    private accountService: AccountService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private modalService: BsModalService 
  ) {
    const user = accountService.user$();
    if (user) {
      this.router.navigate(['/members/member-lists']);
    }
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      knowAs: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      dateOfBirth: ['', [Validators.required, this.ageValidator(18)]],
      gender: ['male'],
      country: [''],
      state: [''],
      city: [''],
      pass: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      confirmPassword: ['', [Validators.required, this.matchValues('pass')]],
    });

    this.registerForm.controls['pass'].valueChanges.subscribe({
      next: _ => this.registerForm.controls['confirmPassword'].updateValueAndValidity(),
    });
  }

  private ageValidator(minAge: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (!control.value) {
        return null;
      }

      const today = new Date();
      const birthDate = new Date(control.value);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age >= minAge ? null : { 'underage': { requiredAge: minAge, actualAge: age } };
    };
  }

  matchValues(mathTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value === control.parent?.get(mathTo)?.value ? null : {isMatching: true};
    }
  }

  register() {
    this.submitted = true;
    this.errorMessage = [];
  
    if (this.registerForm.valid) {
      const formValues = { ...this.registerForm.value };
  
      if (formValues.dateOfBirth) {
        const dob = new Date(formValues.dateOfBirth);
        formValues.dateOfBirth = dob.toISOString().split('T')[0];
      }
  
      this.accountService.register(formValues).subscribe({
        next: _ => {
          this.accountService.setEmail(formValues.email);
          const initialState = {};
          this.modalRef = this.modalService.show(VerificationComponent, { 
            initialState 
           });
          this.modalRef.content.verified.subscribe((verified: boolean) => {
            if (verified) {
              this.modalRef?.hide(); 
              this.router.navigateByUrl('/account/login');
            }
          });
        },
        error: (error) => {
          if (error.error.errors) {
            this.errorMessage = error.error.errors;
            this.toastr.error(error.error.errors);
          } else {
            this.errorMessage.push(error.error);
            this.toastr.error(error.error);
          }
        }
      });
    }
  }
  
  
}
