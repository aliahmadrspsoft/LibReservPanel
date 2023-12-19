
import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpBackend, HttpParams,HttpHeaders } from '@angular/common/http';
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CellCalenderReservation,Month,Calender } from './component-range-date-picker/cell-calender-reservation.model';
@Injectable({ providedIn: 'root' })
export class LibReservPanelService {
  constructor(
    private handler: HttpBackend,
    private http: HttpClient,
    @Inject('env') private environment:any
  ) {
   // this.http = new HttpClient(handler); /// to skip interceptors, becouse this service hits third backend provider
  }

  get(RentItemID: string, StartDate: string, EndDate: string,MiladiStartDate : string, MiladiEndDate: string, Act: string): Observable<Calender> {
    let params = new HttpParams();
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new Headers(headerDict), 
    };
    params = params.append('StartDate', StartDate);
    params = params.append('EndDate', EndDate);
    params = params.append('RentItemID', RentItemID);
    params=params.append('Act',Act);
    params=params.append('MiladiStartDate',MiladiStartDate);
    params=params.append('MiladiEndDate',MiladiEndDate);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: params
    };
    return this.http.get<Month[]>(`${this.environment.LibReservPanel.host}/`, httpOptions)
      .pipe(map((data: any) => {
        console.log(data);
        return data;
      })
      );
  }
}

