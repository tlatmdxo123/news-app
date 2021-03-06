import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import { MdSearch } from "react-icons/md";
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props{
    placeholder:string,
    element:React.MutableRefObject<HTMLInputElement | null>
}

function SearchBar({placeholder,element}:Props) {
    const [query,setQuery] = useState('')
    const [localQuery,setLocalQuery] = useLocalStorage('query')
    // useEffect(() => {
    //   if(localQuery!==null) setQuery(localQuery)
    // })
    return ( 
        <Container>
            <Label htmlFor="query">
                <Icon>
                    <MdSearch />
                </Icon>
            </Label>
            <Input
                placeholder={placeholder}
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                id="query"
                ref={element}
                autoFocus
            />
        </Container>

    );
}


const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 3px;
  color: #ced4da;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 90%;
  max-width: 450px;
`;

const Label = styled.label`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 50px;
  width: 90%;
  max-width: 450px;
  transition: all 0.15s ease-in-out;
  padding-left: 40px;
  &:hover {
    border: 1px solid #228be6;
  }
  &:focus {
    border: 1px solid #228be6;
  }
`;

export default SearchBar;