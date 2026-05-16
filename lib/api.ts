import axios from 'axios';
import { type Car } from '@/types/car';

const BASE_URL = 'https://car-rental-api.goit.study';

const api = axios.create({
  baseURL: BASE_URL,
});

export interface FetchCarsResponse {
  cars: Car[];
  totalCars: number;
  totalPages: number;
  page: number;
}

export interface FetchCarsParams {
  brand?: string;
  price?: string;
  minMileage?: number;
  maxMileage?: number;
  page?: number;
  perPage?: number;
}

export interface BookingRequestPayload {
  name: string;
  email: string;
  comment?: string;
}

export const fetchCars = async (
  params?: FetchCarsParams
): Promise<FetchCarsResponse> => {
  const res = await api.get<FetchCarsResponse>('/cars', {
    params,
  });

  return res.data;
};

export const fetchCarById = async (id: string): Promise<Car> => {
  const res = await api.get<Car>(`/cars/${id}`);

  return res.data;
};

export const createBookingRequest = async (
  carId: string,
  payload: BookingRequestPayload
) => {
  const res = await api.post(`/cars/${carId}/booking-requests`, payload);

  return res.data;
};
