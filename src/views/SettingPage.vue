<template>
  <div class="d-flex justify-content-center">
    <NavBar
      :initial-setting="isSetting"
    />
    <div class="main-wrapper">
      <NavpillHeader />
      <SettingForm />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import NavpillHeader from "../components/NavpillHeader.vue";
import SettingForm from "../components/SettingForm.vue";

export default {
  name: "SettingPage",
  components: {
    NavBar,
    NavpillHeader,
    SettingForm,
  },
  data () {
    return {
      isSetting: true,
    }
  }
};
</script>
