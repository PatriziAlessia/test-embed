import dayjs from 'dayjs'
import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom'

import { StyledNavLink } from '@/components/route-tabs/styles.js'
import {
    StyledBody,
    StyledHead,
    StyledPaginationButton,
    StyledPaginationContainer,
    StyledTable,
    StyledTableContainer,
} from '@/components/table/styles.js'

import { ArrowIcon, HasAlertIcon } from '../../assets/icons/icons.jsx'

const Table = ({
    data,
    columns,
    isClickable = true,
    isPaginated = false,
    page = 1,
    getDocumentsData,
    totalPages,
    onClickRow,
}) => {
    const navigate = useNavigate()
    const handlePageChange = page => {
        getDocumentsData(page)
    }

    const renderCell = (item, column) => {
        switch (column.keyName) {
            case 'has_alert':
                return item[column.keyName] ? (
                    <div>
                        <HasAlertIcon />
                    </div>
                ) : null
            case 'edit_document':
                return (
                    <StyledNavLink onClick={() => navigate(`/${item.id}`)}>
                        <Link>Edit</Link>
                    </StyledNavLink>
                )
            case 'sdgs':
                return item[column.keyName].map(sdg => sdg).join(', ')

            case 'go':
                return (
                    <StyledNavLink onClick={() => navigate(`/${item.id}`)}>
                        <Link>See more</Link>
                    </StyledNavLink>
                )
            case 'created_at':
                return dayjs(item[column.keyName]).format('DD/MM/YYYY')

            case 'icon':
                //aggiungi solo sulla primar riga l'icona
                return item.id === 1 ? (
                    <div>
                        <HasAlertIcon width={16} height={16} />
                    </div>
                ) : null

            default:
                return item[column.keyName]
        }
    }

    return (
        <>
            <StyledTableContainer>
                <StyledTable>
                    <StyledHead>
                        <tr>
                            {columns.map(column => (
                                <th key={column.id}>{column.title}</th>
                            ))}
                        </tr>
                    </StyledHead>

                    <StyledBody isClickable={isClickable}>
                        {data?.length ? (
                            data?.map((item, index) => {
                                return (
                                    <tr
                                        key={item.id || index}
                                        onClick={() => onClickRow(item.id)}
                                    >
                                        {columns.map(column => (
                                            <td
                                                key={column.id}
                                                style={{
                                                    minWidth: column.width
                                                        ? column.width
                                                        : 'auto',
                                                }}
                                            >
                                                {renderCell(item, column)}
                                            </td>
                                        ))}
                                    </tr>
                                )
                            })
                        ) : (
                            <>
                                <tr>
                                    <td
                                        colSpan={columns.length}
                                        style={{ textAlign: 'center' }}
                                    >
                                        Non ci sono dati disponibili
                                    </td>
                                </tr>
                            </>
                        )}
                    </StyledBody>
                </StyledTable>
            </StyledTableContainer>

            {isPaginated && (
                <StyledPaginationContainer page={page} totalPages={totalPages}>
                    <ArrowIcon onClick={() => handlePageChange(page - 1)} />

                    <StyledPaginationButton>
                        {page} di {totalPages}
                    </StyledPaginationButton>

                    <ArrowIcon onClick={() => handlePageChange(page + 1)} />
                </StyledPaginationContainer>
            )}
        </>
    )
}

export default Table
Table.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
    onClickRow: PropTypes.func,
    isClickable: PropTypes.bool,
    isPaginated: PropTypes.bool,
    page: PropTypes.number,
    getDocumentsData: PropTypes.func,
    totalPages: PropTypes.number,
}
