import { Document, VirtualTypeOptions } from "mongoose";

export const setUserAge = function(this:Document, val: Date)  {
  const userAge: number = new Date().getFullYear() - new Date(val).getFullYear()
  return this.set("age", userAge)
}

export const postsVirtual :VirtualTypeOptions = {
  localField: "_id",
  foreignField: "postedBy",
  ref: "Post"
}

