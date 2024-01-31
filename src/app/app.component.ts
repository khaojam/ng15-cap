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
    this.frameSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://dev.api.connectsolutions.ch/html/e3/e3507f37-dc73-46bd-95f8-daa11273c134/index.html');
  }
}
