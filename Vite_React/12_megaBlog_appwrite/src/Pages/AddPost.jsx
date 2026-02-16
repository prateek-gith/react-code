import {Container, PostForm} from '../components/index'
import AppwriteServise from '../appwrite/databaseConfig'

export default function AddPost(){
    return(
        <div>
            <Container>
                <PostForm />
            </Container>
        </div>
    )
}