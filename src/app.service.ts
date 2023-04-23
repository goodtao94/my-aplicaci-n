import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloByName(name: string): string {
    return this.getHello() + ' ' + name;
    //return ${this.getHello()} ${name};
  }
  getHello(): string {
    return 'Hello World!';
  }
  getName(): string {
    return 'Mi nombre es Gustavo Mendoza';
  }
  getProfesora(): string {
    return 'La Profesora es ANGIE DURLEY VALERA ALARCON';
  }
  getAlumnos(limit: number, offset: number): string {
    return `Alumnos desde el id ${offset}, cantidad de Alumnos a mostrar ${limit}`;
  }
  getEstudiante(name, carrera): string {
    return `El nombre del alumno es ${name}, de la carrera ${carrera}`;
  }
}
