import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { Technology } from '../../models/technology.model';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  public technology: Technology = {
    _id: '',
    name: '',
    description: '',
    logo: '',
    tags: [],
    createdAt: null,
    updatedAt: null
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params.id;
      this.httpService.getTechnology(id).subscribe((technology: Technology) => {
        this.technology = technology['data'];
      });
    });
  }

}
