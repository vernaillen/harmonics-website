<script setup>
let p = null
function centeredPopup(u, n, w, h, r) {
  l = (screen.width) ? (screen.width - w) / 2 : 0
  t = (screen.height) ? (screen.height - h) / 2 : 0
  s = `height=${h},width=${w},top=${t},left=${l},scrollbars=${r},resizable`
  p = window.open(u, n, s)
}
</script>

<template>
  <a
    href="https://shop.ikbenaanwezig.nl/tickets/event/release-your-inner-dancer-20augustus"
    target="_blank"
    @click="centeredPopup(href, 'Ik Ben Aanwezig Tickets', '500', '750', 'yes')"
  ><img
    src="https://shop.ikbenaanwezig.nl/media/images/tickets_button.png" alt="Tickets"
  ></a>
</template>
