import { visitParents } from 'unist-util-visit-parents'
// import { hasProtocol } from 'ufo'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:afterParse', (file) => {
    if (file._id.endsWith('.md')) {
      let index = 0
      visitParents(file.body, 'element', (node, ancestors) => {
        /* if (node.tag === 'a' && node.props.href && !hasProtocol(node.props.href)) {
          console.log(node)
          console.log(node.props.class)
          node.props.class = (node.props.class ? node.props.class : '') + ' internal-link'
          console.log(node)
        } */
        if (ancestors.length === 1 && ancestors[0].type === 'root') {
          if (node.tag === 'div' && node.props.class && node.props.class.startsWith('col-')) {
            // do nothing
          }
          else if (node.props.class && node.props.class === 'no-sliding') {
            // do nothing
          }
          else {
            enrichNode(node, index++)
          }
        }
        else if (ancestors.length === 2 && ancestors[0].type === 'root') {
          if (ancestors[1].tag === 'div' && ancestors[1].props.class && ancestors[1].props.class.startsWith('col-') && !node.tag.startsWith('planned-')) {
            enrichNode(node, index++)
          }
        }
      })
    }
  })
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function enrichNode(node: any, index: number) {
  node.props.className = (node.props.className ? node.props.className : '') + ' slide-enter'
  node.props.style = (node.props.style ? node.props.style : '') + ' --enter-stage: ' + index + '; --enter-step: 90ms;'
}
