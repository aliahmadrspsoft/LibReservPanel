import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-LibReservPanel',
  templateUrl: './lib-reserv-panel.component.html',
  styleUrl: './lib-reserv-panel.component.css'
})
export class LibReservPanelComponent {
  @Input() RentItemID: string = "";
  @Input() Cap: number = 0;
  maxcount: number = 0;
  mincount: number = 0;
  countperson: number = 0;
  strcount: string = "";
  toggleadd: boolean = true;
  togglesubtract: boolean = false;
  title = 'appreserve';
  showDateToggle: boolean = false;
  startDateReservation: string = "";
  endDateReservation: string = "";
  miladiStartDateReservation: string = "";
  miladiEndDateReservation: string = "";
  public setShowDateToggle() {
    this.showDateToggle = !this.showDateToggle;
  }
  clearSelectedDate(){
    this.startDateReservation = "";
    this.endDateReservation = "";
    this.miladiStartDateReservation = "";
    this.miladiEndDateReservation = "";
  }
  GetOutputValDate(dates: string[]) {
    this.startDateReservation = dates[0];
    this.endDateReservation = dates[1];
    this.miladiStartDateReservation = dates[2];
    this.miladiEndDateReservation = dates[3];
    this.showDateToggle=false;
  }
  public addperson(event: any) {
    this.maxcount=this.Cap;
    if (this.countperson < this.maxcount) {
      this.countperson++;
    }
    if (this.countperson >= this.maxcount) {

      this.toggleadd = false;
    }
    else {
      this.togglesubtract = false;
    }

    this.strcount = this.countperson + " نفر ";
  }
  public subtractperson(event: any) {
    if (this.countperson > 0) {
      this.countperson--;
    }
    if (this.countperson <= this.mincount) {

      this.togglesubtract = true;
    }
    else {
      this.toggleadd = true;
    }

    this.strcount = this.countperson + " نفر ";
  }
}
