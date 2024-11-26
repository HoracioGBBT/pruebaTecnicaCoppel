import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Branch } from '../../../../../domain/models/branch';


@Component({
    selector: 'save-branch-component',
    templateUrl: './save-branch.component.html',
})

export class SaveBranchComponent implements OnInit {
    branchForm!: FormGroup;
    @Input() idBranch!: number;
    loading: boolean = false;
    fields: boolean = false;
    currentBranch?: Branch;

    constructor(
        private formBuilder: FormBuilder,

    ) { }

    async ngOnInit() {

    }




}