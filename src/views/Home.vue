<template>
  <div class="home">
    <nav-bar :name="userDetails.name"></nav-bar>
    <div>
      <h1>PROFILE DETAILS</h1>
    </div>
    <section class="summary-cont">
      <span>
        <p>Account Number</p>
        <h5>674752528577</h5>
      </span>
      <span>
        <p>Income</p>
        <h5>$2478</h5>
      </span>
      <span>
        <p>Spends</p>
        <h5>4275</h5>
      </span>
    </section>

    <section v-if="userDetails" class="profile">
      <span>
        <p>Name</p>
        <h4>{{ userDetails.name }}</h4>
      </span>
      <span>
        <p>Email</p>
        <h4>{{ userDetails.email }}</h4>
      </span>
    </section>
    <button @click="toggleUpdate()" class="btn">
      {{ toggle ? "CANCEL" : "UPDATE" }}
    </button>

    <div class="form-cont" v-if="toggle">
      <form name="form" @submit.prevent="updateProfile()">
        <div>
          <label>Full Name:</label>
          <input v-model="user.name" type="text" name="name" />
        </div>
        <div>
          <label>Email:</label>
          <input v-model="user.email" type="text" name="email" />
        </div>
        <div v-if="errors.length" class="error">
          Please correct the following error(s):
          <ul>
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </ul>
        </div>
        <div>
          <button class="btn">SUBMIT</button>
        </div>
      </form>
    </div>
    <div>
      <button class="exit-btn btn" @click="exit()">EXIT</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavBar from "../components/Navbar.vue";
import { namespace } from "vuex-class";
const User = namespace("User");

@Component({
  components: {
    NavBar,
  },
})
export default class Home extends Vue {
  public toggle = false;

  private user: any = {
    name: "",
    email: "",
  };
  private errors: any = [];

  @User.Action
  private update!: (data: any) => void;

  @User.Getter
  public userDetails!: any;
  public error!: boolean;

  toggleUpdate() {
    this.toggle = !this.toggle;
  }
  exit() {
    this.$router.push("/login");
  }

  updateProfile() {
    const user = {
      name: this.user.name,
      email: this.user.email,
      id: this.userDetails.id,
    };
    this.errors = [];

    if (!this.user.email) {
      this.errors.push("Email required");
    } else if (!this.validEmail(this.user.email)) {
      this.errors.push("valid email required");
    }
    if (this.user.password === "") {
      this.errors.push("password can't be empty");
    }
    if (!this.errors.length) {
      this.update(user);
      this.toggle = false;
    }
  }

  validEmail(email: any) {
    var re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
</script>

<style scoped>
.btn {
  border: none;
  outline: none;
  background-color: #d90427bd;
  color: #ffffff;
  width: 150px;
  height: 45px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.exit-btn {
  background-color: rgb(179, 174, 174);
}
.form-cont {
  width: 40%;
  min-height: 230px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.658);
}
form {
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  gap: 20px;
}
input {
  width: 320px;
  height: 50px;
  background: #e8e8e8;
  border-radius: 12px;
  border: none;
}
.summary-cont {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff0f3;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.658);
}

.profile {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff0f3;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.658);
  margin-top: 50px;
}
.error {
  color: rgba(255, 0, 0, 0.986);
}
</style>
