import {
    Box,
    Card,
    CardBody,
    Flex,
    Heading,
    Image,
    Show,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';
import React from 'react';

import { icons } from '../../aside/icons';
import { CustomIconButton } from '../../header/Account/CustomIconButton';

type NewRecipesCardPropsType = {
    src: string;
    title: string;
    text: string;
};

export const NewRecipesCard: React.FC<NewRecipesCardPropsType> = ({
    src,
    title,
    text,
}: NewRecipesCardPropsType) => {
    const cardWeight = { base: '158px', sm: '158px', md: '210px', lg: '277px', xl: '322px' };
    const rows = useBreakpointValue({
        base: 2,
        sm: 2,
        md: 2,
        lg: 1,
    });
    return (
        <Card
            direction='column'
            variant='outline'
            w={cardWeight}
            minW={cardWeight}
            position='relative'
        >
            <Image
                objectFit='cover'
                borderRadius='8px 8px 0 0 '
                maxW='100%'
                h={{ sm: '128pxm', md: '230px' }}
                src={src}
                alt='Reciepe Solianka'
            />
            <CardBody
                p={{
                    base: '8px 8px 36px',
                    sm: '8px 8px 36px',
                    lg: '12px 12px 60px',
                    xl: '16px 24px 68px',
                }}
            >
                <Heading noOfLines={rows} size='md'>
                    {title}
                </Heading>
                <Show above='lg'>
                    <Box mt='8px'>
                        <Text noOfLines={3}>{text}</Text>
                    </Box>
                </Show>
            </CardBody>
            <Flex
                position='absolute'
                h='100%'
                w='100%'
                flexDir={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
                justifyContent='space-between'
                alignItems={{
                    base: 'flex-start',
                    sm: 'flex-start',
                    md: 'flex-start',
                    lg: 'flex-end',
                }}
            >
                <Box
                    bg='brand.150'
                    display='flex'
                    alignItems='center'
                    p='2px 8px'
                    m={{ base: '8px', sm: '8px', md: '8px', lg: '12px' }}
                >
                    <img src={icons.mainMeal} />
                    <Text fontSize='14px'>Первые блюда</Text>
                </Box>
                <CustomIconButton ariaLabel='button icon pined' iconId='save' number={1} />
            </Flex>
        </Card>
    );
};
