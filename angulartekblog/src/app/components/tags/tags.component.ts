import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TagService} from '../../services/tag.service';
import {Tags} from '../../models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  public tags;

  constructor(private tagService: TagService) { }
  @Output() deleteTag: EventEmitter<Tags> = new EventEmitter();


  ngOnInit() {
    this.getTags();
  }

  getTags() {
    this.tagService.findAllTags().subscribe(
      data => {
        this.tags = data;
      },
      err => console.log(err),
      () => console.log('users loaded')
    );
  }
  onToggle() {
  }
  onDelete(tag: Tags) {
    this.deleteTag.emit(tag);
    // Delete from UI
    this.tags = this.tags.filter(t => t.tagName !== tag.tagName);
    // Delete from Server
    this.tagService.deleteTags(tag.tagName);
  }
}
