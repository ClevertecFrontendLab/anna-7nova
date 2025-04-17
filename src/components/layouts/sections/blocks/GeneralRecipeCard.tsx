import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    IconButton,
    Image,
    Stack,
} from '@chakra-ui/react';
import React from 'react';

import { IconSave } from '~/components/commonComponents/button/IconSave';
import { CategorySticker } from '~/components/commonComponents/CategorySticker';
import { Rate } from '~/components/commonComponents/Rate';
import {
    boxDesktopVisible,
    boxMobileVisibleAbsolute,
    flexRowBetweenCenterWrap,
    flexRowEndGap,
    generalCard,
    generalCardImage,
    generalCardStack,
} from '~/components/styles/Section.style';

import { CustomCardBodyFlex } from '../../../commonComponents/CustomCardBodyFlex';
import { NewRecipesCardPropsType } from './NewRecipesCard';

export const GeneralRecipeCard: React.FC<NewRecipesCardPropsType> = ({
    title,
    text,
    src,
    category,
    rate,
}: NewRecipesCardPropsType) => (
    <Card sx={generalCard} direction='row'>
        <Image src={src} sx={generalCardImage} />
        <Stack sx={generalCardStack}>
            <Flex sx={flexRowBetweenCenterWrap}>
                <Box sx={boxDesktopVisible}>
                    <CategorySticker category={category} width='16px' height='16px' />
                </Box>
                <Rate rate={rate} />
            </Flex>
            <CardBody p='0'>
                <CustomCardBodyFlex title={title} text={text} />
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
            <CategorySticker category={category} width='16px' height='16px' />
        </Box>
    </Card>
);
