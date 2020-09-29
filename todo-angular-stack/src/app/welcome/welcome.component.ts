import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = 'Welcome ';
  messageFromService: string;
  name = '';
  // ActivatedRoute

  constructor(private route: ActivatedRoute,
              private dataService: WelcomeDataService) { }

  ngOnInit(): void {
    console.log('invoke onInit method. ' + this.message);
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    //console.log(this.dataService.executeHelloworldBeanService());
    this.dataService.executeHelloworldBeanService().subscribe(
      response => this.handleSuccessResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log('last line of getWelcomeMessage');
  }

  handleSuccessResponse(response) {
    // console.log('Welcome--> ' + response.message);
    this.messageFromService = response.message;
  }
  handleErrorResponse(error) {
    this.messageFromService = error.error.message;
  }
}
