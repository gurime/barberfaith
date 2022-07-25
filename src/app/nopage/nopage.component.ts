import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Router} from '@angular/router';
import { FooterService } from '../footer.service';
@Component({
  selector: 'app-nopage',
  templateUrl: './nopage.component.html',
  styleUrls: ['./nopage.component.css']
})
export class NopageComponent implements OnInit {
  gotohome(){
    this.router.navigate(['/Home'])
  }
  constructor(public nav: NavbarService,
    public foot:FooterService,
    private router: Router ) { }

  ngOnInit(): void {
    this.nav.hide();
    this.foot.hide();
  }

}
