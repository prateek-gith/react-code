import config from "../../config/config";

import { Client, Databases, Permission, Role, Storage, ID } from "appwrite";
import { Query } from "appwrite";


export class DatabaseServise{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl) // Your API Endpoint
        .setProject(config.appwriteProjectId);

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client);

    }

    async createPost({title,content,featuredimage,status, userid, slug}){
        try {
            return await this.databases.createDocument({
                databaseId : config.appwriteDatabaseId,
                collectionId : config.appwriteCollectionId,
                documentId : slug,
                data : {
                    Title : title,
                    content : content,
                    featuredimage : featuredimage,
                    status : status,
                    userid : userid
                }
            })
        } catch (error) {
            throw error
        }
    }


    async updatePost(slug, {title,content,featuredimage,status, userid}){
        try {
            return await this.databases.updateDocument({
                databaseId : config.appwriteDatabaseId,
                collectionId : config.appwriteCollectionId,
                documentId : slug,
                data : {
                    Title : title,
                    content : content,
                    featuredimage : featuredimage,
                    status : status,
                    userid : userid
                }
        });
        } catch (error) {
            throw error
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument({
                databaseId : config.appwriteDatabaseId,
                collectionId : config.appwriteCollectionId,
                documentId : slug,
        })
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument({
                databaseId : config.appwriteDatabaseId,
                collectionId : config.appwriteCollectionId,
                documentId : slug,
        })
        } catch (error) {
            throw error
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments({

                databaseId : config.appwriteDatabaseId,
                collectionId : config.appwriteCollectionId,
                queries,
            })
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
    }

    async getMyPosts(userId){
        try {
            return await this.databases.listDocuments({

                databaseId : config.appwriteDatabaseId,
                collectionId : config.appwriteCollectionId,
                queries : [Query.equal("userid", userId)],
            })
        } catch (error) {
            console.log("Appwrite serive :: getMyPosts :: error", error);
            return false
        }
    }

    // file

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false
        }
    }

    getFilePreview(fileId){
        // console.log(fileId)
        return this.bucket.getFileView({
            bucketId : config.appwriteBucketId,
            fileId : fileId
    })
    }


}

const databaseService = new DatabaseServise

export default databaseService