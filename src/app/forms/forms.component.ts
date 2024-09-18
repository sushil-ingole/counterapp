import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.form2 = this.formBuilder.group({
      username2: '',
      hobbies: this.formBuilder.array([]),
      email: ['', [Validators.required, Validators.email]]
    });
    console.log(this.route.snapshot.data['data']);
  }
  form2!: FormGroup;
  onSubmit1(form1: any): void {
    console.log(form1);
  }
  onSubmit2(form2: any): void {
    console.log(form2);
  }
  get hobbiesFromArray() {
    return this.form2.get('hobbies') as FormArray;
  }
  addHobby(): void {
    const hobby = this.formBuilder.control('');
    this.hobbiesFromArray.push(hobby);
  }
}
