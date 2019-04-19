import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TagService} from '../../services/tag.service';
import {Tags} from '../../models/Tag';
import {Post} from '../../models/Post';
import {forEach} from '@angular/router/src/utils/collection';
import {BlogApiService} from '../../services/blog.api.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  public tags;
  public filteredTagList: string[] = [];
  public filteredPost;

  constructor(private tagService: TagService, private blogApiService: BlogApiService) { }
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
      this.filteredPost = this.tagService.findFilteredPostsByTag(this.filteredTagList);
    } else if (this.filteredTagList.indexOf(tagName) !== -1 && this.filteredTagList.length === 1) {
      this.filteredTagList = [];
      this.filteredPost = this.nothingToggled();
    } else {
      this.filteredTagList.splice(this.filteredTagList.indexOf(tagName), 1);
      this.filteredPost = [];
      this.filteredPost = this.tagService.findFilteredPostsByTag(this.filteredTagList);
    }
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
    // const allTags = this.tags;
    // const allTagNames = [];
    // const allPost = [];
    // allTags.forEach(tag => {
    //   allTagNames.push(tag.tagName);
    // });
    // allTagNames.forEach(tagNames => {
    //   this.tagService.findPostsByTag(tagNames).subscribe(data => this.filteredPost = data);
    // }, err => console.log(err));
  }
}
