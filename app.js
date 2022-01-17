// initialize app
const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue and build amazing apps!",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      const { courseGoalA, courseGoalB } = this;

      return randomNumber < 0.5 ? courseGoalA : courseGoalB;
    },
  },
});

/* mount app in DOM allow us to link Vue to section with id user-goal */
app.mount("#user-goal");
