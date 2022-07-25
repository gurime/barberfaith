import { Component, OnInit } from '@angular/core';
import { FooterService } from '../footer.service';
import { NavbarService } from '../navbar.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  gotodonate(){
    this.router.navigate(['/Donate'])
  }
  constructor(public nav: NavbarService,public foot: FooterService,private router: Router) { }

  ngOnInit(): void {
    this.nav.show();
    this.foot.show();
  }


}
