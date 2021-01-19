import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../hero.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {


  // Ejercicio: Crear un filtro para ordenar por nombre ascendente o descendente
  // uso del parametro 'asc' para ascendente o por defecto
  // uso del parametro 'desc' para descendente
  // uso del filtro     heroes | sort:'name':'asc' ( por nombre y ascendente )

  // transfor method
  transform(value: Hero[], args: string): Hero[] {

    // if there are values to sort
    if ( value ) {

      return value.sort( (a: Hero, b: Hero) => {
        if (a[args] < b[args] ) {
            return -1;
        } else if (b[args] < a[args] ) {
            return 1;
        }

        // equals
        return 0;

      });

    }

    return [];

  }

}
