import {
  createModule, mutation, action, extractVuexModule,
} from 'vuex-class-component';

const VuexModule = createModule({
  // namespaced: 'mobileStore',
  strict: false,
});

export default class MobileStore extends VuexModule {
  // Subscribed to
  @mutation showPageSidebar() {}
}
