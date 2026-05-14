import axios from 'axios';

import { type Car } from '@/types/car';

const BASE_URL = 'https://car-rental-api.goit.global';

const api = axios.create({
  baseURL: BASE_URL,
});

export interface FetchCarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
}

export interface FetchCarsParams {
  brand?: string;
  rentalPrice?: string;
  minMileage?: number;
  maxMileage?: number;
  page?: number;
  limit?: number;
}

export interface BookingRequestPayload {
  name: string;
  email: string;
  phone: string;
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

export const fetchCarBrands = async (): Promise<string[]> => {
  const res = await api.get<string[]>('/brands');

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
