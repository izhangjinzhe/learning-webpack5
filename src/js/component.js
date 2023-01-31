// import 'css-loader!../css/index.css'
import '../css/index.css'
import '../css/component.less'

function component(){
  const div = document.createElement('div')

  div.innerHTML = 'hello world'
  div.className = 'text'
  return div
}

document.body.appendChild(component())
