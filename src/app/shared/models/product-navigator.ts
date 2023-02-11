import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";

export class ProductWithNavigator {
    constructor(operatrion: any, private router: Router) {
        this.router.navigate(['/admin/products'])
    }

    changNavigation = (value: string) =>
        this.router.navigate([value])

    noteifiy = (snackBar: MatSnackBar, operator: string = 'Operator') =>
        snackBar.open("Product " + operator + ' succussfully ', 'thanks', { duration: 1000 * 5 })

}
