import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve<string> {
  resolve(route: ActivatedRouteSnapshot): Observable<string> {
    // Simulate data fetching
    return of('Resolved Data');
  }
}
