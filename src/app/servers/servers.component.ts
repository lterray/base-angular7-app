import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreated = false;
  serverCreationStatus = "No server has been created";
  serverName = "TestServer";
  servers = ['test server', 'test server 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created, name is " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

/*  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLTextAreaElement>e.target).value;
  }*/
}
