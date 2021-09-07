import { Profile } from "./profile";

export interface Contact {
  id: string;
  displayName: string;
  category: string;
  description?: string;
  phoneNumber?: string;
  gsmNumber?: string;
  email?: string;
  website?: string;
  address?: string;
  isFavorited: boolean;
  zip?: string;
  city?: string;
  country?: string;
  createdAt: Date | null;
  favorited: Profile[]
}

export class Contact implements Contact {
  constructor(init?: ContactFormValues) {
      Object.assign(this, init);
  }
}

export class ContactFormValues {
  id?: string = undefined;
  displayName: string = "";
  category: string = "";
  description?: string = "";
  phoneNumber?: string = "";
  gsmNumber?: string = "";
  email?: string = "";
  website?: string = "";
  address?: string = "";
  zip?: string = "";
  city?: string = "";
  country?: string = "";
  createdAt: Date = new Date();

  constructor(contact?: ContactFormValues) {
    if (contact) {
      this.id = contact.id;
      this.displayName = contact.displayName;
      this.category = contact.category;
      this.description = contact.description
      this.phoneNumber = contact.phoneNumber
      this.gsmNumber = contact.gsmNumber
      this.email = contact.email
      this.website = contact.website
      this.address = contact.address
      this.zip = contact.zip
      this.city = contact.city
      this.phoneNumber = contact.phoneNumber
      this.country = contact.country
    }
  }
}