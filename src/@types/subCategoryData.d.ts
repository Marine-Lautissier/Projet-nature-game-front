export default interface ISubCategoryData {
  subCategories: [
    {
      id: number,
      name: string,
      description: string,
      articles: [
        {
          id: number,
          name: string,
          description: string,
        }
      ]
    },

  ]
}