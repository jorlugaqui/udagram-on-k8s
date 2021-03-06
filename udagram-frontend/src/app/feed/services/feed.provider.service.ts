import { Injectable } from '@angular/core';
import { FeedItem, feedItemMocks } from '../models/feed-item.model';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../api/api.service';

const API_FEED_HOST = environment.apiFeedHost;

@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {
  currentFeed$: BehaviorSubject<FeedItem[]> = new BehaviorSubject<FeedItem[]>([]);

  constructor(private api: ApiService) { 
  }

  async getFeed(): Promise<BehaviorSubject<FeedItem[]>> {
    this.api.setApiHost(API_FEED_HOST);
    const req = await this.api.get('/');
    const items = <FeedItem[]> req.rows;
    this.currentFeed$.next(items);
    return Promise.resolve(this.currentFeed$);
  }

  async uploadFeedItem(caption: string, file: File): Promise<any> {
    this.api.setApiHost(API_FEED_HOST);
    const res = await this.api.upload('/', file, {caption: caption, url: file.name});
    const feed = [res, ...this.currentFeed$.value];
    this.currentFeed$.next(feed);
    return res;
  }

}