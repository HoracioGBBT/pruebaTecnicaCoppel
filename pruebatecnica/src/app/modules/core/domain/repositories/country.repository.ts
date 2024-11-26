import { Country } from "../models/country";

export abstract class CountryRepository{
    abstract getCountries(params: any): Promise<any>;
    abstract getCountryByPK(idCountry: number): Promise<Country>;
    abstract createCountry(country: Country): Promise<Country>;
    abstract updateCountry(idCountry: number, company: Country): Promise<Country>;
    abstract enableCountry(idCountry: number): Promise<Country>;
    abstract disableCountry(idCountry: number): Promise<Country>;
    abstract deleteCountry(idCountry: number): Promise<Country>;
}
