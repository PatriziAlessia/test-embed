import { useEffect, useState } from 'react'

import { HasAlertIcon } from '@/assets/icons/icons.jsx'
import Header from '@/components/header/Header.jsx'
import Table from '@/components/table/Table.jsx'
import { columnsDocuments } from '@/pages/details/columnsDocuments.js'
import { columnsMatched } from '@/pages/details/columnsMatched.js'
import {
    StyledBox,
    StyledBox2,
    StyledContainerTitle,
    StyledCreatedAt,
    StyledHomeContainer,
} from '@/pages/home/styles.js'
import DataAPI from '@/services/data/data.http.js'

const Details = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getData()
    }, [])

    console.log(data)

    const getData = async () => {
        try {
            const { data } = await DataAPI.getData.send()
            setData(data[0])
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div>
            <Header />
            <StyledHomeContainer>
                <StyledBox>
                    <StyledContainerTitle>
                        <h1>Dettagli #{data.id}</h1>
                        {data.has_alert && <HasAlertIcon />}
                    </StyledContainerTitle>
                    <StyledBox2>
                        <div>
                            <p>{data.description}</p>
                        </div>

                        <StyledCreatedAt>{data.created_at}</StyledCreatedAt>
                    </StyledBox2>

                    <div>
                        <StyledContainerTitle>
                            <h4>Documenti</h4>
                        </StyledContainerTitle>

                        <Table
                            data={data?.documents}
                            columns={columnsDocuments}
                        />
                    </div>

                    <div>
                        <StyledContainerTitle>
                            <h4>Nuovi paper</h4>
                        </StyledContainerTitle>

                        <Table
                            data={data?.documents_matched}
                            columns={columnsMatched}
                        />
                    </div>
                </StyledBox>
            </StyledHomeContainer>
        </div>
    )
}

export default Details
