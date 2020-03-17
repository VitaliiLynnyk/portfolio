import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.html',
  styleUrls: [ './contacts.scss' ]
})
export class ContactsComponent {
  msg = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    body: ''
  };

  sendMsg(f) {
    console.log(this.msg);
  }
}
