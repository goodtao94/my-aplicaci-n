import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('name')
  getName(): string {
    return this.appService.getName();
  }
  @Get('profesora')
  getProfesora(): string {
    return this.appService.getProfesora();
  }

  @Get('hello/:name')
  getHelloByName(@Param('name') name: string): string {
    return this.appService.getHelloByName(name);
  }

  @Get('buscar/:query/:alumno')
  getBuscarPag(@Param() params): string {
    return `Buscar:${params.query} - Alumno: ${params.alumno}`;
  }
  @Get('estudiante')
  getEstudiante(
    @Query('name') name = 'Gustavo Mendoza',
    @Query('carrera') carrera = 'de Indenieria de sistemas',
  ): string {
    return this.appService.getEstudiante(name, carrera);
  }

  @Get('alumnos')
  getAlumnos(@Query('limit') limit = 20, @Query('offset') offset = 0): string {
    return this.appService.getAlumnos(limit, offset);
  }
}
