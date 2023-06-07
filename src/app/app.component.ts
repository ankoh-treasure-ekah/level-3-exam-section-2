import { Component } from '@angular/core';
import { Task, TaskDialogResult } from './interfaces/task';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
// import {Database} from '@angular/fire/database'
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kanban-fire';
  constructor(private dialog: MatDialog, private store: AngularFirestore){}

  // db = getFirestore();
  
  todo = this.store.collection('todo').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  inProgress = this.store.collection('inProgress').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  done = this.store.collection('done').valueChanges({ idField: 'id' }) as Observable<Task[]>;

  // db = getFirestore()

  // toDoCo = collection(this.db, 'todo');
  // inProgressCo = collection(this.db, 'inProgress');
  // doneCo = collection(this.db, 'done');

  // queryTodo = query(this.toDoCo);
  // queryinP = query(this.inProgressCo);
  // queryDone = query(this.toDoCo);



  // data = 







  
  // data = dataBase.list()




  // todo = fireStore.collection('todo').valueC

  // todo: Task[] = [
  //   {
  //     title: 'Buy milk',
  //     description: 'Go to the store and buy milk'
  //   },
  //   {
  //     title: 'Create a Kanban app',
  //     description: 'Using Firebase and Angular create a Kanban app!'
  //   }
  // ];

  // inProgress: Task[] = [];
  // done: Task[] = [];

  // editTask(list: 'done' | 'todo' | 'inProgress', task: Task): void {
  //   const dialogRef = this.dialog.open(TaskDialogComponent, {
  //     width: '270px',
  //     data: {
  //       task,
  //       enableDelete: true,
  //     },
  //   });
  //   dialogRef.afterClosed().subscribe((result: TaskDialogResult|undefined) => {
  //     if (!result) {
  //       return;
  //     }
  //     if (result.delete) {
  //       this.store.collection(list).doc(task.id).delete();
  //     } else {
  //       this.store.collection(list).doc(task.id).update(task);
  //     }
  //   });
  // }

  // drop(event: CdkDragDrop<any>): void {
  //   if (event.previousContainer === event.container) {
  //     return;
  //   }
  //   const item = event.previousContainer.data[event.previousIndex];
  //   this.store.firestore.runTransaction(() => {
  //     const promise = Promise.all([
  //       this.store.collection(event.previousContainer.id).doc(item.id).delete(),
  //       this.store.collection(event.container.id).add(item),
  //     ]);
  //     return promise;
  //   });
  //   transferArrayItem(
  //     event.previousContainer.data,
  //     event.container.data,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  // }

  // newTask(): void {
  //   const dialogRef = this.dialog.open(TaskDialogComponent, {
  //     width: '270px',
  //     data: {
  //       task: {},
  //     },
  //   });
  //   dialogRef
  //     .afterClosed()
  //     .subscribe((result: TaskDialogResult|undefined) => {
  //       if (!result) {
  //         return;
  //       }
  //       this.store.collection('todo').add(result.task)
  //     });
  // }

  dashboard: boolean = false;
  carte: boolean = false;

  notification: number = 0;

  items: any[] = [];

  incrementCarte(item: any) {
    if(item) {
      this.notification++;
      item.amount = 1;
      this.items.push(item);
      console.log(item)
    }
  }

  deleteTask(item: any) {
    this.notification--;
    this.items = [...this.items.slice(0, this.items.indexOf(item)), ...this.items.slice(this.items.indexOf(item)+1, this.items.length)];
  }

  cartNum(e: any) {
    if(e) {
      this.notification++;
      return
    }
    this.notification--;
  }

}
