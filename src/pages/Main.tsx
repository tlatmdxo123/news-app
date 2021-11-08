import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled'
import SearchBar from '../components/SearchBar';
import Articles from '../components/Articles';
import {fromEvent} from 'rxjs'
import {debounceTime, map} from 'rxjs/operators'


function Main() {
    const [query,setQuery] = useState('')
    const inputEl = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const chages = fromEvent(inputEl.current as HTMLInputElement,'keyup')
        
        chages
            .pipe(
                map(e => (e.target as HTMLInputElement).value),
                debounceTime(500)
            )
            .subscribe(x => setQuery(x))
        
    })
    
    return (
        <>
            <InputContainer>
                <SearchBar placeholder='검색어를 입력하세요' element={inputEl}/>
            </InputContainer>
            {query.length === 0 ? <p>검색어를 입력해주세요</p> : <Articles query={query}/>}
        </>
        
    );
}

const InputContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`



export default Main;