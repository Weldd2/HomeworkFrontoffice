import Route from '@ember/routing/route';

export default class TestCompoRoute extends Route {
  model() {
    return [
      { nom: 'Antoine', desc: 'Je suis grand' },
      { nom: 'JCHeron', desc: 'Je suis un professionnel'}
    ]
  }
}
