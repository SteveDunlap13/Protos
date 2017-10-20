
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

import { Store } from 'redux';

import { AppStore } from '../../app.store';
import { AppState } from '../../app.state';
import * as ProtosActions from '../../protos.actions';




@Component({
    selector: 'protos-home',
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html'
})
@AutoUnsubscribe()
export class HomeComponent implements OnInit, OnDestroy {

    constructor( @Inject(AppStore) private store: Store<AppState>) { }


    ngOnInit(): void {

        this.store.dispatch(ProtosActions.setHeaderTitle('Protos'));
    }
    ngOnDestroy(): void { }
}
