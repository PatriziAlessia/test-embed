import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PlusIcon, SearchIcon } from '@/assets/icons/icons.jsx'
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
        navigate(`/${row}`)
    }

    return (
        <>
            <Header />
            <StyledHomeContainer>
                <StyledSubHeader>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            gap: '10px',
                        }}
                    >
                        <h1>Progetti</h1>
                        <div
                            style={{
                                backgroundColor: 'gold',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                            }}
                        >
                            <PlusIcon />
                        </div>
                    </div>
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
