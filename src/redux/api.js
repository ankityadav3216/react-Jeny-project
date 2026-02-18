import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }), // backend abhi nahi
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      queryFn: async (body) => {
        console.log("Login attempt:", body);

        // ✅ Dummy success check
        if (body.username === "test" && body.password === "123") {
          return {
            data: {
              ResponseData: {
                Token: "dummy-token-abc123",
                Username: body.username,
              },
            },
          };
        }

        // ✅ Dummy failure
        return { error: { status: 401, data: "Invalid credentials" } };
      },
    }),
  }),
});

export const { useLoginUserMutation } = api;
