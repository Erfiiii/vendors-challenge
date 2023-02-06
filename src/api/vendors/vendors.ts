import axios from 'axios';
import { Vendor } from './types';

export const getVendors = async (page: number): Promise<Vendor[]> => {
    try {
        const res = await axios.get(`https://snappfood.ir/mobile/v3/restaurant/vendors-list?page=${page}&page_size=10&lat=35.754&long=51.328`)
        return res.data.data.finalResult.filter((item: { type: 'VENDOR' | 'TEXT', data: any }) => item.type === 'VENDOR').map((item: { data: any }) => ({
            title: item.data.title,
            description: item.data.description,
            logo: item.data.defLogo,
            backgroundImage: item.data.backgroundImage,
            rate: item.data.rate,
            isExpress: item.data.isZFExpress,
            deliveryPrice: item.data.deliveryFee,
            voteCount: item.data.voteCount
        }))
    } catch (error) {
        throw error
    }
}