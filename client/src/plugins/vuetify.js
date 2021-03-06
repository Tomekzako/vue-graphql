import Vue from "vue";
import Vuetify from "vuetify/lib";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.lighten1,
        secondary: colors.teal.lighten3,
        accent: colors.red.lighten2,
        error: colors.red.accent1,
        warning: colors.amber.base,
        info: colors.blue.accent3,
        success: colors.green.darken4
      }
    }
  }
});
