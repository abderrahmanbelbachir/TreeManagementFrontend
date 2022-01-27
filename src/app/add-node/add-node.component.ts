import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BackendService} from "../Services/backend.service";
import {FormControl} from "@angular/forms";
import {DataService} from "../Services/data.service";

export interface DialogData {
  allNodes: any[];
}

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent implements OnInit {

  public selectedNode: FormControl = new FormControl();
  constructor(public dialogRef: MatDialogRef<AddNodeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private backendService: BackendService,
              private dataService: DataService) { }

  ngOnInit(): void {
    this.selectedNode.setValue(1);
  }

  public closeModal(): void {
    this.dialogRef.close();
  }

  public addNode() {
    const nodeRequest: any = {
      successorId: this.selectedNode.value
    }
    console.log('add node : ' , this.selectedNode.value);

    this.backendService.createNode(nodeRequest)
      .done( (data : any) => {
        console.log('saved node : ' , data);
        this.dataService.loadNodes();
        this.closeModal();
      })
      .fail((error: any) => {
        console.error('error saving node : ' , error);
      })
  }


}
