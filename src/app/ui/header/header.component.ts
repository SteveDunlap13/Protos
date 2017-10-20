
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Store } from 'redux';

import { AppStore } from '../../app.store';
import { AppState } from '../../app.state';
import * as ProtosActions from '../../protos.actions';



@Component({
    selector: 'protos-header',
    styleUrls: ['./header.component.scss'],
    templateUrl: 'header.component.html'
})
@AutoUnsubscribe()
export class HeaderComponent implements OnInit, OnDestroy {

    private title: string;


    constructor( @Inject(AppStore) private store: Store<AppState>) { }


    ngOnInit(): void {

        this.store.subscribe(() => this.readState());
        this.readState();
    }
    ngOnDestroy(): void { }


    private readState() {

        const state: AppState = this.store.getState() as AppState;
        this.title = state.headerTitle;
    }
}
