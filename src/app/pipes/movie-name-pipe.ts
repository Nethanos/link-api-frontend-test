import { Pipe, PipeTransform, Injectable } from '@angular/core';


@Pipe({name: 'movieNamePipe'})
@Injectable({providedIn: 'root'})
export class movieNamePipe implements PipeTransform {
  transform(movieName: string): string {
    return movieName.split(' ').join('-').toLocaleLowerCase();
  }
}