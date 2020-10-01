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
  paramMessageFromService: string;
  name = '';
  param = '';
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

  getParamMessage() {
    this.dataService.executeHelloworldBeanParamService(this.param).subscribe(
      response => this.handleParamResponse(response),
      error => this.handleParamErrorResponse(error)
    );
  }

  handleParamResponse(response) {
    this.paramMessageFromService = response.message;
  }

  handleSuccessResponse(response) {
    this.messageFromService = response.message;
  }

  handleErrorResponse(error) {
    if (error.error.message) {
      this.messageFromService = error.error.message;
    } else {
      this.messageFromService = 'Service not available.';
    }
  }
  handleParamErrorResponse(error) {
    if (error.error.message) {
      this.paramMessageFromService = error.error.message;
    } else {
      this.paramMessageFromService = 'Service not available.';
    }
  }
}
