import { TITLE_DELETE, DESCRIPTION_DELETE } from './constants';
import Swal, { SweetAlertResult } from 'sweetalert2';

export const deleteAlert = <T>(id: T, callback: (id: T) => void) => {
  Swal.fire({
    title: TITLE_DELETE,
    text: DESCRIPTION_DELETE,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si',
    cancelButtonText: 'No',
  }).then((result: SweetAlertResult) => {
    if (result.value) {
      callback(id);
    }
  });
};
