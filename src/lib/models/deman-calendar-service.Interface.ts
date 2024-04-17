import { Observable } from 'rxjs';

export default interface DemandCalendarService {
    get(latitude, longitude): Observable<any[]>
}