import PropTypes from 'prop-types'

import { SearchIcon } from '@/assets/icons/icons'
import Input from '@/components/input/Input.jsx'

const Search = ({ placeholder, data, setDataFiltered }) => {
    const search = event => {
        if (event.target.value === '') {
            setDataFiltered(data)
            return
        } else {
            const newData = data.filter(item => {
                const itemData = item.name.toLowerCase()
                const textData = event.target.value.toLowerCase()
                return itemData.indexOf(textData) > -1
            })
            setDataFiltered(newData)
        }
    }

    return (
        <Input
            icon={<SearchIcon />}
            iconPosition={'left'}
            placeholder={placeholder}
            onChange={event => search(event)}
            size={'medium'}
        />
    )
}

export default Search

Search.propTypes = {
    placeholder: PropTypes.string,
    data: PropTypes.array,
    setDataFiltered: PropTypes.func,
}
