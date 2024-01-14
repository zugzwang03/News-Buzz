export interface News {
    status: string,
    totalResults: number,
    articles: [
        {
            source: {
                id: string,
                name: string
            },
            author: string,
            title: string,
            description: string,
            url: string,
            urlToImage: string,
            publishedAt: Date,
            content: string
        }
    ]
}