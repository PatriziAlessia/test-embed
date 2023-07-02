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
    const [files, setFiles] = useState([])
    const fileInputRef = useRef(null)
    const uploadFiles = acceptedFiles => {
        const newFiles = acceptedFiles.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                id: Math.floor(Math.random() * 1000),
                fileName: file.name, // Add the file name to the object
            })
        )

        setFiles(prevFiles => [...prevFiles, ...newFiles]) // Append new files to the existing files array
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
                                disabled={files.length >= 10}
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
                    <span>{files.length}/10 caricati</span>
                </StyledContainerCounter>

                {!!files.length && (
                    <Button
                        style={{
                            marginTop: '16px',
                        }}
                        variant="ghost"
                    >
                        Invia
                    </Button>
                )}
            </StyledContainer>
        </>
    )
}

export default Upload

Upload.propTypes = {
    canStillUpload: PropTypes.bool,
}
