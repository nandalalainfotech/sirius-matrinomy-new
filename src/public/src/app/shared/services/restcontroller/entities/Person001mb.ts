import { BaseEntity } from "./BaseEntity";
import { Categorydetails001mb } from "./Categorydetails001mb";
import { City001mb } from "./City001mb";
import { Companydetails001mb } from "./Companydetails001mb";
import { Country001mb } from "./Country001mb";
import { Language001mb } from "./Language001mb";
import { Login001mb } from "./Login001mb";
import { Regionaldetails001mb } from "./Regionaldetails001mb";
import { Religion001mb } from "./Religion001mb";
import { Role001wb } from "./Role001wb";
import { State001mb } from "./State001mb";
import { Subcatclassification001mb } from "./Subcatclassification001mb";
import { Subcategory001mb } from "./Subcategory001mb";
import { Subscribercontentauth001wb } from "./Subscribercontentauth001wb";
import { Subscriberdetails001wb } from "./subscriberdetails001wb";
import { subscriberpersonalinfo001wb } from "./Subscriberpersonalinfo001wb";
import { Subscriberprofessionalinfo002wb } from "./Subscriberprofessionalinfo002wb";
import { User001wb } from "./users001wb";

export class Person001mb extends BaseEntity {
  userid?: User001wb | any;
  loginid?: Login001mb | any;
  subscriberdetailsid?: Subscriberdetails001wb | any;
  regionalid?: Regionaldetails001mb;
  companycode?: Companydetails001mb;
  roleid?: Role001wb;
  subcatcode?: Subcategory001mb;
  professionalid?: Subscriberprofessionalinfo002wb;
  categoryid?: Categorydetails001mb;
  languageid?: Language001mb;
  personalid?: subscriberpersonalinfo001wb;
  religionid?: Religion001mb;
  classificationid?: Subcatclassification001mb;
  subscsubspid?: Subscribercontentauth001wb;
  stateid?: State001mb;
  cityid?: City001mb;
  countryid?: Country001mb;
  token?: string;
  firstname?: string;
  lastname?: string;
  zipcode?: number;
  dob?: number;
  confirmemail?: string;
  landline?: number;
  age?: number;
  sex?: string;
  email?: string;
  address?: string;
  phoneno?: number;
  verified?: boolean;
  static sex: string;
  
}