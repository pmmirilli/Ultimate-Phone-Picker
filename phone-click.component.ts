import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-click',
  templateUrl: './phone-click.component.html',
  styleUrls: ['./phone-click.component.scss']
})
export class PhoneClickComponent implements OnInit {

  public phoneNumber: number = 4987532939012;
  private phoneInterval: any; // <- Good practice.

  ngOnInit(): void {
    this.phoneInterval = setInterval(() => { this.phoneNumber++; }, 10);
  }

  onSubmit(): number {
    clearInterval(this.phoneInterval);
    return this.phoneNumber;
  }
}
