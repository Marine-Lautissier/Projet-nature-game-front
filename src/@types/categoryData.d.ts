export default interface ICategoryData {
  categories: [
    {
      id: number,
      name: string,
      description: string,
      subcategories: [
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
        }
      ]
    },
  ]
}