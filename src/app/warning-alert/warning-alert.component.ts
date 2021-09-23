import {Component} from "@angular/core";


@Component({
  selector: 'app-warning',
  template: `
  <p>This is a warning, you are danger!</p>
  `,
  styles: [`
  p {
      padding: 20px;
      color: red;
      border: 1px solid red;
      width: 30%;
      background: mistyrose;
      text-align: center;
  }
  `]
})
export class WarningAlertComponent{}
