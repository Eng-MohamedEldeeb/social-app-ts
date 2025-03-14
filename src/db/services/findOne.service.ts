// Model Type:
import { Model } from "mongoose";

// Find Query Interface:
import IFindQuery from "./types/dbServices.types.js";

export const findOne = <TDocument>(model: Model<TDocument>) => {
  return async ({
    filter,
    select,
    populate,
    options,
  }: IFindQuery<TDocument>): Promise<TDocument | null> => {
    const document = await model
      .findOne(filter || {}, select || {}, options || {})
      .populate(populate || []);

    if (!document) return null;

    return document;
  };
};
