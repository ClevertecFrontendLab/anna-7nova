import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Hide,
    IconButton,
    Image,
    Show,
    Stack,
    Text,
} from '@chakra-ui/react';
import React from 'react';

import { IconSvg } from '~/assets/images/icons/IconSvg';

import { CustomIconButton } from '../../header/Account/CustomIconButton';
import { Category } from './Category';
import { CustomCardBody } from './CustomCardBody';
import { NewRecipesCardPropsType } from './NewRecipesCard';

export const GeneralRecipeCard: React.FC<NewRecipesCardPropsType> = ({
    title,
    text,
    src,
}: NewRecipesCardPropsType) => {
    const cardPadding = {
        base: '0 0 40px',
        sm: '0 0 40px',
        md: '24px 0',
        lg: '24px 0',
    };
    const stackPadding = {
        base: '0 8px 8px',
        sm: '0 8px 8px',
        md: '20px 24px',
    };
    return (
        <Card position='relative' direction='row' variant='outline' w='100%'>
            <Image
                objectFit='cover'
                borderRadius='8px 0 0 8px'
                src={src}
                alt='The Dish'
                maxW='40%'
            />
            <Stack p={stackPadding} gap='0' maxW='60%' flexGrow={1}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Hide below='md'>
                        <Category text='Первые блюда' />
                    </Hide>
                    <CustomIconButton ariaLabel='button icon pined' iconId='save' number={1} />
                </Flex>
                <CardBody p={cardPadding}>
                    <CustomCardBody title={title} text={text} />
                </CardBody>
                <CardFooter p='0' justifyContent='flex-end' gap='8px'>
                    <IconButton
                        variant='outline'
                        _hover={{ bg: 'brand.150', border: 'none' }}
                        borderColor='blackAlpha.500'
                        aria-label='Save Button'
                        icon={
                            <Flex alignItems='center' m='4px 8px'>
                                <IconSvg iconId='save' />
                                <Hide below='md'>
                                    <Text ml='6px'>Сохранить</Text>
                                </Hide>
                            </Flex>
                        }
                    />
                    <Button
                        variant='solid'
                        bg='black'
                        _hover={{ bg: 'brand.600', border: 'none' }}
                        color='white'
                    >
                        Готовить
                    </Button>
                </CardFooter>
            </Stack>
            <Show below='md'>
                <Flex justifyContent='space-between' position='absolute' w='100%' p='8px'>
                    <Category text='Первые блюда' />
                </Flex>
            </Show>
        </Card>
    );
};
