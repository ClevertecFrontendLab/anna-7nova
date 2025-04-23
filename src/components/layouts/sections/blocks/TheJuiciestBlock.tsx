import React from 'react';

import { GeneralRecipes } from './GeneralRecipes';
import { DataType } from './NewRecipes';
import { MockDataSliderType } from './NewRecipesCard';

export const TheJuiciestBlock: React.FC<DataType> = ({ data }: DataType) => {
    const sortedByBookmarksAndLikes = data
        .slice(0, 4)
        .sort((a: MockDataSliderType, b: MockDataSliderType) => {
            if (b.bookmarks === a.bookmarks) {
                return b.likes - a.likes;
            }
            return b.bookmarks - a.bookmarks;
        });
    return <GeneralRecipes data={sortedByBookmarksAndLikes} />;
};
