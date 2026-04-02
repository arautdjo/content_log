import { JsonPostRepository } from './jason-post-repository';
import {PostRepository} from './post-repository';

export const postRepository: PostRepository = new JsonPostRepository();
