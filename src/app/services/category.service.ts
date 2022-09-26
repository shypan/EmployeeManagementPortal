import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getImageUrl(): string {
    return 'https://picsum.photos/200/300';
  }

  getTitle():string {
    return 'Categories'
  }

  getCategories(): string[] {
    return ['Home', 'Auto', 'Fashion', 'Food']
  }

  constructor() { }
}
