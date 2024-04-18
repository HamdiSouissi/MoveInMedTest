export interface Patient {
  firstName: string;
  lastName: string;
  age: number;
  sex: string
  gender: string
  phone: string;
  protocol: string;
  pathology: string;
  protocolStartDate: Date;
  referringPractitionerFirstName: string;
  referringPractitionerLastName: string;
  referringDoctorFirstName: string;
  referringDoctorLastName: string;
}
