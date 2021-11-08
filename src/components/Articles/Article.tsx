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

`

const Title = styled.h2`

`

const Description = styled.p`

`
export default Article;