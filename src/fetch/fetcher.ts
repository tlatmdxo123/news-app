import axios from 'axios'

type Fetcher = (url:string) => any
const instance = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers:{
      "X-Api-Key":"88037acc3257472c8c9d46a6a5f93260"
  }
});
export const fetcher:Fetcher = (url) => instance.get(url).then(res => res.data)