import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data!: any[];
  editedRowIndex!: number;

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    // this.http.get<any[]>('https://api.example.com/data')
    //   .subscribe((data: any) => {
    //     this.data = data;
    //   });
    this.data = [];
  }

  editRow(rowIndex: number) {
    this.editedRowIndex = rowIndex;
  }

  saveRow(rowIndex: number) {
    // Save the changes to your data source
    // For example, you can send an HTTP request to update the data
    this.editedRowIndex = -1;
  }

  cancelEdit(rowIndex: number) {
    // Cancel editing and revert changes
    this.editedRowIndex = -1;
  }
}
