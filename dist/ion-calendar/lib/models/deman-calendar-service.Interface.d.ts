import { Observable } from 'rxjs';
export default interface DemandCalendarService {
    get(latitude: any, longitude: any): Observable<any[]>;
}
