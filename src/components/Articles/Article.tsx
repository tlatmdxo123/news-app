import React from 'react';
import styled from '@emotion/styled'
interface Props{
    title:string,
    desc:string
}
function Article({title,desc}:Props) {
    return (
        <Container>
            <Title>{title}</Title>
            <Description>{desc}</Description>
        </Container>
    );
}

const Container = styled.article`
    margin-bottom: 20px;
`

const Title = styled.h2`
    font-size: ${props => props.theme.fontSize[500]};
    margin-bottom: 10px;
`

const Description = styled.p`
    font-size: ${props => props.theme.fontSize[200]};
`
export default Article;