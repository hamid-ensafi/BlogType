'use client'

import { BlogPost } from "@/interface/Blog.Post.interface";
import { IPostError } from "@/interface/Error.Api.interface";
import { fetchDetail } from "@/service/detailApi";
import { useQuery } from "@tanstack/react-query";



export function useGetPostsDetail(id: string) {
  const { data: detail, error: postError } = useQuery<BlogPost, IPostError>({
    queryKey: ["Details", id],
    queryFn: () => fetchDetail(id),  
  });

  return { detail, postError };
}