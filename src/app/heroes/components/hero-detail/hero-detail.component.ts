import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Hero } from 'src/app/core/models/hero.model';
import { HeroService } from 'src/app/core/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero!: Hero;
  isEditing = false;

  form = this.fb.group({
    id: [{ value: 0, disabled: true }],
    name: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(
    private heroService: HeroService,
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const paramid = this.route.snapshot.paramMap.get('id');

    if (paramid != 'new') {
      this.isEditing = true;
      const id = Number(paramid);
      this.heroService.getById(id).subscribe((hero) => {
        this.hero = hero;
        this.form.setValue({
          id: hero.id,
          name: hero.name,
        });
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  update(): void {
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        id: this.hero.id,
        name: value.name,
      } as Hero;

      this.heroService.update(hero).subscribe(() => {
        this.goBack();
      });
    } else {
      this.showError();
    }
  }

  create(): void {
    const { valid, value } = this.form;

    if (valid) {
      const hero: Hero = {
        name: value.name!,
      } as Hero;

      this.heroService.create(hero).subscribe(() => {
        this.goBack();
      });
    } else {
      this.showError();
    }
  }

  private showError(): void {
    this.snackBar.open('Please check the errors found.', 'Ok', {
      duration: 5000,
      verticalPosition: 'bottom',
    });
  }
}
