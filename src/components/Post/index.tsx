import React from 'react';

import { 
    Container, 
    HeaderPost, 
    Date, 
    Image, 
    Title, 
    Description 
} from './styles';

import FavoriteIcon from '../../assets/icons/favorite.svg';

interface IPosts {
    date: string;
    title: string;
    description: string;
}

type Props = {
    post: IPosts;
}

const Post = ({ post }:Props): JSX.Element => {
    const { date, title, description } = post;

    return (
        <Container>
        <HeaderPost>
            <Date>{date}</Date>
            <Image src={FavoriteIcon} alt="Favorite Icon" />
        </HeaderPost>

        <Title>{title}</Title>
        <Description>{description}</Description>
        </Container>
    );
}

export default Post;