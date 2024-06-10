import * as N from "fp-ts/number";
import { fromCompare, Ord, contramap } from "fp-ts/Ord";
import { pipe } from "fp-ts/function";

import Artwork from "../interfaces/artwork.interface";

export const getName = (artwork: Artwork): string => artwork.name;
export const getSource = (artwork: Artwork): string => artwork.source;
export const getYear = (artwork: Artwork): number => artwork.year;
export const getMonth = (artwork: Artwork): number => artwork.month;
export const getDay = (artwork: Artwork): number => artwork.day;

export const getTags = (artwork: Artwork): string[] => artwork.tags;
export const getCategories = (artwork: Artwork): string[] => artwork.categories;

export const getDescription = (artwork: Artwork): string | undefined =>
  artwork.description;
export const hasDescription = (artwork: Artwork): boolean =>
  artwork.description !== undefined && artwork.description !== "";

const byYear = pipe(N.Ord, contramap(getYear));

const byMonth = pipe(N.Ord, contramap(getMonth));

const byDay = pipe(N.Ord, contramap(getDay));

export const byDate: Ord<Artwork> = fromCompare(
  (first: Artwork, second: Artwork) =>
    byYear.compare(first, second) ||
    byMonth.compare(first, second) ||
    byDay.compare(first, second)
);

export const byNewest = (a: Artwork, b: Artwork) => -byDate.compare(a, b);
export const byOldest = (a: Artwork, b: Artwork) => byDate.compare(a, b);
