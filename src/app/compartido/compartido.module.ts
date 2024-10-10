import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { InputComponent } from './componentes/input/input.component';
import { NuevaTareaComponent } from './componentes/nueva-tarea/nueva-tarea.component';




@NgModule({
  declarations: [HeaderComponent,InputComponent],
  exports: [HeaderComponent,InputComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    InputComponent,
    HeaderComponent,
    NuevaTareaComponent
  ]
})
export class CompartidoModule { }
