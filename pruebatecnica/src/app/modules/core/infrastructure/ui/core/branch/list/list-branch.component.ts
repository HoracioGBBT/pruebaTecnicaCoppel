import { Component, OnInit, Inject, Input, EventEmitter } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from "@angular/router";


@Component({
    templateUrl: './list-branch.component.html',
})

export class ListBranchComponent implements OnInit {



    constructor(
  
        private router: Router
    ){}

    async ngOnInit(): Promise<void> {
        console.log('Entro acas')
    }

}
