export interface Article {
    id: number;
    title: string;
    content: string;
    sourceID: number;
    urlToImage: string;
    description: string;
    publishedAt: Date;
    showOnHomepage: boolean;
}

export interface RootObject {
    articles: Article[];
}
