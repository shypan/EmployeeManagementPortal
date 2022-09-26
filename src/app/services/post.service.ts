import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }

  getPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }


  getPost(id: number): Observable<Post>{
    return this.http.get<Post>(this.url + '/' + id);
  }

  createPost(post:Post): Observable<Post> {
    return this.http.post<Post>(this.url, post);
  }

  deletePost(id: number){
    return this.http.delete(this.url + '/' + id);
  }

  updatePost(post: Post): Observable<Post>{
    return this.http.put<Post>(this.url + '/' + post.id, post);

  }
}
