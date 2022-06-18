import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-tab',
  templateUrl: './contact-tab.component.html',
  styleUrls: ['./contact-tab.component.scss'],
})
export class ContactTabComponent implements OnInit {
  contactForm = {} as FormGroup;
  isSubmit = false;
  submitMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private firestore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required],
    });
  }

  submitData(value: FormData) {
    this.firestore
      .collection('messages')
      .add(value)
      .then((res) => {
        this.submitMessage = 'Your message has been sent';
      })
      .catch((err) => {
        console.log('err' + err);
      });
  }
}
