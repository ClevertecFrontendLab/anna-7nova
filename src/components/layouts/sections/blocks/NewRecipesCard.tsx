import { Box, Card, Flex, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router';

import { MockDataSliderType } from '~/components/commonComponents/CategoryData';
import { CategoryStickerRecipe } from '~/components/commonComponents/CategoryStickerRecipe';
import { Rate } from '~/components/commonComponents/Rate';
import {
    boxDesktopVisible,
    boxMobileVisibleAbsolute,
    flexRowBetweenEnd,
    newRecipesCard,
    newRecipesCardImage,
    newRecipesCardStack,
} from '~/components/styles/Section.style';

import { CustomCardBodyFlex } from '../../../commonComponents/CustomCardBodyFlex';

export type NewRecipesCardPropsType = {
    el: MockDataSliderType;
};

export const NewRecipesCard: React.FC<NewRecipesCardPropsType> = ({
    el,
}: NewRecipesCardPropsType) => {
    //routing
    const navigate = useNavigate();
    const navigateHandle = (categorySlug: string, subcategorySlug?: string, id?: string) => {
        navigate(`/${categorySlug}/${subcategorySlug}/${id}`);
    };
    return (
        <Card
            sx={newRecipesCard}
            onClick={() => navigateHandle(el.category[0], el.subcategory[0], el.id)}
        >
            <Image src={el.image} sx={newRecipesCardImage} />
            <Stack sx={newRecipesCardStack}>
                <CustomCardBodyFlex title={el.title} text={el.description} />
                <Flex sx={flexRowBetweenEnd}>
                    <Box sx={boxDesktopVisible}>
                        <CategoryStickerRecipe currentCategory={el.category} bgColor='brand.150' />
                    </Box>
                    <Rate
                        rate={{ likes: el.likes, bookmarks: el.bookmarks }}
                        width='12px'
                        height='12px'
                    />
                </Flex>
            </Stack>
            <Box sx={boxMobileVisibleAbsolute}>
                <CategoryStickerRecipe currentCategory={el.category} bgColor='brand.150' />
            </Box>
        </Card>
    );
};
