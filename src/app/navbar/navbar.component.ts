import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
gotohome(){
  this.router.navigate(['/Home'])
}
  constructor(private router: Router, public nav: NavbarService) { }

  ngOnInit(): void {
  }

}
