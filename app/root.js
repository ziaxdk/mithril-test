var Components;
(function (Components) {
    ;
    var RootComponent = (function () {
        function RootComponent() {
            this.model = {
                q: m.prop('test')
            };
            this.SearchComponent = new Components.SearchComponent(this.model);
            this.DummyComponent = new Components.DummyComponent(this.model);
        }
        RootComponent.prototype.controller = function () { return null; };
        ;
        RootComponent.prototype.view = function () {
            return m('div', [
                m(this.SearchComponent),
                m(this.DummyComponent)
            ]);
        };
        return RootComponent;
    }());
    Components.RootComponent = RootComponent;
    var SearchComponent = (function () {
        function SearchComponent(model) {
            this.model = model;
        }
        SearchComponent.prototype.controller = function () { return null; };
        ;
        SearchComponent.prototype.view = function () {
            return m('form', { class: "pure-form" }, m('fieldset', [
                m('input', { value: this.model.q(), placeholder: 'Enter search...', oninput: m.withAttr("value", this.model.q) }),
                m('button', { class: 'pure-button pure-button-primary' }, 'Search')
            ]));
        };
        return SearchComponent;
    }());
    Components.SearchComponent = SearchComponent;
    var DummyComponent = (function () {
        function DummyComponent(model) {
            this.model = model;
        }
        DummyComponent.prototype.controller = function () { return null; };
        ;
        DummyComponent.prototype.view = function () {
            return m('div', this.model.q());
        };
        return DummyComponent;
    }());
    Components.DummyComponent = DummyComponent;
})(Components || (Components = {}));
