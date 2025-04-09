import { Grid } from '@chakra-ui/react';
import React from 'react';

import avatar2 from '../../../../assets/images/users/user_alex.png';
import avatar3 from '../../../../assets/images/users/user_ekaterina.png';
import avatar1 from '../../../../assets/images/users/user_elena.png';
import { BlogItem } from './BlogItem';

export const BlogCooking: React.FC = () => {
    const templateColumns = {
        base: 'repeat(1, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(1, 1fr)',
        lg: 'repeat(3, 1fr)',
    };
    return (
        <Grid templateColumns={templateColumns} gap='12px' w='100%'>
            <BlogItem
                avatar={avatar1}
                userName='Елена Высоцкая'
                accountName='@elenapovar'
                textBlog='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
            />
            <BlogItem
                avatar={avatar2}
                userName='Alex Cook'
                accountName='@funtasticooking'
                textBlog='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
            />
            <BlogItem
                avatar={avatar3}
                userName='Екатерина Константинопольская'
                accountName='@bake_and_pie'
                textBlog='Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.'
            />
        </Grid>
    );
};
