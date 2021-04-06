import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isCollapse = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  searchTechnology(query: string): void {
    this.router.navigate(['/search', query]);
  }

  toggleState(): void {
    const foo = this.isCollapse;
    this.isCollapse = foo === false ? true : false;
  }

}
