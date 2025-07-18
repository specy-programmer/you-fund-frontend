// utils/getCurrencySymbol.ts

import { useCurrencyStore } from "@/stores/currency-store"

export const useCurrencySymbol = () => {

    const currency = useCurrencyStore((s) => s.currency);

    switch (currency) {
        case 'USD':
            return '$'
        case 'TRY':
            return '₺'
        default:
            return ''
    }
}