import {
    starColor10,
    starColor15,
    starColor20,
    starColor25,
    starColor30,
    starColor35,
    starColor40,
    starColor45,
    starColorDefault
} from './constants'
export const getColorFromRate = (rate: number): string => {
    if (rate > 4.5) return starColorDefault;
    if (rate > 4 && rate < 4.5) return starColor45
    if (rate > 3.5 && rate < 4) return starColor40
    if (rate > 3 && rate < 3.5) return starColor35
    if (rate > 2.5 && rate < 3) return starColor30
    if (rate > 2 && rate < 2.5) return starColor25
    if (rate > 1.5 && rate < 2) return starColor20
    if (rate > 1 && rate < 1.5) return starColor15
    if (rate < 1) return starColor10
    return starColorDefault
}