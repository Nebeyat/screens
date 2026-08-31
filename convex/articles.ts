/*import {query,mutation} from './_generated/server';
import {v} from 'convex/values';
 export const getAllArticles= query({
    handler: async (ctx)=>{
        const allArticles= await ctx.db.query("articles").collect();
        return allArticles
    },
});
const createArticles= mutation({
    handler:async(ctx) => {
        const createPost = await ctx.db.insert("articles",{
            
    title:"First Item",
    timePosted:"2 hours ago",
   
    content:"Test",
    categoryName:"poletics",
    imageUrl:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1170&q=80'
        });
        return createPost;
    },
    
});*/
