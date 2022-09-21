interface AmountHeaderQuantityValue {
  prefix: string;
  value: number;
}

export interface AmountHeaderQuantity {
  firstValue: AmountHeaderQuantityValue;
  secondValue: AmountHeaderQuantityValue;
}
