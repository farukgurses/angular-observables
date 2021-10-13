import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false
  private activatedSubscribtion: Subscription

  constructor(private userService: UserService) {}
 
  ngOnInit() {
   this.activatedSubscribtion = this.userService.activatedEmitter.subscribe(didActivate =>{
      this.userActivated = didActivate
    })
  }

  ngOnDestroy(): void {
    this.activatedSubscribtion.unsubscribe()
  }
}
