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
    Text,
} from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';
import { CategorySticker } from '~/components/commonComponents/CategorySticker';
import { Rate } from '~/components/commonComponents/Rate';

import { CustomCardBodyFlex } from '../../../commonComponents/CustomCardBodyFlex';
import { NewRecipesCardPropsType } from './NewRecipesCard';

export const GeneralRecipeCard: React.FC<NewRecipesCardPropsType> = ({
    title,
    text,
    src,
    category,
    rate,
}: NewRecipesCardPropsType) => {
    const stackPadding = {
        base: '8px',
        md: '20px 24px',
    };
    return (
        <Card
            position='relative'
            direction='row'
            variant='outline'
            h={['128px', '128px', '244px', '244px']}
            w='100%'
        >
            <Image
                objectFit='cover'
                borderRadius='8px 0 0 8px'
                src={src}
                alt='The Dish'
                w={{ base: '158px', lg: '346px' }}
            />
            <Stack p={stackPadding} w='100%' gap={{ base: '0', lg: '24px' }}>
                <Flex justifyContent='space-between' alignItems='center' wrap='wrap'>
                    <Box display={['none', 'none', 'none', 'block', 'block']}>
                        <CategorySticker category={category} />
                    </Box>
                    <Rate rate={rate} />
                </Flex>
                <CardBody p='0'>
                    <CustomCardBodyFlex title={title} text={text} />
                </CardBody>
                <CardFooter p='0' justifyContent='flex-end' gap={{ base: '12px', lg: '8px' }}>
                    <IconButton
                        variant='buttonTextSmall'
                        p={{ base: '4px 8px', lg: '6px 12px' }}
                        h={{ base: '24px', lg: '32px' }}
                        minW={{ base: '24px', lg: '32px' }}
                        _hover={{ bg: 'brand.150', border: 'none' }}
                        borderColor='blackAlpha.500'
                        aria-label='Save Button'
                        icon={
                            <Flex alignItems='center'>
                                <IconSvg iconId='save' width='12px' height='12px' />
                                <Box display={['none', 'none', 'none', 'block', 'block']}>
                                    <Text ml='8px'>Сохранить</Text>
                                </Box>
                            </Flex>
                        }
                    />
                    <Button
                        variant='buttonTextSmall'
                        p={{ base: '4px 8px', lg: '6px 12px' }}
                        h={{ base: '24px', lg: '32px' }}
                        bg='black'
                        _hover={{ bg: 'brand.600', border: 'none' }}
                        color='white'
                    >
                        Готовить
                    </Button>
                </CardFooter>
            </Stack>
            <Box
                display={['flex', 'flex', 'flex', 'none', 'none']}
                justifyContent='space-between'
                position='absolute'
                w='100%'
                p='8px'
            >
                <CategorySticker category={category} />
            </Box>
        </Card>
    );
};
