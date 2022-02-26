import { ConnectionService } from './../../../../services/connection.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormBase } from '../../models/form.base';

@Injectable({
  providedIn: 'root'
})
export class IndustryFormService {

  createUrl: string = "industries";

  // Injecting connectionService to make server requests
  constructor(private connectionService: ConnectionService) { }

  /**
   * Method to create a new Industry
   * @param data Object data to make the server request
   * @param dataHandler To handle server response
   */
  createNewIndustry(data: FormBase, dataHandler: Subject<FormBase[]>): void {
    this.connectionService.doPut(this.createUrl, data, dataHandler);
  }

  /**
   * Method to create a update an existing Industry
   * @param data Object data to make the server request
   * @param dataHandler To handle server response
   */
  updateIndustry(data: FormBase, dataHandler: Subject<FormBase[]>): void {
    this.connectionService.doPut(this.createUrl, data, dataHandler);
  }

  /**
   * Method to create a delete an existing Industry
   * @param data Object data to make the server request
   * @param dataHandler To handle server response
   */
  deleteIndustry(data: number, dataHandler: Subject<FormBase[]>): void {
    this.connectionService.doPut(this.createUrl, data, dataHandler);
  }

}
