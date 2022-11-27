// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Episodes } from '../interfaces/Episodes';
import { SearchItem } from '../interfaces/SearchItem';

export const baseUrl = `http://${window.location.hostname}:8000/`;
// Define a service using a base URL and expected endpoints
export const dataApi = createApi({
    reducerPath: 'dataApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getSearchItems: builder.query<SearchItem[], void>({
            query: () => `search_items`,
        }),
        getEpisodes: builder.query<Episodes, number>({
            query: (titleId) => (`episodes/${titleId}`),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetSearchItemsQuery,
    useGetEpisodesQuery
} = dataApi;