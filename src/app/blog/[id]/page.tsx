import BlogDetail from '@/components/BlogDetail';
import { BlogPost } from '@/interface/Blog.Post.interface';


interface Iparams {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }:Iparams) {
  const { id } = params;

  try {
    const postData = await fetchPostData(id);
    const sanitizedDescription = postData.excerpt.rendered.replace(/<[^>]+>/g, ''); //کد ریجکس برای حذف اچ تی ام ال 
    return {
      title: postData.title.rendered,
      description: sanitizedDescription,
      keywords: postData.categories.map((category) => category.name).join(', '),
      openGraph: {
        title: postData.title.rendered,
        description: sanitizedDescription,
        url: `http://localhost:3000/blog/${id}`,
        image: postData.featured_media_object?.source_url || '', 
      },
      twitter: {
        card: 'summary_large_image',
        title: postData.title.rendered,
        description: sanitizedDescription,
        image: postData.featured_media_object?.source_url || '', 
      },
    };
  } catch (error) {
    console.error('خطا در دریافت اطلاعات ', error);

    return {
      title: 'تایتل پیش فرض ',
      description: 'توضیحات پیش فرض بلاگ ',
      keywords: 'بلاگ راهکار گستران مقالات ',
      openGraph: {
        title: 'تایتل پیش فرض ',
        description: 'توضیحات ',
        url: 'http://localhost:3000/blog/252',
        image: 'https://test.com/img.jpg',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'تایتل پیش فرض برای نمایش در توییتر',
        description: 'توضیحات پیش فرض برای زمان اشتراک گذاری سایت در توییتر .',
        image: 'https://test.com/img.jpg',
      },
    };
  }
}

async function fetchPostData(id: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/detail?id=${id}`);
    if (!response.ok) {
      throw new Error('خطا در دریافت اطلاعات');
    }

    const data:BlogPost = await response.json();
    return data;
  } catch (error) {
    console.error('خطا در دریافت اطلاعات:', error);

    return {
      title: { rendered: 'راهکار گستران بلاگ' },
      excerpt: { rendered: 'بلاگ های راهکارگستران' },
      categories: [{ name: 'blog' }],
      featured_media_object: { source_url: 'https://test.com/img.jpg' },
    };
  }
}

const PostsDetail = ({ params }: Iparams) => {
  const { id } = params;

  return <BlogDetail id={id} />;
};

export default PostsDetail;
