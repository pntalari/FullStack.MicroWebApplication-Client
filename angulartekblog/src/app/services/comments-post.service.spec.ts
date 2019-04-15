import { TestBed } from '@angular/core/testing';

import { CommentsPostService } from './comments-post.service';

describe('CommentsPostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentsPostService = TestBed.get(CommentsPostService);
    expect(service).toBeTruthy();
  });
});
