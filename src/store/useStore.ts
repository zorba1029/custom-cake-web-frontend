import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";
import rootReducer from "./rootReducer";
import logger from 'redux-logger'
import { thunk } from "redux-thunk";


const useLogger = import.meta.env.NODE_ENV !== 'production'

const initializeStore = () => {
    const middleware = (getDefaultMiddleware: any) => {
        const middlewares = getDefaultMiddleware()
        middlewares.push(thunk)
        if (useLogger) {
            middlewares.push(logger)
        }
        return middlewares
    }

    const store = configureStore({
        reducer: rootReducer,
        middleware
    })
    return store
}

export function useStore() {
    const store = useMemo(() => initializeStore(), [])
    return store
}