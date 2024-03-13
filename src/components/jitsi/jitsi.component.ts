import { AfterViewInit, Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development';
declare var JitsiMeetExternalAPI: any;

@Component({
  selector: 'app-jitsi',
  templateUrl: './jitsi.component.html',
  styleUrl: './jitsi.component.css',
})
export class JitsiComponent implements OnInit, AfterViewInit {

  domain: string = environment.jitsiBaseDomain;
  room: any;
  options: any;
  api: any;

  ngOnInit(): void {
    this.room = 'supersecretroomname';
  }

  ngAfterViewInit(): void {
    this.options = {
      roomName: this.room,
      width: '100em',
      height: '50em',
      parentNode: document.querySelector('#meet')
    };
    this.api = new JitsiMeetExternalAPI(this.domain, this.options);
    this.api.addEventListener('videoConferenceLeft', this.videoConferenceLeftHandler);
    this.api.addEventListener('participantLeft', this.participantLeftHandler);
  }

  participantLeftHandler = async (participant: any) => {
    console.log('Participant left', participant);
  }

  videoConferenceLeftHandler = async (participant: any) => {
    console.log('conference left', participant);
  }
}
