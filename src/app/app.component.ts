import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { MiresponsiveDataComponent } from './library/miresponsive-data/miresponsive-data.component';
import {MatTableModule} from '@angular/material/table';
import { MiresponsiveDataComponent } from './library/miresponsive-data/miresponsive-data.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MiresponsiveDataComponent,MatTableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UiDataList';
  data=[
    {index:0,name:'carlos', edad:36, action:()=>{}},
    {index:1,name:'Juan', edad:36, action:()=>{}},
    {index:2,name:'Leonardo', edad:36, action:()=>{}}
  ];

  ngOnInit(): void {

    this.data.forEach(e=>{
      e.action = ()=> this.deleteRow(e);
    })
    console.log(this.data)
  }



    deleteRow(e:any){
    let index = this.data.indexOf(e)
    this.data.splice(index,1);
    this.data = this.data.map(e=> e)
    console.log('data delte', this.data)
  }

}
