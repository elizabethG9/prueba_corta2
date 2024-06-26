import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/_services/member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
})
export class CreateMemberComponent implements OnInit{

  createMemberForm: FormGroup = new FormGroup({});
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
    this.createMemberForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      semester: new FormControl('', [Validators.required]),
      career: new FormControl('', [Validators.required])
    });
  }

  async onSubmint(){

    if(this.createMemberForm.invalid) return;

    try {
      const response = this.memberService.createMember(this.createMemberForm.value).subscribe();
      if(response) console.log('Creado correctamente', response)
    } catch (error : any) {

      if(error.status === 0){
        this.error = true;
        this.errorMessage.push('Error de conexión');
        return;
      }
      console.log('Error al crear un miembro', error);
      this.error = true;
      this.errorMessage.push(error.error)
    }
      
    }
}
