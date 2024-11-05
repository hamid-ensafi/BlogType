"use client";

import Image from "next/image";
import Link from "next/link";
import { useGetPosts } from "@/hooks/useGetPost";
import { BlogPost } from "@/interface/Blog.Post.interface";

export default function BlogItem() {
  const { blog } = useGetPosts();
  const data = blog || [];

  return (
    <section className=" my-10 text-white">
      <h1 className="text-center text-xl font-bold py-6">
        بلاگ های شرکت راهکار گستران
      </h1>
      <div className=" flex justify-center items-center">
        <div className="w-full 2xl:container">
          <div className="flex justify-evenly flex-wrap gap-4 ">
            {data.map((item: BlogPost) => (
              <article className="w-3/12 bg-dark_500 rounded-md" key={item.id}>
                <Link
                  className=" block w-full h-full p-2"
                  href={`/blog/${item.id}`}
                >
                  <figure>
                    <Image
                      className="block object-cover w-full h-full rounded max-h-[214px]"
                      src={item.featured_media_object.source_url}
                      alt={item.title.rendered}
                      width={item.featured_media_object.media_details.width}
                      height={item.featured_media_object.media_details.height}
                      priority
                    />
                    {/* <figcaption dangerouslySetInnerHTML={{ __html: item.content.rendered }} /> */}
                    <figcaption className=" p-2 ">
                      <h3>{item.title.rendered}</h3>
                    </figcaption>
                  </figure>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
