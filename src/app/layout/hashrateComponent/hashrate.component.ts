import { Component, OnInit } from '@angular/core';
import { HashrateService} from '../../services/hashrate.service';

@Component({
  selector: 'app-hashrate',
  templateUrl: './hashrate.component.html',
  styleUrls: ['./hashrate.component.css']
})
export class HashrateComponent implements OnInit {

  public hashRateDiff: string;
  private dataList: any = [];
  constructor(private hashService: HashrateService) {
  }

  ngOnInit() {
    this.fetchHashRate();
  }

  fetchHashRate(): void {
    this.hashService.getHashrate().subscribe(
      data => {
        if (data) {
        this.parseData(data.values[0].y);
        }
      },
      err => {
        console.log(err);
        alert(err.message);
      });
  }

  parseData(jsonData: any) {
    for (let i = 0; i < jsonData.length; i++) {
      this.dataList.push(jsonData[i].y);
      }
      this.getFinalResult();
  }

  getFinalResult() {
    const dataLength = this.dataList.length;
    const todayHashRate = Math.round(this.dataList[dataLength - 1]);
    const yesterdayHashRate = Math.round(this.dataList[dataLength - 2]);
    if ((yesterdayHashRate - todayHashRate) > 20608647 ) {
        this.hashRateDiff = 'Sell';
    } else {
      this.hashRateDiff = 'Buy';
    }
  }
}
