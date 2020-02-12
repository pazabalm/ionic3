// se coloca export adelante para utilizar en otros métodos


/*
  export interface RespuestaTopHeadlines {
    version: string;
    user_comment: string;
    home_page_url: string;
    feed_url: string;
    title: string;
    description: string
    articles: Article[];
  }
*/

  export interface Author {
    name: string;
    url: string;
    avatar: string;
}

export interface Item {
    id: string;
    url: string;
    title: string;
    content_html: string;
    content_text: string;
    date_published: Date;
    date_modified: Date;
    author: Author;
    image: string;
}

export interface RootObject {
    version: string;
    user_comment: string;
    home_page_url: string;
    feed_url: string;
    title: string;
    description: string;
    items: Item[];
}
