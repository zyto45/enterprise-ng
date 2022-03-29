import {
  Component,
  HostBinding,
  OnInit,
  ViewChild
} from '@angular/core';

//@ts-ignore
import { SohoMonthViewComponent } from 'ids-enterprise-ng';

@Component({
  selector: 'app-monthview-legend-demo',
  templateUrl: './monthview-legend.demo.html',
})
export class MonthViewLegendDemoComponent implements OnInit {

  @ViewChild(SohoMonthViewComponent) sohoMonthViewComponent?: SohoMonthViewComponent;

  public initialMonth = 0;
  public initialDay = 5;
  public initialYear = 2017;

  public legends = [
    { name: 'Public Holiday', color: 'emerald06', dates: ['1/2/2017', '1/12/2017'] },
    { name: 'Weekends', color: 'amber06', dayOfWeek: [0, 6] },
    { name: 'Other', color: 'ruby03', dates: ['1/8/2017', '1/9/2017', '1/23/2017'] },
    { name: 'Half Days', color: 'amethyst06', dates: ['1/21/2017', '1/22/2017'] },
    { name: 'Full Days', color: 'azure03', dates: ['1/24/2017', '1/25/2017'] }
  ];

  public febLegend = [
    { name: 'Other', color: 'ruby03', dates: ['2/8/2017', '2/9/2017', '2/23/2017'] }
  ];

  ngOnInit() { }

  onBeforeRenderMonth() {
    console.log("beforemonthrendered");
    this.sohoMonthViewComponent?.loadLegend(this.febLegend);
  }

  onRenderMonth(event: SohoMonthViewRenderEvent) {
    console.log("month", event);
  }

  onAfterRenderMonth() {
    console.log("aftermonthrendered");
  }
}
