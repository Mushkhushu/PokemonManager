import { Component, inject } from '@angular/core';
import { Generation } from '../../interfaces/generation';
import { ApiGenerationService } from '../../services/api-generation.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UpperCasePipe],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.scss'
})

export class GenerationsComponent {
private apiGenerationService: ApiGenerationService = inject(ApiGenerationService);
public generations: Array<Generation> = []


 constructor() {
   this.getGenerations();
 }

getGenerations(): void {
  this.apiGenerationService.getGenerations()
    .subscribe({    
      next: (generations: any) => {
       console.log(generations)
         this.generations = generations.results
      },
      error: (error: any) => {
         console.log('Some error happenned')
        console.error(error)
      }     })
}

}
