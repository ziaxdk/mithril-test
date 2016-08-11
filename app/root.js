var Components;
(function (Components) {
    ;
    var RootComponent = (function () {
        function RootComponent() {
            this.model = {
                q: m.prop('test')
            };
            this.SearchComponent = new Components.SearchComponent();
            this.DummyComponent = new Components.DummyComponent();
        }
        RootComponent.prototype.controller = function () { return null; };
        ;
        RootComponent.prototype.view = function () {
            return m('div', [
                m(this.SearchComponent, this.model),
                m(this.DummyComponent, this.model)
            ]);
        };
        return RootComponent;
    }());
    Components.RootComponent = RootComponent;
    var SearchComponent = (function () {
        function SearchComponent() {
        }
        SearchComponent.prototype.controller = function (model) {
            return {
                q: model.q,
                submit: function () {
                    console.log();
                    m.route('/res/' + encodeURIComponent(model.q()));
                    return false;
                }
            };
        };
        ;
        SearchComponent.prototype.view = function (ctrl) {
            return m('form', { onsubmit: ctrl.submit, class: "pure-form" }, m('fieldset', [
                m('input', { value: ctrl.q(), placeholder: 'Enter search...', oninput: m.withAttr("value", ctrl.q) }),
                m('button', { type: 'submit', class: 'pure-button pure-button-primary' }, 'Search')
            ]));
        };
        return SearchComponent;
    }());
    Components.SearchComponent = SearchComponent;
    var DummyComponent = (function () {
        function DummyComponent() {
        }
        DummyComponent.prototype.controller = function (model) {
            return {
                q: model.q
            };
        };
        ;
        DummyComponent.prototype.view = function (ctrl) {
            return m('div', ctrl.q());
        };
        return DummyComponent;
    }());
    Components.DummyComponent = DummyComponent;
})(Components || (Components = {}));
