import { useCallback } from 'react'

import useAlert from './useAlert.jsx'

/**
 * Usage:
 *
 * const showError = useError()
 * showError('something wrong')
 *
 * */

const useError = () => {
    const { triggerAlert } = useAlert()

    return useCallback(errorMessage => {
        triggerAlert({ severity: 'error', title: errorMessage })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}

export default useError
