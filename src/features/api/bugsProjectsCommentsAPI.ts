import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apidomain } from "../../utils/APIdomains";

export type TBug = {
  bugid: number;
  title: string;
  description: string;
  severity: string;
  status: string;
  project_id: number;
};

export type TProject = {
  projectid: number;
  project_name: string;
  description?: string;
};

export type TComment = {
  commentid: number;
  comment_text: string;
  bugid: number;
  created_at?: string;
};

export const bugsProjectsCommentsAPI = createApi({
  reducerPath: "bugsProjectsCommentsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: apidomain,
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as any;
      const token = state.auth?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Bugs", "Projects", "Comments"],
  endpoints: (builder) => ({
    getAllBugs: builder.query<TBug[], void>({
      query: () => "/allbugs",
      providesTags: ["Bugs"],
    }),
    getProjects: builder.query<TProject[], void>({
      query: () => "/projects",
      providesTags: ["Projects"],
    }),
    getComments: builder.query<TComment[], void>({
      query: () => "/comments",
      providesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetAllBugsQuery,
  useGetProjectsQuery,
  useGetCommentsQuery,
} = bugsProjectsCommentsAPI;


