import css from './index.scss'
import aa from './assets/1.jpeg'
import { a } from './a'

console.log( a );
if ( process.env.NODE_ENV === "development" ) {
  console.log( "baseurl is localhost" )
} else {
  console.log( "baseurl is imooc.com" )
}
