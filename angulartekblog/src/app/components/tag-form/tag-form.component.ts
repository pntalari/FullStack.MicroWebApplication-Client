import { Component, OnInit } from '@angular/core';
import {Tags} from '../../models/Tag';
import { TagService} from '../../services/tag.service';
import {Tag} from '@angular/compiler/src/i18n/serializers/xml_helper';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {
  model = new Tags(null, '', new Set<Post>());
  submitted = false;

  onSubmit() {
    this.tagService.createTags(this.model);
    this.submitted = true;
  }

  onDelete() {
    this.tagService.deleteTags(this.model.tagName);
    this.submitted = true;
  }

  constructor(private tagService: TagService) { }

  ngOnInit() {
  }

  newTag() {
    this.model = new Tags(null, '', new Set<Post>());

  }

}
