import { Component, OnInit } from '@angular/core';
import {ChapterService} from '../chapter.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  chapters: JSON;

  constructor(private chapterService: ChapterService) { }

  ngOnInit() {
    this.chapterService.getChapter().subscribe(chapters => this.chapters = chapters['Chapters']);
  }

}
