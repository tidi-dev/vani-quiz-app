import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getAccessToken } from '../../services/cookie.service';

type User = {
  id: number;
  name: string;
  email: number;
};

export const api = createApi({
  reducerPath: 'api',
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders: (headers) => {
      const access_token = getAccessToken();
      if (access_token) {
        headers.set('Authorization', `Bearer ${access_token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getQuestions: builder.query({
      query: () => '/questions',
    }),
    checkAnswer: builder.mutation({
      query: ({ id, answer }) => ({
        url: `questions/${id}`,
        method: 'POST',
        body: {
          answer,
        },
      }),
    }),
  }),
});

export const { useGetQuestionsQuery, useCheckAnswerMutation } = api; // Destructure the generated hook
