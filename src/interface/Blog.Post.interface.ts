interface FeaturedMediaObject {
    id: number;
    title: string;
    caption: string;
    description?: string;
    media_details: {
      width: number;
      height: number;
      filesize: number;
    };
    source_url: string;
  }
  
  interface Category {
    id: number;
    name: string;
    slug: string;
  }
  
  interface Content {
    rendered: string;
    protected: boolean;
  }
  
  interface Excerpt {
    rendered: string;
    protected: boolean;
  }
  
  interface Title {
    rendered: string;
  }
  
 export interface BlogPost {
    id: number;
    date: string;
    date_gmt: string;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    title: Title;
    content: Content;
    excerpt: Excerpt;
    categories: Category[];
    featured_media_object: FeaturedMediaObject;
    author?: number;
    featured_media?: number;
    comment_status?: string;
    ping_status?: string;
    sticky?: boolean;
    template?: string;
    format?: string;
  }