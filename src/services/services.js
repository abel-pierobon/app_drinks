import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../databases/realTimeDatabases";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories.json`,
        }),
        getDrinks: builder.query({
            query: () => `drinks.json`,
        }),
        getDrinksByCategory: builder.query({
            query: (categoria) =>
                `drinks.json?orderBy="categoria"&equalTo="${categoria}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response);
                return responseTransformed;
            },
        }),
        getDrinksById: builder.query({
            query: (drinkId) => `drinks.json?orderBy="id"&equalTo="${drinkId}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response);
                if (responseTransformed.length > 0) {
                    return responseTransformed[0];
                }
                return null;
            },
        }),
        getDrinksByName: builder.query({
            query: (nombre) =>
                `drinks.json?orderBy="nombre"&equalTo="${nombre}"`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response);
                return responseTransformed;
            },
        }),
        postFavorite: builder.mutation({
            query: (...drink) => ({
                url: `favorites.json`,
                method: "POST",
                body: drink,
            }),
        }),
        getFavorites: builder.query({
            query: () => `favorites.json`,
            transformResponse: (response) => {
                const responseTransformed = Object.values(response);
                return responseTransformed;
            }
        })
    }),
});
export const {
    useGetCategoriesQuery,
    useGetDrinksQuery,
    useGetDrinksByCategoryQuery,
    useGetDrinksByIdQuery,
    useGetDrinksByNameQuery,
    usePostFavoriteMutation,
    useGetFavoritesQuery
} = api;
