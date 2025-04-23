import 'swiper/swiper-bundle.css';

import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';

import {
    buttonSlider,
    buttonSliderIcon,
    flexRowBetweenEnd,
    newRecipesContainer,
} from '~/components/styles/Section.style';

import { MockDataSliderType, NewRecipesCard } from './NewRecipesCard';

export type DataType = { data: Array<MockDataSliderType> };

export const NewRecipes: React.FC<DataType> = ({ data }: DataType) => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
    const newestFunc = (array: Array<MockDataSliderType>) =>
        array
            .slice(0, 10)
            .sort((a: MockDataSliderType, b: MockDataSliderType) => b.date.localeCompare(a.date));
    const newest = newestFunc(data);
    return (
        <Box position='relative' h='100%' maxH='100%' p='5px 0'>
            <Box sx={newRecipesContainer}>
                <Swiper
                    rewind={true}
                    // loop={true}
                    breakpoints={{
                        360: {
                            slidesPerView: 2.2,
                            spaceBetween: 12,
                        },
                        768: {
                            slidesPerView: 4.5,
                            spaceBetween: 12,
                        },
                        1080: {
                            slidesPerView: 2,
                            spaceBetween: 12,
                        },
                        1440: {
                            slidesPerView: 3,
                            spaceBetween: 12,
                        },
                        1920: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={setSwiperInstance}
                >
                    {newest.map((el) => (
                        <SwiperSlide key={el.id} style={{ height: '100%', maxHeight: '100%' }}>
                            <NewRecipesCard el={el} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
            <Box sx={buttonSlider}>
                <Flex sx={flexRowBetweenEnd}>
                    <IconButton
                        aria-label='Arrow Left'
                        icon={<ArrowBackIcon />}
                        sx={buttonSliderIcon}
                        onClick={() => swiperInstance?.slidePrev()}
                    />
                    <IconButton
                        aria-label='Arrow Right'
                        icon={<ArrowForwardIcon />}
                        sx={buttonSliderIcon}
                        onClick={() => swiperInstance?.slideNext()}
                    />
                </Flex>
            </Box>
        </Box>
    );
};
