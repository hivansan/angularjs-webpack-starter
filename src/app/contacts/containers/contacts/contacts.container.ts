import { ContactsService } from './../../services/contacts.service';

/**
 * Import the Component styles
 */
import './contacts.container.scss';

import * as template from './contacts.html';

console.log(template);

class ContactsController {
  contacts: { id: number; firstName: string; lastName: string }[];

  constructor(private contactsService: ContactsService) {
    'ngInject';
  }

  $onInit() {
    this.fetchData();
  }

  remove(id: number) {
    this.contactsService.remove(id);
    this.fetchData();
  }

  private fetchData() {
    this.contactsService.getAll().then((contacts) => {
      this.contacts = contacts;
    });
  }
}

export class ContactsContainer implements angular.IComponentOptions {
  static selector = 'contacts';
  static controller = ContactsController;
  static template = template;
}
