import { Box, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { ButtonIconUnCollapsed } from '~/components/commonComponents/button/ButtonIconUnCollapsed';
import { CategoryStickerRecipe } from '~/components/commonComponents/CategoryStickerRecipe';
import { Rate } from '~/components/commonComponents/Rate';
import {
    boxCategorySticker,
    flexColBetweenStartWrap,
    flexRowBetweenEndWrap,
    flexRowBetweenStartWrap,
    generalCardFull,
    generalCardImageFull,
    generalCardStackFull,
} from '~/components/styles/Section.style';

import { NewRecipesCardPropsType } from '../blocks/NewRecipesCard';

export const GeneralRecipeCardFull: React.FC<NewRecipesCardPropsType> = ({
    el,
}: NewRecipesCardPropsType) => (
    <Flex sx={generalCardFull}>
        <Image src={el.image} sx={generalCardImageFull} />
        <Flex sx={generalCardStackFull}>
            <Flex sx={flexRowBetweenStartWrap}>
                <Box>
                    <CategoryStickerRecipe currentCategory={el.category} />
                </Box>
                <Rate
                    rate={{ likes: el.likes, bookmarks: el.bookmarks }}
                    variant='buttonTextNotification'
                />
            </Flex>
            <Flex sx={flexColBetweenStartWrap}>
                <Box>
                    <Heading as='h1' size='h1' mb={{ base: '16px', lg: '24px' }}>
                        {el.title}
                    </Heading>
                    <Box mb='24px'>
                        <Text>{el.description}</Text>
                    </Box>
                </Box>
                <Flex sx={flexRowBetweenEndWrap}>
                    <Box bg='blackAlpha.100' sx={boxCategorySticker}>
                        <IconSvg iconId='clock' />
                        <Text variant='categorySticker'>{el.time}</Text>
                    </Box>
                    <Flex gap={{ base: '12px', xl: '16px' }}>
                        <IconButton
                            variant='buttonOutlineBig'
                            icon={<ButtonIconUnCollapsed title='Оценить рецепт' iconId='like' />}
                            aria-label='Like Button'
                        />
                        <IconButton
                            variant='buttonSolidBig'
                            icon={
                                <ButtonIconUnCollapsed title='Сохранить в закладки' iconId='save' />
                            }
                            aria-label='Save Button'
                        />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </Flex>
);
