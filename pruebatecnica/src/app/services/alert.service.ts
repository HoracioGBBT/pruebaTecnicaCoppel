import { Injectable } from '@angular/core';
declare var Swal: any;
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  showSuccessAlert(title: string, message: string, callback: any) {
    Swal.fire(
      {
        title: title,
        text: message,
        icon: 'success'
      }
    ).then(callback);
  }

  showErrorAlert(message: string,callback:any) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: message,
    }).then(callback);
  }
  
  confirmAlert(message:string){
    return new Promise((resolve,reject) =>{
      Swal.fire({
        title: '¿Estas seguro?',
        text: message,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#28bb4b",
        cancelButtonColor: "#f34e4e",
        confirmButtonText: "Confirmar",
        cancelButtonText: 'Cancelar'
      }).then(function (result:any) {
        if (result.value) {
          resolve(true);
        }else{
          resolve(false);
        }
    });
    });
  }

  promptAlert(message:string){
    return new Promise((resolve,reject) =>{
      Swal.fire({
        title: '¿Estas seguro?',
        text: message,
        input: 'text',
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#28bb4b",
        cancelButtonColor: "#f34e4e",
        confirmButtonText: "Confirmar",
        cancelButtonText: 'Cancelar'
      }).then(function (result:any) {
        if (result.value) {
          resolve(result.value);
        }else{
          resolve(false);
        }
    });
    });
  }

  promptAlertUse(message:string){
    return new Promise((resolve,reject) =>{
      Swal.fire({
        title: '¿Estas seguro?',
        text: message,
        input: 'text',
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#28bb4b",
        cancelButtonColor: "#f34e4e",
        confirmButtonText: "Confirmar",
        cancelButtonText: 'Cancelar'
      }).then(function (result:any) {
        if (result.dismiss === Swal.DismissReason.cancel) {
          resolve({ approved: false, text: null });
        } else if (result.dismiss === Swal.DismissReason.backdrop || result.dismiss === Swal.DismissReason.esc) {
          resolve({ approved: false, text: '' });
        }else if (result.value) {
          resolve({ approved: true, text: result.value });
        } else {
          resolve({ approved: true, text: '' });
        }
      });
    });
}
yesNoAlert(message:string){
  return new Promise((resolve,reject) =>{
    Swal.fire({
      title: '¿Estas seguro?',
      text: message,
      icon: "question",
      showCancelButton: true,
      cancelButtonColor: "#f34e4e",
      confirmButtonText: "Acepto",
      cancelButtonText: 'No Acepto',
      allowOutsideClick: true
    }).then(function (result:any) {
      if (result.dismiss === Swal.DismissReason.backdrop) {
        // Si se hace clic fuera, no se hace nada
      } else if (result.value) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}




}
