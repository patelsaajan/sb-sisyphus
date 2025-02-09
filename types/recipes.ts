export default interface IRecipes {
  name: string;
  cusine: string;
  description: string;
  ingredients?: string[];
  image?: string;
  difficulty: string;
  preparationTime: number;
  servings: number;
}
