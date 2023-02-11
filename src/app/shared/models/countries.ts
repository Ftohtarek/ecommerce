import { Injectable } from '@angular/core';
import { Country, City } from 'country-state-city';
@Injectable({
    providedIn: 'root'
})
export class Countries {
    constructor() { }

    citiesOfCountry(countryName: any): string[] {
        const isoCode = this.getCountryIsoCode(<string>countryName);
        return <string[]>City.getCitiesOfCountry(isoCode)?.map(c => c.name)
    }

    get countriesName(): string[] {
        return Country.getAllCountries().map(countries => countries.name)
    }

    private getCountryIsoCode = (countryName: string): string =>
        Country.getAllCountries().filter(coutries => coutries.name == countryName).flatMap(city => city.isoCode)[0]

}