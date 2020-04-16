import { Component, OnInit } from "@angular/core";
import { DeseosService } from "../../services/deseos.service";
import { ActivatedRoute } from "@angular/router";
import { Lista } from "../../models/lista.model";
import { ListaItem } from '../../models/lista-item.model';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: "app-agregar",
  templateUrl: "./agregar.page.html",
  styleUrls: ["./agregar.page.scss"],
})
export class AgregarPage implements OnInit {
  lista: Lista;
  nombreItem: string = '';

  constructor(private deseosService: DeseosService,
    private route: ActivatedRoute) {

    const listaId = this.route.snapshot.paramMap.get("listaId");
    this.lista = this.deseosService.obtenerLista(listaId);
  }

  ngOnInit() { }


  agregarElemento() {
    if (this.nombreItem.length === 0) {
      return;
    } else {
      const elementoLista = new ListaItem(this.nombreItem);
      this.lista.items.push(elementoLista);
      this.nombreItem = '';
      this.deseosService.guardarStorage();
    }
  }

  cambioCheck(item: ListaItem) {
    const pendientes = this.lista.items.filter(itemData => {
      return !itemData.completado;
    }).length;
    if (pendientes === 0) {
      this.lista.terminadaEn = new Date();
      this.lista.terminada = true;
    } else {
      this.lista.terminadaEn = null;
      this.lista.terminada = false;
    }
    this.deseosService.guardarStorage();
    console.log(this.deseosService.listas);
  }


  borrar(index: number) {
    this.lista.items.splice(index, 1);
    this.deseosService.guardarStorage();
  }
}
