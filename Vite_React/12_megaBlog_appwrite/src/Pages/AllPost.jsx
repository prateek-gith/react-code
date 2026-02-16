import {Container, PostCard} from '../components/index'
import AppwriteServise from '../appwrite/databaseConfig'
import { useEffect, useState } from 'react'

export default function AllPost(){
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        // console.log("run")
        AppwriteServise.getPosts([]).then((myposts)=>{
            console.log(myposts)
            if(myposts){
                setPosts(myposts.documents)
            }
        })
    }, [])
    return(
        <div className='w-full py-8'>
            <Container >
                <div className='flex flex-wrap'>
                { posts.map((post)=>(
                    <div key={post.$id} className='p-4 w-1/4' > 
                        <PostCard  {...post}/>
                    </div>
                ))
                }
            </div>
            </Container>
        </div>
    )
}