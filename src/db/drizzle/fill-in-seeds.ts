import {JsonPostRepository} from '@/repositories/post/jason-post-repository'
import {drizzleDb} from './index'
import {postsTable} from './schemas'
import type Error from 'next/error'

(async ()=>{
  const DBsearch = new JsonPostRepository()
  const getAllPosts = await DBsearch.findAll()

  console.log('')
  console.log('@@@@@@@@@@@@@@')
  console.log(getAllPosts)
  console.log('@@@@@@@@@@@@@@')
  try{
      await drizzleDb.delete(postsTable)
      await drizzleDb.insert(postsTable).values(getAllPosts)

  }catch(e: unknown){

    console.log('')
    console.log('')
     console.log('Erro de orem:  ',e)
    console.log('')
    console.log('')
    console.log('')

  }


})()
