/* Instgram Integration */
(function() {
  class Instagram {
    constructor(image_link, link) {
      this.image_link = imglink;
      this.link = link;
    }
  }
})(this);


/* Vue Components */

(function() {
  Vue.component('modal-pop-up', {
    props: ['title', 'content'],
    template:
      `
        <div class="modal">
          <div class="modal-mask">
            <div class="modal-wrapper">
              <div class="modal-container">

                <div class="modal-header">
                  <div name="header">
                    {{ title }}
                  </div>
                </div>

                <div class="modal-content">
                  <slot name="content">
                  </slot>
                </div>

                <div class="modal-footer">
                  <div name="footer">
                    <button class="btn modal-default-button"
                            @click="$emit('close')">
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
  });
})(this);

