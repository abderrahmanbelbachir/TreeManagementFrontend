import { Injectable } from '@angular/core';
import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  private apiUrl = 'http://localhost:3000/';

  public getNodes() {
    return $.ajax({
      url: this.apiUrl + 'node',
      type: 'GET',
      contentType: 'application/json; charset=utf-8',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json, text/plain'
      }
    });
  }

  public createNode(node: any) {
    return $.ajax({
      url: this.apiUrl + 'node',
      type: 'POST',
      contentType: 'application/json; charset=utf-8',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json, text/plain'
      },
      data: JSON.stringify(node)
    });
  }

  public updateNode(node: any) {
    return $.ajax({
      url: this.apiUrl + 'node/'+ node.id,
      type: 'PATCH',
      contentType: 'application/json; charset=utf-8',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json, text/plain'
      },
      data: JSON.stringify(node)
    });
  }

  public deleteNode(node: any) {
    return $.ajax({
      url: this.apiUrl + 'node/'+ node.id,
      type: 'DELETE',
      contentType: 'application/json; charset=utf-8',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Accept': 'application/json, text/plain'
      }
    });
  }

}
