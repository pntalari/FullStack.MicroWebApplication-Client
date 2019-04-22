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
  public filteredTagList: any[];
  @Input() public totalPosts: any[];
  @Output() filter = new EventEmitter<any>();
  public filteredPost: any[];
  public showing: boolean;

  constructor(private tagService: TagService) { }
  @Output() deleteTag: EventEmitter<Tags> = new EventEmitter();


  ngOnInit() {
    this.getTags();
    this.filteredTagList = [];
    this.showing = false;
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

  nothingToggled() {
    this.filteredPost = this.totalPosts;
  }

  changeShowing() {
    this.showing = !this.showing;
  }

  changeFiltered(tagName: string, event) {
    if (event.checked) {
      this.filteredTagList.push(tagName);
    } else {
      this.filteredTagList.splice(this.filteredTagList.indexOf(tagName), 1);
    }
    this.getPosts();
  }

  private getPosts() {
    if (this.filteredTagList.length === 0 ) {
      this.filteredPost = this.totalPosts; this.filter.emit(this.filteredPost);
    } else {
      this.tagService.findFilteredPostsByTag(this.filteredTagList).subscribe(
        (data: any[]) => {
          this.filteredPost = data; this.filter.emit(this.filteredPost);
        }
      );
    }
  }
}
