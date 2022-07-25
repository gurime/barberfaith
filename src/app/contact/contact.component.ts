import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public nav: NavbarService,public foot: FooterService) { }

  ngOnInit(): void {
    this.nav.show();
    this.foot.show();
  }

}
