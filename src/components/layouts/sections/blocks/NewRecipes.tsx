import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useBreakpointValue } from '@chakra-ui/react';
import React from 'react';

import { blockNewReciepes } from './BlocksImages';
import { NewRecipesCard } from './NewRecipesCard';

export const NewRecipes: React.FC = () => {
    const top = useBreakpointValue({
        base: '40px',
        sm: '50px',
        md: '100px',
        lg: '147px',
    });
    return (
        <Box gap='24px' display='flex' overflowX='hidden' maxW='100%' position='relative'>
            <NewRecipesCard
                src={blockNewReciepes.solianka}
                title='Солянка с грибами'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
            />
            <NewRecipesCard
                src={blockNewReciepes.kapustnueKotlety}
                title='Капустные котлеты'
                text='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
            />
            <NewRecipesCard
                src={blockNewReciepes.oladie}
                title='Оладьи на кефире "Пышные"'
                text='Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.'
            />
            <NewRecipesCard
                src={blockNewReciepes.saladZdorozie}
                title='Салат "Здоровье"'
                text='Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) Вкусный, необычный, а главное быстрый.'
            />
            <NewRecipesCard
                src={blockNewReciepes.solianka}
                title='Солянка с грибами'
                text='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
            />
            <NewRecipesCard
                src={blockNewReciepes.kapustnueKotlety}
                title='Капустные котлеты'
                text='Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лёгкая пряная нотка наверняка помогут сделать эти чудесные котлеты из капусты одним из ваших любимых овощных  блюд.'
            />
            <Box position='absolute' w='100%' top={top}>
                <Flex justifyContent='space-between'>
                    <IconButton
                        color='white'
                        bg='black'
                        aria-label='Arrow Left'
                        size='md'
                        icon={<ArrowBackIcon />}
                        _hover={{ color: 'black', bg: 'brand.400', border: 'none' }}
                    />
                    <IconButton
                        color='white'
                        bg='black'
                        aria-label='Arrow Left'
                        size='md'
                        icon={<ArrowForwardIcon />}
                        _hover={{ color: 'black', bg: 'brand.400', border: 'none' }}
                    />
                </Flex>
            </Box>
        </Box>
    );
};
