import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

    public intercept ( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        const accesstoken ='4dc879d1dd90ce2cc37f7f9c02c3329236626aa9';


        // If userToken exists, clone the http request and add the userToken as the Bearer token

        if ( accesstoken ) {
          const tokenReq: HttpRequest<any> = req.clone( {
            setHeaders: {
              Authorization: `Bearer ${ accesstoken }`
            }
          } );
          return next.handle( tokenReq );
        }
        else {
            // Request without authorization token header
            return next.handle(req);
          }

      }



}
