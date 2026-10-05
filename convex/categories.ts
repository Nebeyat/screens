import {query,mutation} from './_generated/server';
import { v } from "convex/values";
import { categories} from "./cat"

export const getAllCategories=query({
    
    handler:async (ctx) => {
    const getCategories =await ctx.db.query("category").collect();
    return getCategories;
    },
})

export  const createCategories = mutation({
    handler: async(ctx) =>{
        for (let i=0;i< categories.length;i++){
           await ctx.db.insert("category",categories[i]); 
        }
        return {message:"categories created successfully"};
    }
})