import {query,mutation} from './_generated/server';
import {v} from "convex/values";


export const getUserByEmail = query({
    args:{
        email: v.string(),
    },
    handler: async (ctx,args) => {
        const users = await ctx.db.query("users").filter(q =>q.eq(q.field("email"), args.email)).first();
        return users
    }
})
export const createUser = mutation({
    handler:async (ctx)=> {
        const newUser = await ctx.db.insert("users",{
            name:'John Doe',
            email:'johndoe@gmail.com',
            role:'user',
            imageUrl:'data:image/'
        })
        return newUser
    }
})
