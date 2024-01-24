import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng15-cap';

  frameSrc: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.frameSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://testing.api.connectsolutions.ch/html/d8/d833a4ea-0298-4eb9-aac0-7842cb507249/index.html');
  }
}
