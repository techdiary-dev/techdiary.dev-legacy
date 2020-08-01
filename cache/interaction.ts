import { makeVar } from "@apollo/client";
import { produce } from "immer";

export interface InteractionCache {
  articleId: string;
  isLiked?: boolean;
  isBookmarked?: boolean;
  likeCount?: number;
  bookmarkCount?: number;
}

export const interactionsVars = makeVar<InteractionCache[]>([]);

export const getInterAction = (articleId: string) => {
  const interactions = interactionsVars();
  return interactions.find((el) => el.articleId === articleId);
};

export const addOrUpdateInterActionCache = ({
  articleId,
  isLiked,
  isBookmarked,
  likeCount,
  bookmarkCount,
}: InteractionCache) => {
  const interactions = interactionsVars();
  const newInteraction = produce(interactions, (draft) => {
    const index = interactions.findIndex((el) => el.articleId === articleId);
    if (index !== -1) {
      draft[index].isLiked = isLiked ?? draft[index].isLiked;
      draft[index].isBookmarked = isBookmarked ?? draft[index].isBookmarked;
      draft[index].likeCount = likeCount ?? draft[index].likeCount;
      draft[index].bookmarkCount = bookmarkCount ?? draft[index].bookmarkCount;
    } else {
      draft.push({
        articleId,
        isBookmarked,
        isLiked,
        likeCount,
        bookmarkCount,
      });
    }
  });
  interactionsVars(newInteraction);
};
