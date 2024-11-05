"use client";
import { useGetPostsDetail } from "@/hooks/useGetPostDetail";
import ErrorMessage from "@/ui/Error";
import Image from "next/image";

interface BlogDetailProps {
  id: string;
}

export default function BlogDetail({ id }: BlogDetailProps) {
  const { detail, postError } = useGetPostsDetail(id);

  if (postError) {
    return <ErrorMessage error={postError} />;
  }

  const { content } = detail ?? {};

  return (
    <section className="flex justify-center my-10">
      <div className="w-6/12">
        <figure className="flex justify-center">
          {detail?.id && (
            <Image
              className="rounded"
              src={detail.featured_media_object.source_url}
              alt={detail.title.rendered}
              width={detail.featured_media_object.media_details.width}
              height={detail.featured_media_object.media_details.height}
              priority
            />
          )}
        </figure>
        <div
          className="text-white mt-5"
          dangerouslySetInnerHTML={{ __html: content?.rendered ?? "" }}
        />
      </div>
    </section>
  );
}
