import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from 'react-icons/md'

interface Props{
    total:number,
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>
}

function PageIndexes({total,page,setPage}:Props) {
    const [start,setStart] = useState(1)
    useEffect(() => {
        if(page%10 === 1){
            setStart(page)
        }
    },[page])
    return (
        <Container>
            <MdKeyboardArrowLeft/>
            <IndexContainer onClick={(e) => setPage(Number((e.target as HTMLDivElement).textContent))}>
                {Array.from({length:10}).map((_,idx) => {
                    return start+idx <= total && <Index className={start+idx === page ? 'active' : ''}>{start+idx}</Index>
                })}
            </IndexContainer>
            <MdKeyboardArrowRight/>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const IndexContainer = styled.div`
    display: flex;
    margin: 0px 10px;
`

const Index = styled.span`
    margin: 0px 3px;
    &.active{
        font-weight: bold;
    }
`

export default PageIndexes;