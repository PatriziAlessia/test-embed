import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { SearchIcon } from '@/assets/icons/icons.jsx'
import Header from '@/components/header/Header.jsx'
import Search from '@/components/search/Search.jsx'
import Table from '@/components/table/Table.jsx'
import { columnsHome } from '@/pages/home/columnsHome.js'
import { StyledHomeContainer, StyledSubHeader } from '@/pages/home/styles.js'
import DataAPI from '@/services/data/data.http.js'

const Home = () => {
    const [data, setData] = useState([])
    const [dataFiltered, setDataFiltered] = useState([])

    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const response = await DataAPI.getData.send()
            setData(response.data)
            setDataFiltered(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    const navigate = useNavigate()
    const onClickRow = row => {
        navigate(`/${row.id}`)
    }

    return (
        <>
            <Header />
            <StyledHomeContainer>
                <StyledSubHeader>
                    <h1>Progetti</h1>
                    <Search
                        setDataFiltered={setDataFiltered}
                        data={data}
                        placeholder={'Cerca progetto'}
                        icon={<SearchIcon />}
                    />
                </StyledSubHeader>
                <Table
                    onClickRow={onClickRow}
                    data={dataFiltered}
                    columns={columnsHome}
                />
            </StyledHomeContainer>
        </>
    )
}

export default Home
