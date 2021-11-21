<template>
  <div>
    <div class="hello">
      <h1>counter</h1>
      <h1>{{ counterValue }}</h1>

      <ul v-if="userDetails">
        <li v-for="user in userDetails" v-bind:key="user.name">
          {{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const Counter = namespace("Counter");
const User = namespace("User");

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  @Counter.Getter
  public counterValue!: number;

  @User.Getter
  public userDetails!: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
