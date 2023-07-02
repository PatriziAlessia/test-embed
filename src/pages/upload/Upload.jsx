import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { DeleteItemIcon, UploadIcon } from '@/assets/icons/icons.jsx'
import Button from '@/components/button/Button.jsx'
import Header from '@/components/header/Header.jsx'

import {
    StyledContainer,
    StyledContainerCounter,
    StyledContainerItem,
    StyledContainerUploadMoreText,
    StyledParagraph,
    StyledScrollableItems,
    StyledStillUpload,
    StyledUploadIcon,
} from './styles'

const Upload = ({ canStillUpload }) => {
    const [files, setFiles] = useState([
        {
            id: 1,
            fileName: 'file1.txt',
        },
        {
            id: 2,
            fileName: 'file2.txt',
        },
    ])
    const fileInputRef = useRef(null)

    const uploadFiles = acceptedFiles => {
        setFiles(
            acceptedFiles.map(file =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                    id: Math.floor(Math.random() * 1000),
                })
            )
        )
    }
    const { getRootProps, getInputProps, isFocused, isDragActive } =
        useDropzone({
            accept: { 'text/*': ['.txt', '.md'] },
            multiple: true,
            onDrop: uploadFiles,
        })

    return (
        <>
            <Header />
            <StyledContainer>
                <StyledStillUpload>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '16px',
                        }}
                    >
                        <StyledUploadIcon
                            canStillUpload={canStillUpload}
                            {...getRootProps({ isFocused, isDragActive })}
                        >
                            <UploadIcon width={10} height={14} />
                            <input
                                ref={fileInputRef}
                                {...getInputProps()}
                                style={{
                                    display: 'none',
                                }}
                            />
                        </StyledUploadIcon>
                        <StyledContainerUploadMoreText>
                            <span>Aggiungi file</span>
                            <p>(max 2mb)</p>
                        </StyledContainerUploadMoreText>
                    </div>

                    <StyledScrollableItems>
                        {files?.map((item, index) => {
                            return (
                                <StyledContainerItem
                                    key={index}
                                    canStillUpload={canStillUpload}
                                >
                                    <StyledParagraph
                                        canStillUpload={canStillUpload}
                                    >
                                        {item.fileName}
                                    </StyledParagraph>
                                    <DeleteItemIcon
                                        onClick={() => console.log(item?.id)}
                                    />
                                </StyledContainerItem>
                            )
                        })}
                    </StyledScrollableItems>
                </StyledStillUpload>

                <StyledContainerCounter>
                    <span>0/10 caricati</span>
                </StyledContainerCounter>

                <Button
                    style={{
                        marginTop: '16px',
                    }}
                    variant="ghost"
                >
                    Invia
                </Button>
            </StyledContainer>
        </>
    )
}

export default Upload

Upload.propTypes = {
    canStillUpload: PropTypes.bool,
}
