import {Component, OnInit} from '@angular/core';
import {ChapterService} from './chapter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Porject 66';
  videoPos = 0;

  fileContent: JSON;

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.chapterService.getJsonFile().subscribe(content => this.fileContent = content);
    console.log(this.fileContent);
  }

  onChapterChange(pos: number) {
    console.log(pos);
    this.videoPos = pos;
  }
}
