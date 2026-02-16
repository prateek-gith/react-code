import {Container, PostCard, PostForm} from '../components/index'
import AppwriteServise from '../appwrite/databaseConfig'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'



export default function EditPost(){
    const [post, setPost] = useState(null)
    const userData = useSelector((state)=> state.auth.userData)
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        if(slug){
            AppwriteServise.getPost(slug).then((myPoast)=>{
                if(myPoast){
                    setPost(myPoast)
                }else{
                    navigate("/")
                }
            })
        }
    },[slug,navigate])



    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ): null
}