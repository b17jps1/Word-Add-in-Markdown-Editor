import {Component} from '@angular/core';
import {Router, OnActivate, RouteSegment} from '@angular/router';
import {Path} from '../shared/helpers';
import {MarkdownService, WordService} from '../shared/services';

let view = 'file-detail';
@Component({
    templateUrl: Path.template(view, 'file'),
    styleUrls: [Path.style(view, 'file')],
    providers: [MarkdownService, WordService]
})

export class FileDetailComponent implements OnActivate {
    constructor(private _wordService: WordService) { }

    routerOnActivate(current: RouteSegment) {
        let name = current.getParam('id');
        console.log('Loading data for file', name);

        this._wordService.insertHtml(name)
            .then(() => this._wordService.getHtml());
    }

    onPush() {
    }

    onPull() {
    }

    onDiscard() {
    }
}