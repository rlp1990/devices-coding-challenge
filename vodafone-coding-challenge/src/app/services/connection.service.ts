import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  // Base url for requests
  private baseUrl = 'http://localhost:3000/';

  // Injecting httpClient to make requests
  constructor(private http: HttpClient) { }

  /**
   * Method to make server request type GET
   * @param url Endpoint
   * @param dataHandler To handle server response
   */
  doGet<T>(url: string, dataHandler: Subject<T>): void {
    this.responseHandler(this.http.get<T>(this.baseUrl + url), dataHandler);
  }

  /**
   * Method to make server request type POST
   * @param url Endpoint
   * @param data Data object required for the request
   * @param dataHandler To handle server response
   */
  doPost<T, U>(url: string, data: T, dataHandler: Subject<U>): void {
    this.responseHandler(this.http.post<U>(this.baseUrl + url, data), dataHandler);
  }

  /**
   * Method to make server request type PUT
   * @param url Endpoint
   * @param data Data object required for the request
   * @param dataHandler To handle server response
   */
  doPut<T, U>(url: string, data: T, dataHandler: Subject<U>) {
    this.responseHandler(this.http.put<U>(this.baseUrl + url, data), dataHandler);
  }

  /**
   * Method to make server request type PATCH
   * @param url Endpoint
   * @param data Data object required for the request
   * @param dataHandler To handle server response
   */
  doPatch<T, U>(url: string, data: T, dataHandler: Subject<U>) {
    this.responseHandler(this.http.patch<U>(this.baseUrl + url, data), dataHandler);
  }

  /**
   * Method to make server request type DELETE
   * @param url Endpoint
   * @param data Data object required for the request
   * @param dataHandler To handle server response
   */
  doDelete<T, U>(url: string, data: T, dataHandler: Subject<U>) {
    this.responseHandler(this.http.delete<U>(this.baseUrl + url, data), dataHandler);
  }

  /**
   * Method to subscribe to handle server response
   * @param httpRequest Http object request as observable
   * @param dataHandler To handle server response
   */
  responseHandler<T>(httpRequest: Observable<T>, dataHandler: Subject<T>) {
    httpRequest.subscribe(response => {
      dataHandler.next(response);
    }, error => {
      this.errorHandler(error);
    });
  }

  /**
   * Method to handle error response from server
   * @param error Http error response from server
   */
  errorHandler(error: HttpErrorResponse) {
    console.log(error);
  }
}
