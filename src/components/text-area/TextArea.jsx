import PropTypes from 'prop-types'

import { StyledTextAreaContainer, StyledTextAreaInput } from './styles'

const TextArea = ({
    id,
    name,
    placeholder,
    onChange,
    onBlur,
    value,
    cols,
    rows,
}) => {
    return (
        <>
            <StyledTextAreaContainer>
                <StyledTextAreaInput
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
}
