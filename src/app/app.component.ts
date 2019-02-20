import { Component } from '@angular/core';
import { RouterLink } from '@angular/router/src/directives/router_link';
import {Router,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eddi2web';

  constructor(private router:Router) { }

  submitted = false;

  onClickSubmit(data) {
    this.submitted = true;
    //this.router.navigate(['/new-cmp']);
  }
}
