
import AppwriteService from '../appwrite/databaseConfig.js'
import { Link } from 'react-router-dom'

export default function PostCard({$id, Title, featuredimage}){
    // console.log("fet : ", featuredimage)

    return(
        <Link to={`/post/${$id}`}>
            
            <div className='w-full bg-amber-200' > 
                
                <div className='w-full justify-center mb-4' > 
                    <img src={AppwriteService.getFilePreview(featuredimage)} alt={Title} className='rounded-2xl' />
                </div>

                <h2>{Title}</h2>
            </div>
        </Link>
    )
}