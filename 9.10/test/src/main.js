import Vue from "vue";
import App from "./App.vue";
import Config from "./utils/config";

Vue.config.productionTip = false;

Vue.directive("oss-src", (el, binding) => {
    let imgPath = binding.value;
    if (imgPath) {
        el.setAttribute("src", Config.osspath + imgPath);
    }
});

Vue.filter("timeFormat", function(value) {
    var time = new Date(value);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    if (m < 10) {
        m = "0" + m;
    }
    var d = time.getDate();
    if (d < 10) {
        d = "0" + d;
    }
    return y + " - " + m + " - " + d;
});
new Vue({
    render: function(h) {
        return h(App);
    }
}).$mount("#app");