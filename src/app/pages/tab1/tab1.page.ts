import { Component, Input } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { Lista } from "../../models/lista.model";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  listas: Lista[] = [];
  constructor(
    public deseosService: DeseosService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.listas = this.deseosService.listas;
  }

  async agregarLista() {
    const alert = await this.alertController.create({
      header: "Nueva lista",
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => { 'Cancelar' }
      },
      {
        text: 'Crear',
        handler: (data) => {
          if (data.titulo.length === 0) {
            return;
          }
          const listaId = this.deseosService.crearLista(data.titulo);
          // this.deseosService.crearLista(data.titulo);
          this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
        }
      },
      ],
    });
    alert.present();
  }


  listaSeleccionada(lista: Lista) {
    console.log(lista);
    this.router.navigateByUrl(`/tabs/tab1/agregar/${lista.id}`);
  }
}
