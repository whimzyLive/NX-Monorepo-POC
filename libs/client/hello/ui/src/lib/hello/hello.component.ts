import { HelloInterface } from '@poc-nx-workspace/api/hello/data-access';
import { Component } from '@angular/core';

@Component({
  selector: 'poc-nx-workspace-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss'],
})
export class HelloComponent {
  data = {
    text: 'Hi there!'
  } as HelloInterface
}
