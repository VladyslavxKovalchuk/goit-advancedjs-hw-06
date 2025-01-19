/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {
  }
}
interface PageProperty {
  title: string;
}
class Page extends Component<PageProperty> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};