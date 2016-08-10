module Components {
  interface IRootModel {
    q: Mithril.Property<string>;
  };

  export class RootComponent implements Mithril.Component<any> {
    model:IRootModel = {
      q: m.prop('test')
    };

    SearchComponent = new Components.SearchComponent(this.model);
    DummyComponent = new Components.DummyComponent(this.model);

    controller() {return null;};

    view() {
      return m('div', [
        m(this.SearchComponent),
        m(this.DummyComponent)
      ]);
    }
  }

  export class SearchComponent implements Mithril.Component<any> {
    model:IRootModel;

    constructor(model:IRootModel) {
      this.model = model;
    }

    controller() {return null;};

    view() {
      return m('form', { class: "pure-form" },
          m('fieldset', [
            m('input', { value: this.model.q(), placeholder: 'Enter search...', oninput: m.withAttr("value", this.model.q) }),
            m('button', { class: 'pure-button pure-button-primary'}, 'Search')
        ]));
    }
  }

  export class DummyComponent implements Mithril.Component<IRootModel> {
    model:IRootModel;

    constructor(model:IRootModel) {
      this.model = model;
    }

    controller() {return null;};

    view() {
      return m('div', this.model.q() );
    }
  }
}