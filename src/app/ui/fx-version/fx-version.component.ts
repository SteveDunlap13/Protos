
import { Component, NgModule, VERSION } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';



@Component({
    selector: 'fx-version',
    template: `
      <div style="position: relative; margin: 0 auto;font-size:1em;color:red;margin-left: 1em;">
        {{activeMediaQuery}}
      </div>
  `
})
export class FxVersionComponent {

    activeMediaQuery = '';

    constructor(private media: ObservableMedia) {

        //this.version = fxVersion;
        media.subscribe((change: MediaChange) => {

            if (change.mediaQuery.indexOf('orientation') > -1) {
                return;
            }
            let value = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
            this.activeMediaQuery = value;
        });
    }
}
