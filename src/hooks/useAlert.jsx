import { useContext } from 'react'

import { AlertContext } from '../context/AlertProvider'

/**
 * Usage:
 *
 ***** In layout:
 *
 * const { isAlertOpen, alertData, closeAlert, triggerAlert } = useAlert()
 *
 *        <Toast
 *        visible={isAlertOpen}
 *        title={alertData.title}
 *        message={alertData.message}
 *        variant={alertData.variant}
 *        dismissCallback={closeAlert}
 *        />
 *
 *
 ***** In component:
 *
 * triggerAlert({ title: 'good news' })
 *
 *
 *
 * */

const useAlert = () => {
    return useContext(AlertContext)
}

export default useAlert
