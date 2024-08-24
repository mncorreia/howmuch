export const calculateToWithExchangeAndFees = (from: number, exchange: number, fee: number) => {
    return from * exchange * (1 + fee);
}