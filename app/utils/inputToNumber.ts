export const inputToNumber = (value: string): number => {
    const parsed = typeof value === 'string'? parseFloat(value.replace(',', '.').replace(/[^0-9.]/g, '')): value;
    return isNaN(parsed) ? 0 : parsed;
}