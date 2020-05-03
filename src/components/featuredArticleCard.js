import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { COLOR_CYAN_LIGHT, COLOR_BLUE, COLOR_LIGHT_GRAY } from '../constants';
import TextWithIcon from './text/textWithIcon';
import { ColorfulTag, H1Title, InlineBackground } from './text/typography';

const CardWrapper = styled.div`
    width: calc(100% + 80px);
    margin-left: -80px;
    position: relative;
    z-index: 1;

    &:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: ${COLOR_CYAN_LIGHT};
        top: 10px;
        left: 10px;
        z-index: 0;
    }
`;

const CardContent = styled.div`
    display: block;
    position: relative;
    width: 100%;
    padding: 50px;
    z-index: 1;
    background-color: #fff;
    border: solid 1px ${COLOR_LIGHT_GRAY};
    box-sizing: border-box;
`;

const Intro = styled.p`
    width: auto;
    height: auto;
    display: block;
    margin: 20px auto 0;
    font-size: 20px;
    line-height: 1.4em;
    font-family: 'Roboto';
    font-weight: 300;
`;

const Categories = styled.ul`
    width: auto;
    display: block;
    margin: 30px 0 0;
    padding: 0;
    list-style: none;

    li {
        display: inline-block;
        margin: 0 0 0 15px;

        &:first-of-type {
            margin-left: 0;
        }
    }

    a {
        text-decoration: none;
    }
`;

const CategoryItem = ({ to, children, color }) => (
    <li>
        <a href={to}>
            <ColorfulTag color={color}>{children}</ColorfulTag>
        </a>
    </li>
);

const Icon = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "author.png" }) {
                childImageSharp {
                    fluid(maxWidth: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return <TextWithIcon
        iconSrc={data.file.childImageSharp.fluid.src}
        text="04.08.2014, Kethmar Salumets"
        alt="cool"
    />;
};

const FeaturedArticleCard = () => (
    <CardWrapper>
        <CardContent>
            <Icon/>

            <H1Title style={{ maxWidth: '80%' }}>
                <InlineBackground>
                    Generalist vs specialists:
                    video coming soon
                </InlineBackground>
            </H1Title>

            <Intro>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum
                has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took…
            </Intro>

            <Categories>
                <CategoryItem to="#">#growthMindset</CategoryItem>
                <CategoryItem to="#" color={COLOR_BLUE}>#habits</CategoryItem>
            </Categories>
        </CardContent>
    </CardWrapper>
);

export default FeaturedArticleCard;
