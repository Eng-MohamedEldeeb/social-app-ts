import { PopulateOptions, ProjectionType, QueryOptions } from "mongoose";
import { FilterQuery } from "mongoose";

interface IFindQuery<TDocument> {
  filter?: FilterQuery<TDocument>;
  select?: ProjectionType<TDocument>;
  populate?: PopulateOptions[];
  options?: QueryOptions;
}

export default IFindQuery;
