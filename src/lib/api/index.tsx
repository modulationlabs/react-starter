import * as React from 'react';
import * as _ from 'lodash';

export default class Http {

  public headers: Headers;
  public defaultOptions: RequestInit;

  constructor() {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.defaultOptions = {
      headers: this.headers,
      mode: 'cors',
      cache: 'default'
    }
  }

  options(additionalObject: any) {
    return Object.assign({}, this.defaultOptions, additionalObject);
  }

  get(url: string, options?: RequestInit) {
    return fetch(url, options);
  }

  post(url: string, body: Object, options: any) {
    return fetch(url, options({ method: 'POST' }));
  }

  patch(url: string, body: Object, options: any) {
    return fetch(url, options({ method: 'PATCH' }));
  }

  put(url: string, body: Object, options: any) {
    return fetch(url, options({ method: 'PUT' }));
  }

  del(url: string, options: any) {
    return fetch(url, options({ method: 'DELETE' }));
  }

}