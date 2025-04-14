import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router';

import { category } from './Category';

type TitleSectionMainPropsType = { propsTitle?: string; subtitle?: string };

export const TitleSectionMain: React.FC<TitleSectionMainPropsType> = ({
    propsTitle,
    subtitle,
}: TitleSectionMainPropsType) => {
    const { category: categorySlug } = useParams();
    // Найти категорию по слагу
    const categoryData = categorySlug
        ? Object.values(category).find((cat) => cat.slug === categorySlug)
        : null;

    const title = categoryData?.category || propsTitle || 'Приятного аппетита!';

    return (
        <Box textAlign='center' padding={['16px 0', '16px 0', '24px 0', '32px 0', '32px 0']}>
            <Heading as='h2' size='h2'>
                {title}
            </Heading>
            <Text maxW='696px' pt='14px' variant='textSubTitle'>
                {subtitle}
            </Text>
        </Box>
    );
};
