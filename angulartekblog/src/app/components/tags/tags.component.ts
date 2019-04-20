import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TagService} from '../../services/tag.service';
import {Tags} from '../../models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  public tags;
  public filteredTagList: string[] = [];
  @Input() public totalPosts: any[];
  public filteredPost: any[];
  public showing = false;
  @Output() filter = new EventEmitter<any>();

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
  onToggle(tagName: string) {
    if (this.filteredTagList.indexOf(tagName) === -1) {
      this.filteredTagList.push(tagName);
      this.tagService.findFilteredPostsByTag(this.filteredTagList).subscribe(
        (data: any[]) => { this.filteredPost = data; }
      );
    } else if (this.filteredTagList.indexOf(tagName) !== -1 && this.filteredTagList.length === 1) {
      this.nothingToggled();
    } else {
      this.filteredTagList.splice(this.filteredTagList.indexOf(tagName), 1);
      this.tagService.findFilteredPostsByTag(this.filteredTagList).subscribe(
        (data: any[]) => { this.filteredPost = data; }
      );
    }
    setTimeout(() => {this.filter.emit(this.filteredPost); }, 400);
  }

  onDelete(tag: Tags) {
    this.deleteTag.emit(tag);
    // Delete from UI
    this.tags = this.tags.filter(t => t.tagName !== tag.tagName);
    // Delete from Server
    this.tagService.deleteTags(tag.tagName);
    alert('Tag is deleted');
  }

  nothingToggled() {
    this.filteredPost = this.totalPosts;
  }

  changeShowing() {
    this.showing = !this.showing;
  }

}
