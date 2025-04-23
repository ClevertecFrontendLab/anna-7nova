import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Grid,
    IconButton,
    Image,
    Stack,
} from '@chakra-ui/react';
import React from 'react';

import { IconSave } from '~/components/commonComponents/button/IconSave';
import { CategoryStickerRecipe } from '~/components/commonComponents/CategoryStickerRecipe';
import { Rate } from '~/components/commonComponents/Rate';
import {
    boxDesktopVisible,
    boxMobileVisibleAbsolute,
    flexRowBetweenStartWrap,
    flexRowEndGap,
    generalCard,
    generalCardImage,
    generalCardStack,
    gridContainer,
} from '~/components/styles/Section.style';

import { CustomCardBodyFlex } from '../../../commonComponents/CustomCardBodyFlex';
import { DataType } from './NewRecipes';

export const GeneralRecipes: React.FC<DataType> = ({ data }: DataType) => (
    <Grid sx={gridContainer}>
        {data.map((el) => (
            <Card sx={generalCard} direction='row' key={el.id}>
                <Image src={el.image} sx={generalCardImage} />
                <Stack sx={generalCardStack}>
                    <Flex sx={flexRowBetweenStartWrap}>
                        <Box sx={boxDesktopVisible}>
                            <CategoryStickerRecipe currentCategory={[el.category[0]]} />
                        </Box>
                        <Rate rate={{ likes: el.likes, bookmarks: el.bookmarks }} />
                    </Flex>
                    <CardBody p='0'>
                        <CustomCardBodyFlex title={el.title} text={el.description} />
                    </CardBody>
                    <CardFooter sx={flexRowEndGap}>
                        <IconButton
                            variant='buttonOutlineSmall'
                            icon={<IconSave />}
                            aria-label='Save Button'
                        />
                        <Button variant='buttonSolidSmall'>Готовить</Button>
                    </CardFooter>
                </Stack>
                <Box sx={boxMobileVisibleAbsolute}>
                    <CategoryStickerRecipe currentCategory={el.category} />
                </Box>
            </Card>
        ))}
    </Grid>
);
