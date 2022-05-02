import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Directive, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router, private el: ElementRef) {}
  message = 'status: N/A' ;

  ngOnInit(): void {
    if(this.authService.isLoggedIn) {
      this.message = 'Training done'
    }
  }

  login() {
    this.authService.login().subscribe((res) => {
      if (this.authService.isLoggedIn) {
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : 'login';
        this.message = 'Training done'

        this.router.navigateByUrl(redirect);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.message = 'status: N/A'
  }

}

