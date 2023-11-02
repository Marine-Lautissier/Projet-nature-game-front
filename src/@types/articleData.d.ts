export default interface IArticleData {
  article: {
    id: number,
    name: string,
    description: string,
    subcategory: {
      name: string
    },
    picture: null
}
}