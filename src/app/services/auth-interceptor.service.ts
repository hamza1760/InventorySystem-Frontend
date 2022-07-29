import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  UserService
} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private userService: UserService) {}
  intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
    let token = this.userService.getToken();
    if (!token) {
      return next.handle(req);
    }
    let request = req.clone({
      setHeaders: {
        Authorization: "Bearer " +token
      }
    });
    return next.handle(request);
  }
}
