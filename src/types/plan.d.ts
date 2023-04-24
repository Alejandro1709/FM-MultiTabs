export default interface IPlan {
  id: string | number;
  name: string;
  description?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  icon?: string;
  active?: boolean;
}