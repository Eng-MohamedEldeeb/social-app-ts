// Model Type:
import { Model } from "mongoose";

export const create = <TDocument>(model: Model<TDocument>) => {
  return async (data: Partial<TDocument>): Promise<TDocument> => {
    const document = await model.create(data);
    return document;
  };
};
