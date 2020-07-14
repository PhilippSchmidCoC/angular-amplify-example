import { Component, OnInit } from "@angular/core";
import { AmplifyService } from "aws-amplify-angular";
import { API, graphqlOperation } from "aws-amplify";
import { listTasks } from "../../graphql/queries";
import { task } from "../types/task";

import * as Observable from "zen-observable";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { createTask } from "../../graphql/mutations";
import { onCreateTask } from "../../graphql/subscriptions";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title = "amplify-app";
  tasks: Array<task>;
  loading = true;
  public createForm: FormGroup;

  constructor(public amplify: AmplifyService, private fb: FormBuilder) {
    amplify
      .auth()
      .currentAuthenticatedUser()
      .then(console.log);
  }
  async ngOnInit() {
    this.createForm = this.fb.group({
      title: ["", Validators.required],
      description: ["", Validators.required],
      status: ["", Validators.required]
    });

    this.loading = true;
    var response = await API.graphql(graphqlOperation(listTasks));
    this.tasks = (response as any).data.listTasks.items;
    this.loading = false;

    //Subscribe to changes
    var subscription = API.graphql(
      graphqlOperation(onCreateTask)
    ) as Observable<object>;

    subscription.subscribe({
      next: sourceData => {
        const newTask = (sourceData as any).value.data.onCreateTask;
        this.tasks = [newTask, ...this.tasks];
      }
    });
  }

  public async onCreate(task: any) {
    try {
      await API.graphql(
        graphqlOperation(createTask, {
          input: task
        })
      );
      console.log("item created!");
      // this.restaurants = [restaurant, ...this.restaurants];
      this.createForm.reset();
    } catch (e) {
      console.log("error creating task...", e);
    }
  }
}
