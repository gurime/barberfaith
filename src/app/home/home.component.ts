import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 

  
  
  constructor(public nav: NavbarService,public foot: FooterService) { }

  ngOnInit(): void {
    this.nav.show();
    this.foot.show();
  }

}
