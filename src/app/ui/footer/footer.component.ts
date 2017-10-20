
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';



@Component({
    selector: 'protos-footer',
    styleUrls: ['./footer.component.scss'],
    templateUrl: 'footer.component.html'
})
@AutoUnsubscribe()
export class FooterComponent implements OnInit, OnDestroy {

    constructor() { }


    ngOnInit(): void { }
    ngOnDestroy(): void { }
}
