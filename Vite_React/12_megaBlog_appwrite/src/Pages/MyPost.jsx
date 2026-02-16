import {Container, PostCard} from '../components/index'
import AppwriteServise from '../appwrite/databaseConfig'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function MyPost(){
    const [posts, setPosts] = useState(null)
    const userData = useSelector((state)=>state.auth.userData)
    
    useEffect(()=>{
        // console.log("run", userData)
        const userId = userData.$id ? userData.$id : userData.userData.$id
        AppwriteServise.getMyPosts(userId).then((myposts)=>{
            // console.log(myposts)
            if(myposts){
                setPosts(myposts.documents)
            }
        }).catch((error)=>{setPosts(null)})
    }, [])
    return(
        <div className='w-full py-8'>
            <Container >
                <div className='flex flex-wrap'>
                {posts && posts.map((post)=>(
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