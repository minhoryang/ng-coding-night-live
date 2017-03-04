import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-seamless',
  template: `
  `,
})
export class AccountsGoogleLoginComponent implements OnInit {
  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    // FIXME: don't use this.
    this.router.navigate([
      'services',
    ]);
  }
}
