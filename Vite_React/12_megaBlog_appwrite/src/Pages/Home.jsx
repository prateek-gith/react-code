import { useEffect, useState } from "react"
import AppwriteService from '../appwrite/databaseConfig'
import { Container, PostCard } from "../components/index"

export default function Home(){
    const [posts, setPosts] = useState(null)
    useEffect(()=>{
        AppwriteService.getPosts([]).then((myposts)=>{
            // console.log(myposts)
            if(myposts){
                setPosts(myposts.documents)
            }
        })
    },[])

    if(posts){
        return(
            <div className="w-full py-8" >
                <Container>
                    {posts.map((post)=>(
                        <div className="py-8" key={post.$id} >
                            <PostCard {...post} />
                        </div>
                    ))
                    }
                </Container>
            </div>
        )
    }else{
        return(
            <Container>
                <div>
                    <h1>Login To Read Post</h1>
                </div>
            
            </Container>
        )
    }
}