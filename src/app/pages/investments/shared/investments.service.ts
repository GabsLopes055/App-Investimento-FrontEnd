import { environment } from './../../../../environments/environment.development';
import { Investment } from './investments.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class investmentsService {

    constructor(
        private httpClient: HttpClient
    ) { }

    public listInvestmentsByClientId(id: number): Observable<Investment[]> {

        const url = `${environment.baseUrlBackend}/clients/${id}/investments`;
        
        return this.httpClient.get(url, {responseType: 'json'}).pipe(
            map(this.mapToInvetments)
        )
    }

    public mapToInvetments(data: any): Investment[] {

        const listInvestments: Investment[] = []

        data.forEach((e: any) => listInvestments.push(Object.assign(new Investment, e)));
        
        return listInvestments;

    }
}