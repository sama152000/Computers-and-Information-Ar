import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Pages/shared/header/header.component";
import { FooterComponent } from './Pages/shared/footer/footer.component';

@Component({
  selector: 'app-Computers-and-Information',
  templateUrl: './Computers-and-Information.component.html',
  styleUrls: ['./Computers-and-Information.component.css'],
  imports: [RouterOutlet, HeaderComponent,FooterComponent]
})
export class ComputersAndInformationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
