module Components {
  interface IRootModel {
    q: Mithril.Property<string>;
  };

  export class RootComponent implements Mithril.Component<any> {
    model:IRootModel = {
      q: m.prop('test')
    };

    SearchComponent = new Components.SearchComponent();
    DummyComponent = new Components.DummyComponent();

    controller() {return null;};

    view() {
      return m('div', [
        m(this.SearchComponent, this.model),
        m(this.DummyComponent, this.model)
      ]);
    }
  }

  export class SearchComponent implements Mithril.Component<any> {
    
    controller(model:IRootModel) {
      return {
        q: model.q,
        submit: function() {
          console.log()
          m.route('/res/' + encodeURIComponent(model.q()));
          return false;
        }
      };
    };

    view(ctrl) {
      return m('form', { onsubmit: ctrl.submit, class: "pure-form" },
          m('fieldset', [
            m('input', { value: ctrl.q(), placeholder: 'Enter search...', oninput: m.withAttr("value", ctrl.q) }),
            m('button', { type: 'submit', class: 'pure-button pure-button-primary'}, 'Search')
        ]));
    }
  }

  interface IDummyModel {
    q: Mithril.Property<string>;
  }
  export class DummyComponent implements Mithril.Component<IRootModel> {

    controller(model:IRootModel) {
      return {
        q: model.q
      };
    };

    view(ctrl: IDummyModel) {
      return m('div', ctrl.q() );
    }
  }
}