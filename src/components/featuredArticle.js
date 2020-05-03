import React from 'react';
import styled from 'styled-components';

import FeaturedArticleCard from './featuredArticleCard';

import featuredImage from '../images/kethmar.jpg';

const FeaturedArticleWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const FeaturedArticleImage = styled.div`
    flex: 0 0 55%;
    width: 55%;
    height: 480px;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
    background-color: #000;
`;

const IndexPage = () => (
    <FeaturedArticleWrapper>
        <FeaturedArticleImage src={featuredImage} />
        <FeaturedArticleCard />
    </FeaturedArticleWrapper>
);

export default IndexPage;