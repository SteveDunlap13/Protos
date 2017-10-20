
import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigurationService } from './services';



@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./css/protos-material.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private configService: ConfigurationService) { }


  ngOnInit(): void { }
}
