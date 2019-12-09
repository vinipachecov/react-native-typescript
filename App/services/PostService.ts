import { env } from '../../env';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface PostI {
  userId: number;
  id: number;
  title: string;
  body: string;
}

class PostService {
  api: AxiosInstance;
  constructor() {
    this.api = axios.create({
      baseURL: env.POST_API,
    });
  }

  getPosts = (): Promise<AxiosResponse<PostI[]>> => {
    return this.api.get('/posts');
  };
}

export default new PostService();
