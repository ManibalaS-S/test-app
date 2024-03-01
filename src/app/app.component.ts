import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data!: any[];
  editedRowIndex!: number;

  constructor(private http: HttpClient) { }

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
