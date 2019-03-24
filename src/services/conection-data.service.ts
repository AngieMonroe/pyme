import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Item {
  name?: string, 
  firstName?: string,
  rfc?: string, //opcional
  age?: number,
  phone?:number,
  email?:string,
  password?:string
}

@Injectable({
  providedIn: 'root'
})

export class ConectionDataService {
  private itemsCollection: AngularFirestoreCollection<Item>;
 items: Observable<Item[]>
 private itemDoc: AngularFirestoreDocument<Item>

  constructor(private afs:AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return{ id, ...data}
      })
    }))
  }

   listItem(){
     return this.items;
   }

   addItem(item:Item){
     this.itemsCollection.add(item);
   }

   deleteItem(item){
     this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
     this.itemDoc.delete();
   }

   editItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
