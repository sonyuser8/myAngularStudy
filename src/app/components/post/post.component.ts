import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/catch';
// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.url)
      .subscribe(response => {
        // console.log(response);
        this.posts = response as any[];
      });
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = (response as any).id;
        this.posts.splice(0, 0, post);
        console.log(response);
      });
  }

}
