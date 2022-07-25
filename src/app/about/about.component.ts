import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  gotomission(){
    this.router.navigate(['/Mission'])}
  constructor(public nav: NavbarService,public foot: FooterService,private router: Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.foot.show();
  }

}
