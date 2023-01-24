import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import api from "../api/github";
import { Repository } from "./types";

const fetchRepos = async (ctx: QueryFunctionContext) => {
  const [_, username] = ctx.queryKey;
  const { data } = await api.get<Repository[]>(`/users/${username}/repos`);
  return data;
};

export const useFetchRepositories = (username: string) => {
  return useQuery(["repos", username], fetchRepos);
};
