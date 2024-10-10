import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-tarea',
  templateUrl: './nueva-tarea.component.html',
  styleUrls: ['./nueva-tarea.component.scss'],
})
export class NuevaTareaComponent  implements OnInit {

@Input() task: Task;
form=new FormGroup({
  titulo: new FormControl('', [Validators.required, Validators.minLength(4)]),
  descripcion: new FormControl('',Validators.minLength(4)),
  items: new FormControl([],Validators.minLength(1))

}); 

  constructor() { }

  ngOnInit() {

    if(this.task){
      this.form.setValue(this.task);
      this.form.updateValueAndValidity();

    }
  }

}
