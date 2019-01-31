/**
 * Created by yel on 2019/1/23.
 */
import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions
});