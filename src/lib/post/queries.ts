import { postRepository } from "@/repositories/post";
import {cache} from 'react'

export const findALlPublicPosts =
cache(async ()=> await  postRepository.findAllPublic())
