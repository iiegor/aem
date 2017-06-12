# AEM

### Installation:

```sh
npm i --save aem
```

### Example:

```js
import AEM from 'aem';

class Button extends AEM.Component {
  init() {
    this.element.addEventListener('click', () => {
      alert('You clicked me!');
    });
  }
}

AEM.registerComponent('#my-button', Button);
```
