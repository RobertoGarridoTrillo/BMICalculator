import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {
  edad = 25;
  peso = 60;
  altura = 120;
  sexo = "masculino";

  constructor(private router:Router) {
  }

  cambiarAltura(event: Event) {
    this.altura = parseInt((event.target as HTMLInputElement).value);

  }

  asignarSexo(txt: string) {
    this.sexo = txt;
  }

  calcularBMI(){
    const BMI = this.peso / Math.pow(this.altura / 100, 2);
    this.router.navigate(['/resultado', BMI.toFixed(1)]);
  }
}
