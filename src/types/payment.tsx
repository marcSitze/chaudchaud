export type IPayment = {
  id: string;
  amount: number;
  currency: string;
  transactionId: string;
  payer: string; // payer number
  createdAt: Date;
}