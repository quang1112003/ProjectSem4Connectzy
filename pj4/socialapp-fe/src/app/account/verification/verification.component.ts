import { AfterViewInit, Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AccountService } from '../account.service';
import { ToastrService } from 'ngx-toastr';
import { Verify } from '../../shared/models/account/register.model';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrl: './verification.component.scss'
})
export class VerificationComponent implements OnInit {
  modalRef?: BsModalRef;
  @Output() verified = new EventEmitter<boolean>();
  verifyForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private accountService: AccountService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.verifyForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('^[0-9]+$')]]
    });
  }

  onSubmit() {
    if (this.verifyForm.valid) {
      const email = this.accountService.getEmail(); 
      if (!email) {
        this.toastr.error('Email not found');
        return;
      }
  
      const model: Verify = {
        email: email,  
        code: this.verifyForm.get('code')?.value
      };
  
      this.accountService.verify(model).subscribe({
        next: (response: any) => {
          this.toastr.success(response.message);
          this.verified.emit(true);
          this.modalRef?.hide();  // Đóng modal khi xác thực thành công
        },
        error: (error) => {
          this.toastr.error(error.error.message);
        }
      });
    } else {
      this.verifyForm.markAllAsTouched(); 
    }
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

}
