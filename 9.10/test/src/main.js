import Vue from "vue";
import App from "./App.vue";
import Config from "./utils/config";
import Moment from "moment";

Vue.config.productionTip = false;

Vue.directive("oss-src", (el, binding) => {
    let imgPath = binding.value;
    if (imgPath) {
        el.setAttribute("src", Config.osspath + imgPath);
    }
});

Vue.directive("icon-Src", (el, binding) => {
    let iconSrc = binding.value;
    if (iconSrc) {
        el.setAttribute("src", Config.iconPath + iconSrc);
    }
});

// Vue.filter("timeFormat", function(value) {
//     var time = new Date(value);
//     var y = time.getFullYear();
//     var m = time.getMonth() + 1;
//     if (m < 10) {
//         m = "0" + m;
//     }
//     var d = time.getDate();
//     if (d < 10) {
//         d = "0" + d;
//     }
//     return y + " - " + m + " - " + d;
// });
Vue.filter("timeFormat", function(value) {
    let time = Moment(value).format("YYYY - MM - DD hh:mm:ss");
    return time;
});
new Vue({
    render: function(h) {
        return h(App);
    }
}).$mount("#app");