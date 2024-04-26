import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces';

@Component({
  selector: 'countries-country-page',
  templateUrl: './country-page.component.html'
})
export class CountryPageComponent implements OnInit {
  public country?: Country;
  public isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ code }) => this.countriesService.searchCountryByAlphaCode( code )),
      )
      .subscribe( country => {
        if ( !country ) return this.router.navigateByUrl('');
        this.isLoading = false;
        return this.country = country;
      });
  }
}
