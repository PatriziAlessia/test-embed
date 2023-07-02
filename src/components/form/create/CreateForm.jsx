import PropTypes from 'prop-types'

import Button from '@/components/button/Button.jsx'
import Input from '@/components/input/Input.jsx'
import SidePopover from '@/components/sidebar-popover/SidePopover.jsx'
import TextArea from '@/components/text-area/TextArea.jsx'

const CreateForm = ({ onClose }) => {
    return (
        <SidePopover title={'Crea progetto'} onClose={() => onClose()}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '20px',
                }}
            >
                <Input
                    type={'text'}
                    label={'Titolo'}
                    placeholder={'Inserisci il titolo'}
                    width={'100%'}
                    size={'large'}
                />

                <TextArea
                    type={'text'}
                    label={'Descrizione'}
                    placeholder={'Inserisci una descrizione'}
                    width={'100%'}
                    size={'large'}
                />

                <Input
                    type={'text'}
                    label={'SDGS'}
                    placeholder={'Inserisci SDGS'}
                    width={'100%'}
                    size={'large'}
                />

                <Button variant={'ghost'}>CREA</Button>
            </div>
        </SidePopover>
    )
}

export default CreateForm

CreateForm.propTypes = {
    onClose: PropTypes.func,
}
