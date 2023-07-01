import PropTypes from 'prop-types'
import { useState } from 'react'

import { SearchIcon, CloseIcon } from '@/assets/icons/icons'

import {
    StyledInpuSearchtWrapper,
    StyledInputSearch,
    StyledSearchIcon,
} from './styles'

const mockApi = query =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = ['apple', 'banana', 'cherry', 'date', 'elderberry']
            const results = data.filter(item =>
                item.toLowerCase().includes(query.toLowerCase())
            )
            resolve(results)
            reject(new Error('Error'))
        }, 1000)
    })

const Search = ({ placeholder, rounded }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [timeoutId, setTimeoutId] = useState()

    const handleSearch = event => {
        const value = event.target.value
        setSearchTerm(value)

        clearTimeout(timeoutId)

        if (value) {
            setLoading(true)
            const id = setTimeout(() => {
                mockApi(value).then(data => {
                    setResults(data)
                    setLoading(false)
                })
            }, 500)
            setTimeoutId(id)
        } else {
            setResults([])
            setLoading(false)
        }
    }

    const handleReset = () => {
        setSearchTerm('')
        setResults([])
        setLoading(false)
        clearTimeout(timeoutId)
    }

    return (
        <>
            <StyledInpuSearchtWrapper>
                <StyledSearchIcon position={'left'} cursor={'initial'}>
                    <SearchIcon fill={'#3E3B4C'} />
                </StyledSearchIcon>
                <StyledInputSearch
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={handleSearch}
                    rounded={rounded}
                ></StyledInputSearch>
                <StyledSearchIcon position={'right'} cursor={'pointer'}>
                    <CloseIcon onClick={handleReset} />
                </StyledSearchIcon>
            </StyledInpuSearchtWrapper>
            {loading && <div>Loading...</div>}
            {!loading && results.length === 0 && <div>No results found</div>}
            {!loading && results.length > 0 && (
                <ul>
                    {results.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Search

Search.propTypes = {
    placeholder: PropTypes.string,
    rounded: PropTypes.bool,
}
