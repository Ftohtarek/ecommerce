import { Component } from '@angular/core';

@Component({
  selector: 'e-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  toggleMenuIcon: boolean = false
  userName:string='Ftoh'
  log(e: any) {
    console.log(e)
  }
  toggle(menu:any) {
    this.toggleMenuIcon = !this.toggleMenuIcon
  }
  // selectedChip = (chip: any) => {
  //   this.chipsCategorys.
  //     filter(c => c != chip).
  //     forEach(c => c.isSelected = false)
  //   chip.isSelected = !chip.isSelected
  // }
}
