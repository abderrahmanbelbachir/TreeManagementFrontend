import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {BackendService} from "./backend.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public nodesObservable = new Subject<any>();

  constructor(private backendService: BackendService) { }


  public loadNodes() {
    const nodes: any[] = [];
    const tree: any[] = []
    this.backendService.getNodes()
      .done((data: any[]) => {
        // loop nodes to build children and children of each child
        for (const node of data) {
          if (node.successorId) {
            if (!data.filter(n => n.id === node.successorId)[0].children) {
              data.filter(n => n.id === node.successorId)[0].children = [];
            }
            data.filter(n => n.id === node.successorId)[0].children.push(node);
          }

          // to keep all nodes list in case we needed ( for example : to add a node )
          nodes.push(node);
        }

        // loop to push only rots (containing children and their children)
        for (const node of data) {
          if (!node.successorId) {
            tree.push(node);
          }

        }
        this.nodesObservable.next({nodes: nodes, tree: tree});

      })
      .fail((error: any) => {
        console.log('error loading nodes : ', error);
      });
  }

  public getNodes(): Observable<any> {
    return this.nodesObservable.asObservable();
  }

}
