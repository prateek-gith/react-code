import config from "../../config/config";

import {Client, Account, ID} from "appwrite"

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl) // Your API Endpoint
        .setProject(config.appwriteProjectId); 

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create({userId : ID.unique(), email : email, password : password, name : name})
            if(userAccount){
                return this.login({email, password})
            }else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){
        try {
            const session = await this.account.createEmailPasswordSession({email : email, password : password});
            if(session){
                return session
            }
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            const user = await this.account.get()
            if(user){
                return user
            }else{
                return null
            }
        } catch (error) {
             console.log("Appwrite serive :: getCurrentUser :: error", error);
            
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions({sessionId : "all"})
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }

}

const authService = new AuthService
export default authService