import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Chapter} from '../model/Chapter.model';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent {

  @Input() chapters: Chapter[];
  @Output() onChapter = new EventEmitter<number>();

  constructor() { }

  onSelect(chapter: Chapter) {
    this.onChapter.emit(chapter.pos);
  }
}
