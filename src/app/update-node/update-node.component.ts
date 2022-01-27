import {Component, Inject, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BackendService} from "../Services/backend.service";
import {DataService} from "../Services/data.service";

export interface DialogData {
  allNodes: any[];
  node: any;
}

@Component({
  selector: 'app-update-node',
  templateUrl: './update-node.component.html',
  styleUrls: ['./update-node.component.scss']
})
export class UpdateNodeComponent implements OnInit {

  public selectedNode: FormControl = new FormControl();
  constructor(public dialogRef: MatDialogRef<UpdateNodeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private backendService: BackendService,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.selectedNode.setValue(this.data.node.successorId);
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public updateNode() {
    const nodeRequest: any = {
      id: this.data.node.id,
      successorId: this.selectedNode.value
    }
    console.log('update node : ' , nodeRequest);

    this.backendService.updateNode(nodeRequest)
      .done( (data : any) => {
        console.log('updated node : ' , data);
        this.dataService.loadNodes();
        this.closeModal();
      })
      .fail((error: any) => {
        console.error('error saving node : ' , error);
      });

  }

  public deleteNode() {
    const nodeRequest: any = {
      id: this.data.node.id,
    }
    console.log('deleted node : ' , nodeRequest);

    this.backendService.deleteNode(nodeRequest)
      .done( (data : any) => {
        console.log('deleted node : ' , data);
        this.dataService.loadNodes();
        this.closeModal();
      })
      .fail((error: any) => {
        console.error('error saving node : ' , error);
      })
  }


}
