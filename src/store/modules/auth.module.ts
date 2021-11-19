// state : { status and user details}
// actions: { user can login , logout, and register}
//mutations: { }
// getters {  is user is logged In}

import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
class Counter extends VuexModule {
  //public title = "sathya ji";
  public counter = 0;

  @Mutation
  public setCounter() {
    this.counter++;
  }

  @Action
  public setCounterAction() {
    this.context.commit("setCounter");
  }

  get counterValue() {
    return this.counter * 100;
  }
}
export default Counter;
