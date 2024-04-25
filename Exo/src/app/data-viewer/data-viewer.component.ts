import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-viewer',
  templateUrl: './data-viewer.component.html',
  styleUrl: './data-viewer.component.css'
})
export class DataViewerComponent {

  data: any; 

  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
    });
  }



}