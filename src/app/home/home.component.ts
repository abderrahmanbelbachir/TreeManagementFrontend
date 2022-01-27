import {Component, OnInit} from '@angular/core';
import {BackendService} from "../Services/backend.service";
import {MatDialog} from "@angular/material/dialog";
import {AddNodeComponent} from "../add-node/add-node.component";
import {DataService} from "../Services/data.service";
import {UpdateNodeComponent} from "../update-node/update-node.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public nodes: any[] = [];
  public tree: any[] = [];

  constructor(private backendService: BackendService, public dialog: MatDialog,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    console.log('ng on init home component !');
    this.getNodes();
    this.loadNodes();
  }

  private getNodes() {
    this.dataService.getNodes().subscribe(value => {
      console.log('got nodes : ' , value);
      this.nodes = value.nodes;
      this.tree = value.tree;
    });
  }

  private loadNodes() {
    this.dataService.loadNodes();
  }

  public openAddNode(): void {
    const dialogRef = this.dialog.open(AddNodeComponent, {
      width: '250px',
      data: {allNodes: this.nodes},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed : ', result);
    });
  }

  public openUpdateNode(node: any): void {
    const dialogRef = this.dialog.open(UpdateNodeComponent, {
      width: '250px',
      data: {allNodes: this.nodes , node: node},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed : ', result);
    });
  }

}
