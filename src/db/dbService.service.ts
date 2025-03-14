import {
  FilterQuery,
  Model,
  PopulateOptions,
  ProjectionType,
  QueryOptions,
  QuerySelector,
} from "mongoose";

class DbService<TDocument> {
  constructor(private model: Model<TDocument>) {}

  public async create(data: Partial<TDocument>): Promise<TDocument> {
    const document = await this.model.create(data);
    return document;
  }

  public async findOne({
    filter,
    select,
    populate,
    options,
  }: {
    filter?: FilterQuery<TDocument>;
    select?: ProjectionType<TDocument>;
    populate?: PopulateOptions[];
    options?: QueryOptions;
  }): Promise<TDocument | null> {
    const document = await this.model
      .findOne(filter || {}, select || {}, options || {})
      .populate(populate || []);

    if (!document) return null;

    return document;
  }
}

export default DbService;
