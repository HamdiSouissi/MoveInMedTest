import { Component } from '@angular/core';
import { Patient } from '../interface/patient';

@Component({
  selector: 'app-patient-information',
  templateUrl: './patient-information.component.html',
  styleUrls: ['./patient-information.component.scss']
})
export class PatientInformationComponent {

    patientData: Patient = {
    firstName: 'Danielle',
    lastName: 'Hon',
    age: 43,
    sex: 'MALE',
    gender: 'CISGENDER',
    phone: '+33 6 52 25 88 64',
    protocol: 'chimio',
    pathology : 'cancer du sein',
    protocolStartDate: new Date('2023-10-09'),
    referringPractitionerFirstName: 'Josie',
    referringPractitionerLastName: 'BALLARD',
    referringDoctorFirstName :'Alexandre',
    referringDoctorLastName : 'HINTEUR',
  };
}
