import {Inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, StorageService} from 'ngx-webstorage-service';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public StoreRegisterDetailsInLocalStorage(fg: FormGroup): void {
    this.storage.set('FIRST_NAME', JSON.stringify(fg.get('firstName').value));
    this.storage.set('LAST_NAME', JSON.stringify(fg.get('lastName').value));
    this.storage.set('EMAIL_ID', JSON.stringify(fg.get('emailID').value));
    this.storage.set('USER_NAME', JSON.stringify(fg.get('userName').value));
    this.storage.set('PASSWORD', JSON.stringify(fg.get('password').value));
  }
}
