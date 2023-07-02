import PropTypes from 'prop-types'
import { forwardRef } from 'react'

import { StyledLabel } from '@/components/input/styles.js'

import { StyledTextAreaContainer, StyledTextAreaInput } from './styles'

const TextArea = forwardRef(
    (
        {
            id,
            name,
            label,
            placeholder,
            onChange,
            onBlur,
            value,
            cols,
            rows,
            resize = 'none',
        },
        ref
    ) => {
        return (
            <>
                <StyledTextAreaContainer>
                    {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
                    <StyledTextAreaInput
                        ref={ref}
                        resize={resize}
                        name={name}
                        id={id}
                        cols={cols}
                        rows={rows}
                        placeholder={placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                    />
                </StyledTextAreaContainer>
            </>
        )
    }
)

export default TextArea

TextArea.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.string,
    cols: PropTypes.number,
    rows: PropTypes.number,
    resize: PropTypes.string,
    label: PropTypes.string,
}

TextArea.displayName = 'TextArea'
