# AEM

### Installation:

```sh
npm i --save aem
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
