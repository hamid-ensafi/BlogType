"use client";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { fetchPosts } from "@/service/blogApi";
import { BlogPost } from "@/interface/Blog.Post.interface"; 
import { IPostError } from "@/interface/Error.Api.interface";
export function useGetPosts() {
  const { data: blog, error: postError }: UseQueryResult<BlogPost[], IPostError> = useQuery({
    queryKey: ["Blog"],
    queryFn: fetchPosts,
    retry: false,
  });

  return { blog, postError };
}