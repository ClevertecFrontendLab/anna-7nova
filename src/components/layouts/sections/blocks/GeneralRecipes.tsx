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
import { useNavigate } from 'react-router';

import { ButtonCollapsed } from '~/components/commonComponents/button/ButtonCollapsed';
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

export const GeneralRecipes: React.FC<DataType> = ({ data }: DataType) => {
    //routing
    const navigate = useNavigate();
    const navigateHandle = (categorySlug: string, subcategorySlug?: string, id?: string) => {
        navigate(`/${categorySlug}/${subcategorySlug}/${id}`);
    };
    return (
        <Grid sx={gridContainer}>
            {data.map((el) => (
                <Card
                    sx={generalCard}
                    direction='row'
                    key={el.id}
                    onClick={() => navigateHandle(el.category[0], el.subcategory[0], el.id)}
                >
                    <Image src={el.image} sx={generalCardImage} />
                    <Stack sx={generalCardStack}>
                        <Flex sx={flexRowBetweenStartWrap}>
                            <Box sx={boxDesktopVisible}>
                                <CategoryStickerRecipe currentCategory={[el.category[0]]} />
                            </Box>
                            <Rate
                                rate={{ likes: el.likes, bookmarks: el.bookmarks }}
                                width='12px'
                                height='12px'
                            />
                        </Flex>
                        <CardBody p='0'>
                            <CustomCardBodyFlex title={el.title} text={el.description} />
                        </CardBody>
                        <CardFooter sx={flexRowEndGap}>
                            <IconButton
                                variant='buttonOutlineSmall'
                                icon={<ButtonCollapsed />}
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
};
