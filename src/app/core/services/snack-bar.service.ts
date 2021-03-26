import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar = (
    text: string,
    closeText: string = 'Close',
    duration: number = 2000,
    horizontalPosition: MatSnackBarHorizontalPosition = 'center',
    verticalPosition: MatSnackBarVerticalPosition = 'top'
  ): MatSnackBarRef<TextOnlySnackBar> => {
    return this._snackBar.open(text, closeText, {
      duration,
      horizontalPosition,
      verticalPosition,
    });
  };

  openSnackBarRedirect = (
    text: string,
    closeText: string = 'Close',
    duration: number = 2000,
    callback: () => void,
    horizontalPosition: MatSnackBarHorizontalPosition = 'center',
    verticalPosition: MatSnackBarVerticalPosition = 'top'
  ) => {
    let ref = this._snackBar.open(text, closeText, {
      duration,
      horizontalPosition,
      verticalPosition,
    });
    ref.afterDismissed().subscribe(() => {
      callback();
    });
    ref.onAction().subscribe(() => {
      callback();
    });
  };
}
