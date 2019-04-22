import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Tags } from 'src/app/models/Tag';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({providedIn: 'root'})

export class TagService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  findAllTags() {
    return this.http.get('server/tags');
  }

  findFilteredPostsByTag(tagNames: string[]) {
    const url = 'server/tags/filteredPosts/' + tagNames;
    return this.http.get(url);
  }

  createTags(tag: Tags) {
    this.http.post('server/createTag', JSON.stringify(tag),
      httpOptions).subscribe(data => {console.log(data); },
      err => console.log('error'));
  }
  // addTags(tag: Tags): Observable<any> {
  //   return this.http.post(this.tagUrl, tag, httpOptions);
  // }

  updateTags(id: number, tag: Tags) {
    const url = 'server/updateTag/${id}';
    return this.http.put(url, id, httpOptions).pipe(
      tap(_ => console.log('updated tag id=${id}')),
      catchError(this.handleError<any>('updateTag'))
    );
  }
  //
  // deleteTags(id): Observable<Tag> {
  //   const url = `server/tags/${id}`;
  //   return this.http.delete<Tag>(url, httpOptions).pipe(
  //     tap(_ => console.log(`deleted tag id =${id}`)),
  //     catchError(this.handleError<Tag>('deleteTag'))
  //   );
  deleteTags(tagName: string) {
    const url = 'server/deleteTags/' + tagName;
    return this.http.delete(url, httpOptions).subscribe(data => {console.log(data); },
      err => console.log('error'));
  }

  getTag(tagId) {
    const url = 'server/tags/' +  tagId;
    return this.http.get(url);
  }
}
