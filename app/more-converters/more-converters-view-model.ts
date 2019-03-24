import { Observable } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array/observable-array';

export class MoreConvertersModel extends Observable {
  userInput = '';
  showSampleOne = true;

  toUpper = {
    toView(value) {
      if (!value) return;

      return value.toUpperCase();
    },
    toModel(value) {
      if (!value) return;

      return value.toLowerCase();
    }
  };

  courses = new ObservableArray([
    {
      name: 'NativeScript Core Getting Started Guide',
      description:
        'A free course to get you started with NativeScript Core using TypeScript',
      author: 'Alex Ziskind',
      difficulty: 1,
      icon: 'NativeScript_logo.png'
    },
    {
      name: 'NativeScript Plugins: Creating Custom View Components',
      description: 'Learn how to UI plugins in NativeScript',
      author: 'Nathan Walker',
      difficulty: 2,
      icon: 'NativeScript_logo.png'
    },
    {
      name: 'NativeScript Core Pro',
      description:
        'The complete course for developing NativeScript mobile applications for iOS and Android.',
      author: 'Alex Ziskind',
      difficulty: 3,
      icon: 'NativeScript_logo.png'
    },
    {
      name: 'NativeScript with @ngrx',
      description: 'Start using @ngrx in your NativeScript with Angular apps',
      author: 'Paul Halliday',
      difficulty: 3,
      icon: 'NativeScript_logo.png'
    }
  ]);

  constructor() {
    super();
  }

  checkInput() {
    alert(this.userInput);
  }

  onSampleToggle() {
    this.set('showSampleOne', !this.showSampleOne);
  }

  onGoBack(args) {
    args.object.page.frame.goBack();
  }
}
