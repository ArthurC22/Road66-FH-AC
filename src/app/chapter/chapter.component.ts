import {Component, Input} from "@angular/core";
import {Chapter} from "../model/Chapter.model";

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent {

  @Input() chapters: Chapter[];

  constructor() { }

}
