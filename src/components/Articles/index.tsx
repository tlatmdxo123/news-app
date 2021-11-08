import React from 'react';
import useSWR from 'swr'
import { fetcher } from '../../fetch/fetcher';
import styled from '@emotion/styled'
import Article from './Article';

interface Article{
    "source": {
        "id": string,
        "name": string
    },
    "author":string,
    "title": string,
    "description": string,
    "url": string,
    "urlToImage": string,
    "publishedAt": string,
    "content": string
}
interface Props{
    query:string
}
function Articles({query}:Props) {
    const {articles,isLoading,isError} = useArticles(query,2)

    if(isLoading) return <div>loading...</div>
    if(isError) return <div>error!</div>
    return (
        <Container>
            <Title>News</Title>
            {articles.map((article:Article) => {
                return (<Link href={article.url}>
                    <Article title={article.title} desc={article.description}/>
                </Link>)
            })}
        </Container>
    );
}

const useArticles = (query:string,page:number) => {
    const {data,error} = useSWR(`/everything?q=${query}&pageSize=20&page=${page}`,fetcher)

    return {
        articles:data?.articles,
        isLoading:!error && !data,
        isError:error
    }
}

const Container = styled.article`

`

const Title = styled.h1`

`

const Link = styled.a`

`


export default Articles;