import { Card, Flex, Hide, Image, Show, Stack } from '@chakra-ui/react';
import React from 'react';

import { CustomIconButton } from '../../header/Account/CustomIconButton';
import { Category } from './Category';
import { CustomCardBody } from './CustomCardBody';

export type CardBodyType = {
    title: string;
    text: string;
};

export type NewRecipesCardPropsType = {
    src: string;
} & CardBodyType;

export const NewRecipesCard: React.FC<NewRecipesCardPropsType> = ({
    src,
    title,
    text,
}: NewRecipesCardPropsType) => {
    const cardWeight = { base: '158px', sm: '158px', md: '210px', lg: '277px', xl: '322px' };
    const stackPadding = {
        base: '8px',
        sm: '8px',
        md: '12px',
        lg: '16px 24px 20px',
    };
    return (
        <Card
            position='relative'
            direction='column'
            variant='outline'
            w={cardWeight}
            minW={cardWeight}
        >
            <Image
                objectFit='cover'
                borderRadius='8px 8px 0 0 '
                maxW='100%'
                h={{ sm: '128pxm', md: '230px' }}
                src={src}
                alt='The Dish'
            />
            <Stack p={stackPadding} gap='0' w='100%' justifyContent='space-between'>
                <CustomCardBody title={title} text={text} />
                <Flex justifyContent='space-between' alignItems='center'>
                    <Hide below='md'>
                        <Category bgColor='brand.150' />
                    </Hide>
                    <CustomIconButton ariaLabel='button icon pined' iconId='save' number={1} />
                </Flex>
            </Stack>
            <Show below='md'>
                <Flex justifyContent='space-between' position='absolute' w='100%' p='8px'>
                    <Category bgColor='brand.150' />
                </Flex>
            </Show>
        </Card>
    );
};
