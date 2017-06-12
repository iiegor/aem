# AEM

### Installation:

```sh
npm i --save aem
```

### API:

```js
class AEM.Component {
  constructor(element: HTMLElement, attributes: HTMLElement.dataset): void,
  init(): void
}
```

```js
AEM.registerComponent(selector: string, ComponentClass: AEM.Component): void
```

### Usage example:

```js
import AEM from 'aem';

class Button extends AEM.Component {
  init() {
    this.element.addEventListener('click', e => {
      alert('You clicked me!');
    });
  }
}

AEM.registerComponent('#my-button', Button);
```
