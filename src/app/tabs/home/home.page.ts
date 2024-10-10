import { Component, OnInit } from '@angular/core';
import { NuevaTareaComponent } from 'src/app/compartido/componentes/nueva-tarea/nueva-tarea.component';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tasks: Task[] =[

    {
      titulo: 'Tarea 1',
      descripcion: 'Descripcion tarea 1',
      items: [
        {completado:true}
      ]
    }

  ]

  constructor() { }

  ngOnInit() {
  }

  addOrUpdateTask(task?: Task){

    this.utilsSvc.presentModal({
      component: NuevaTareaComponent,
      componentProps:{task}

    })

  }

}
