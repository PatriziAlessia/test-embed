import PropTypes from 'prop-types'
import {
    createContext,
    useCallback,
    useEffect,
    useReducer,
    useState,
} from 'react'

import LocalStorageManager from '@/utilities/local-storage-manager'

export const UserContext = createContext({})

const SET_USER_ACTION = 'SET_USER'
const SET_ACCESS_TOKEN_ACTION = 'SET_ACCESS_TOKEN'
const SET_REFRESH_TOKEN_ACTION = 'SET_REFRESH_TOKEN'
const RESET_USER_ACTION = 'RESET_USER'
const UPDATE_USER_ACTION = 'UPDATE_USER'

const authReducer = (state, action) => {
    switch (action.type) {
        case SET_USER_ACTION:
            return {
                ...state,
                user: action.payload.user,
                accessToken: action.payload.tokens.access_token,
                refreshToken: action.payload.tokens.refresh_token,
            }
        case UPDATE_USER_ACTION:
            return {
                ...state,
                user: action.payload,
            }
        case SET_ACCESS_TOKEN_ACTION:
            return {
                ...state,
                accessToken: action.payload,
            }
        case SET_REFRESH_TOKEN_ACTION:
            return {
                ...state,
                refreshToken: action.payload,
            }
        case RESET_USER_ACTION:
            return {
                user: null,
                accessToken: null,
                refreshToken: null,
            }
        default:
            return state
    }
}

const authInitialState = {
    user: LocalStorageManager.user.get(),
    accessToken: LocalStorageManager.accessToken.get(),
    refreshToken: LocalStorageManager.refreshToken.get(),
}

const UserProvider = ({ children }) => {
    const [auth, dispatch] = useReducer(authReducer, authInitialState)

    const createUser = useCallback(payload => {
        dispatch({ type: SET_USER_ACTION, payload })
    }, [])

    const updateUser = useCallback(payload => {
        dispatch({ type: UPDATE_USER_ACTION, payload })
    }, [])

    const resetUser = useCallback(() => {
        dispatch({ type: RESET_USER_ACTION })
    }, [])

    const [value, setValue] = useState({
        ...auth,
        updateUser,
        resetUser,
        createUser,
    })

    useEffect(() => {
        setValue(prev => ({ ...prev, ...auth }))
    }, [auth])

    useEffect(() => {
        if (value.user) {
            LocalStorageManager.user.set(value.user)
        } else {
            LocalStorageManager.user.remove()
        }
    }, [value.user])

    useEffect(() => {
        if (value.accessToken) {
            LocalStorageManager.accessToken.set(value.accessToken)
        } else {
            LocalStorageManager.accessToken.remove()
        }
    }, [value.accessToken])

    useEffect(() => {
        if (value.refreshToken) {
            LocalStorageManager.refreshToken.set(value.refreshToken)
        } else {
            LocalStorageManager.refreshToken.remove()
        }
    }, [value.refreshToken])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export default UserProvider

UserProvider.propTypes = {
    children: PropTypes.elementType,
}
