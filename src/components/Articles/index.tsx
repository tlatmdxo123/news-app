import React, { useEffect, useState } from 'react';
import useSWR from 'swr'
import { fetcher } from '../../fetch/fetcher';
import styled from '@emotion/styled'
import Article from './Article';
import PageIndexes from '../PageIndexes';
import { useLocalStorage } from '../../hooks/useLocalStorage';

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
    query:string,
    pageSize:number
}
function Articles({query,pageSize}:Props) {
    const [page,setPage] = useState(1)
    const [localPage,setLocalPage] = useLocalStorage('page')
    // useEffect(() => {
    //     if(localPage!==null) setPage(+localPage)
    // })

    const onClickSetPage = (page:number) => {
        setPage(page)
        setLocalPage(page.toString())
    }

    const {articles,totalResults,isLoading,isError} = useArticles(query,page,pageSize)

    if(isLoading) return <div>loading...</div>
    if(isError) return <div>error!</div>
    return (
        <>
            {articles.map((article:Article) => {
                return (<Link href={article.url}>
                    <Article title={article.title} desc={article.description}/>
                </Link>)
            })}
            <PageIndexes total={Math.ceil(totalResults/pageSize)} page={page} setPage={onClickSetPage}/>
        </>
        
    );
}

const useArticles = (query:string,page:number,pageSize:number) => {
    const {data,error} = useSWR(`/everything?q=${query}&pageSize=${pageSize}&page=${page}`,fetcher)

    return {
        articles:data?.articles,
        totalResults:data?.totalResults,
        isLoading:!error && !data,
        isError:error
    }
}

const Container = styled.div``

const Link = styled.a`

`


export default Articles;