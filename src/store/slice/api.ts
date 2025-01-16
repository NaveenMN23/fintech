import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        prepareHeaders: async(headers) => {
            headers.set("Content-type","application/json")
            return headers
        }
    }),
    endpoints: () => ({})
})