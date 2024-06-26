import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html'
})
export class EditMemberComponent {

  editMemberForm: FormGroup = new FormGroup({});
  errorMessage: string[] = [];
  error: boolean = false;

  constructor(
    private memberService: MemberService,
    private router: Router,
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.editMemberForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      semester: new FormControl('', [Validators.required]),
      career: new FormControl('', [Validators.required])
    });
  }

  async onSubmint(){

    if(this.editMemberForm.invalid) return;

    try {
      const response = this.memberService.createMember(this.editMemberForm.value).subscribe();
      if(response) console.log('Editado correctamente', response)
    } catch (error : any) {

      if(error.status === 0){
        this.error = true;
        this.errorMessage.push('Error de conexión');
        return;
      }
      console.log('Error al editar la información', error);
      this.error = true;
      this.errorMessage.push(error.error)
    }
      
    }
}
