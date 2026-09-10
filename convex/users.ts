import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Fetch a single user document matching the provided email address.
 * Returns the user object or `null` if no matching document is found.
 */
export const getUserByEmail = query({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .first();

    return user;
  },
});

/**
 * Fetch all users stored in the database.
 */
export const getUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

/**
 * Create a new default user record in the users table.
 */
export const createUser = mutation({
  handler: async (ctx) => {
    const newUser = await ctx.db.insert("users", {
      name: "John Doe",
      email: "johndoe@gmail.com",
      role: "user",
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200",
    });

    return newUser;
  },
});