import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { LoadingBackdropService } from './loading-backdrop.service';
import { LibReservPanelService } from '../lib-reserv-panel.service';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CellCalenderReservation, Month } from './cell-calender-reservation.model';


@Component({
  selector: 'lib-component-range-date-picker',
  templateUrl: './component-range-date-picker.component.html',
  styleUrl: './component-range-date-picker.component.css'
})
export class ComponentRangeDatePickerComponent implements OnInit, OnDestroy {
  @Input() RentItemID: string = "";
  @Output() setDateToParent = new EventEmitter<any>();

  cellCalenderReservations: Month[] = [];
  cellCalenderReservationBackup: Month[] = [];
  starttDate: string = "";
  endDate: string = "";
  miladiStartDate: string = "";
  miladiEndDate: string = "";
  actCalender: string = "current";
  startSelectedDay: number[] = [-1, -1];
  endSelectedDay: number[] = [-1, -1];

  constructor(
    private loadingBackdropService: LoadingBackdropService,
    private libReservPanelService: LibReservPanelService) {

  }
  ngOnInit() {
    this.loadCalenderData();

  }
  ngOnDestroy() {
  }
  nextDay() {
    this.actCalender = "next";
    this.loadCalenderData();
  }
  prevDay() {
    this.actCalender = "prev";
    this.loadCalenderData();
  }
  private loadCalenderData() {

    if (this.RentItemID) {
      this.loadingBackdropService.show();
      this.libReservPanelService
        .get(this.RentItemID, this.starttDate, this.endDate, this.miladiStartDate, this.miladiEndDate, this.actCalender)
        .pipe(finalize(() => this.loadingBackdropService.hide()))
        .subscribe(
          (data) => {
            this.cellCalenderReservations = data.data;
            this.cellCalenderReservationBackup = data.data;
            this.starttDate = data.startDate;
            this.endDate = data.endDate;
            this.miladiStartDate = data.miladiStartDate;
            this.miladiEndDate = data.miladiEndDate;
          },
          error => { },
        );
    } else {
      alert('error');
    }
  }
  setchoice(indexMonth: number, indexDay: number, istimeout: number) {
    if (istimeout == 0) {
      if (this.startSelectedDay[0] != -1 && this.startSelectedDay[1] != -1 && this.endSelectedDay[0] != -1 && this.endSelectedDay[1] != -1) {

      }
      else if (this.startSelectedDay[0] == -1 && this.startSelectedDay[1] == -1) {
        this.startSelectedDay[0] = indexMonth;
        this.startSelectedDay[1] = indexDay;
        this.cellCalenderReservations[indexMonth].Days[indexDay].selected_in_range_date = 1;
        this.cellCalenderReservations[indexMonth].Days[indexDay].checkin_selected_in_range_date = 1;
        this.cellCalenderReservations[indexMonth].Days[indexDay].checkin_selected_date = 1;
      }
      else {
        if (indexMonth > this.startSelectedDay[0] || (indexMonth == this.startSelectedDay[0] && indexDay >= this.startSelectedDay[1])) {
          this.endSelectedDay[0] = indexMonth;
          this.endSelectedDay[1] = indexDay;
          this.cellCalenderReservations[indexMonth].Days[indexDay].selected_in_range_date = 1;
          this.cellCalenderReservations[indexMonth].Days[indexDay].checkout_selected_date = 1;
          this.cellCalenderReservations[indexMonth].Days[indexDay].checkout_selected_in_range_date = 1;
          if (indexMonth == this.startSelectedDay[0]) {
            for (let i = this.startSelectedDay[1] + 1; i < indexDay; i++) {
              this.cellCalenderReservations[indexMonth].Days[i].selected_in_range_date = 1;
              this.cellCalenderReservations[indexMonth].Days[i].checkout_selected_date = 0;
              this.cellCalenderReservations[indexMonth].Days[i].checkout_selected_in_range_date = 0;
            }
          }
          else {
            for (let i = this.startSelectedDay[1] + 1; i < this.cellCalenderReservations[this.startSelectedDay[0]].Days.length; i++) {
              this.cellCalenderReservations[this.startSelectedDay[0]].Days[i].selected_in_range_date = 1;
              this.cellCalenderReservations[this.startSelectedDay[0]].Days[i].checkout_selected_date = 0;
              this.cellCalenderReservations[this.startSelectedDay[0]].Days[i].checkout_selected_in_range_date = 0;
            }
            for (let i = 0; i < indexDay; i++) {
              this.cellCalenderReservations[indexMonth].Days[i].selected_in_range_date = 1;
              this.cellCalenderReservations[indexMonth].Days[i].checkout_selected_date = 0;
              this.cellCalenderReservations[indexMonth].Days[i].checkout_selected_in_range_date = 0;
            }
          }
          this.SetstartDateToParent(
            this.cellCalenderReservations[this.startSelectedDay[0]].Days[this.startSelectedDay[1]].DateS,
            this.cellCalenderReservations[this.endSelectedDay[0]].Days[this.endSelectedDay[1]].DateS,
            this.cellCalenderReservations[this.startSelectedDay[0]].Days[this.startSelectedDay[1]].DateM,
            this.cellCalenderReservations[this.endSelectedDay[0]].Days[this.endSelectedDay[1]].DateM

          );

        }
        else {

          this.cellCalenderReservations[this.startSelectedDay[0]].Days[this.startSelectedDay[1]].selected_in_range_date = 0;
          this.cellCalenderReservations[this.startSelectedDay[0]].Days[this.startSelectedDay[1]].checkin_selected_in_range_date = 0;
          this.cellCalenderReservations[this.startSelectedDay[0]].Days[this.startSelectedDay[1]].checkin_selected_date = 0;
          this.startSelectedDay[0] = indexMonth;
          this.startSelectedDay[1] = indexDay;
          this.cellCalenderReservations[indexMonth].Days[indexDay].selected_in_range_date = 1;
          this.cellCalenderReservations[indexMonth].Days[indexDay].checkin_selected_in_range_date = 1;
          this.cellCalenderReservations[indexMonth].Days[indexDay].checkin_selected_date = 1;


        }
      }
    }
  }
  SetInRange(indexMonth: number, indexDay: number, istimeout: number) {
   
    if (istimeout == 0) {
      if (this.startSelectedDay[0] != -1 && this.startSelectedDay[1] != -1 && this.endSelectedDay[0] == -1
        && this.endSelectedDay[1] == -1) {
        if (indexMonth > this.startSelectedDay[0] || (indexMonth == this.startSelectedDay[0]
          && indexDay >= this.startSelectedDay[1])) {
            for (let i = 0; i < this.cellCalenderReservations.length; i++) {
              for (let j = 0; j < this.cellCalenderReservations[i].Days.length; j++) {
                this.cellCalenderReservations[i].Days[j].selected_in_range_date = 0;
              }
            }

          if (indexMonth == this.startSelectedDay[0]) {
            for (let i = this.startSelectedDay[1] + 1; i < indexDay; i++) {
              this.cellCalenderReservations[indexMonth].Days[i].selected_in_range_date = 1;
            }

          }
          else {
            for (let i = this.startSelectedDay[1] + 1; i < this.cellCalenderReservations[this.startSelectedDay[0]].Days.length; i++) {
              this.cellCalenderReservations[this.startSelectedDay[0]].Days[i].selected_in_range_date = 1;
            }
            for (let i = 0; i < indexDay; i++) {
              this.cellCalenderReservations[indexMonth].Days[i].selected_in_range_date = 1;
            }
          }

        }

      }
    }
  }

  SetstartDateToParent(stratDate: string, endDate: string, miladiStartDate: string, miladiEndDate: string) {
    this.setDateToParent.emit([stratDate, endDate, miladiStartDate, miladiEndDate]);
  }
  clearCalender() {
    this.actCalender = "current";
    this.startSelectedDay = [-1, -1];
    this.endSelectedDay = [-1, -1];
    this.loadCalenderData();
  }

}
