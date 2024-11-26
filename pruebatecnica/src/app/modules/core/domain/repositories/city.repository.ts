import { City } from "../models/city";

export abstract class CityRepository{
    abstract getCities(params: any): Promise<any>;
    abstract getCityByPK(idCity: number): Promise<City>;
    abstract createCity(city: City): Promise<City>;
    abstract updateCity(idCity: number, company: City): Promise<City>;
    abstract enableCity(idCity: number): Promise<City>;
    abstract disableCity(idCity: number): Promise<City>;
    abstract deleteCity(idCity: number): Promise<City>;
}