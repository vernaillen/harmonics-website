<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div id="mc_embed_signup" class="prose">
    <form id="mc-embedded-subscribe-form" action="https://harmonics.us14.list-manage.com/subscribe/post?u=70b20f90b742c102a6d56ec9c&amp;id=7e4d7c55a7&amp;f_id=0082f7e0f0" method="post" name="mc-embedded-subscribe-form" class="validate" target="_blank" rel="noopener" novalidate>
      <div id="mc_embed_signup_scroll">
        <h1 class="animated pulse">
          {{ t('mailinglist.title') }}
        </h1>
        <p>{{ t('mailinglist.subtitle') }}</p>
        <div class="mc-field-group">
          <label for="mce-EMAIL">{{ t('mailinglist.email') }}  <span class="asterisk">*</span>
          </label>
          <input id="mce-EMAIL" type="email" value="" name="EMAIL" class="required email" required>
          <span id="mce-EMAIL-HELPERTEXT" class="helper_text" />
        </div>
        <div class="mc-field-group">
          <label for="mce-FNAME">{{ t('mailinglist.firstname') }}  <span class="asterisk">*</span>
          </label>
          <input id="mce-FNAME" type="text" value="" name="FNAME" class="required" required>
          <span id="mce-FNAME-HELPERTEXT" class="helper_text" />
        </div>
        <div id="mce-responses" class="clear foot">
          <div id="mce-error-response" class="response" style="display:none" />
          <div id="mce-success-response" class="response" style="display:none" />
        </div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups -->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input type="text" name="b_70b20f90b742c102a6d56ec9c_7e4d7c55a7" tabindex="-1" value="">
        </div>
        <div class="optionalParent">
          <div class="clear foot">
            <input id="mc-embedded-subscribe" type="submit" :value="t('mailinglist.subscribe')" name="subscribe" class="button">
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
#mc_embed_signup {
  clear: left;
  font-size: 14px;
}
/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
#mc_embed_signup .mc-field-group {
  padding-bottom: 10px;
}
#mc_embed_signup .mc-field-group input {
  display: block;
  width: 100%;
  padding: 2px 0;
  text-indent: 2%;
}
#mc_embed_signup img {
  margin-top: 0;
  margin-bottom: 0;
}
</style>

