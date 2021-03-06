var timer = foam.util.Timer.create();
 timer.start();
var E = X.E.bind(X);

E('b').add('bold', E('br')).write();

E('b').add(
  'color: ',
  E('font').attrs({color: 'red'}).add('red', E('br'))).write();

var e = E('font').add('text', E('br'));
console.log('id: ', e.id);
e.write();
e.attrs({color: 'orange'});
e.style({
  fontWeight: 'bold',
  fontSize:  '24pt'
});
e.on('click', function() { console.log('clicked'); });


var e13 = E('div').add(
  'dynamic function * ',
  function() { return timer.second % 2 ? 'PING' : E('span').add('PONG').style({color: 'orange'}); },
  ' *    dynamic value: ',
  timer.i$,
  '  ',
  function(i) { return i%10; }.on$(X, timer.i$));
e13.write();

E('div').add(
  function() {
    return timer.second % 5 ?
      'TICK' :
      E('span').add('TOCK').style({
        'font-size': function(i) { return i%2 ? '12px' : '24px'; }.on$(X, timer.second$)
      });
  }
).write();
      E('span').add('TOCK').style({
        'font-size': function(i) { return i%2 ? '12px' : '24px'; }.on$(X, timer.second$)
      }).write();

var e2 = E('font').add('on click, before', E('br')).on('click', function() { console.log('clicked, before'); });
e2.write();

var e2b = E('font').add('on click, after');
e2b.write();
e2b.on('click', function() { console.log('clicked, after'); });


var e3 = E('div').add('first line, added before');
e3.write();
e3.add(E('br'),'second line, added after');


var e4 = E('div').add('add style before').style({color: 'blue'});
e4.write();

var e5 = E('div').add('add style after');
e5.write();
e5.style({color: 'blue'});


var e6 = E('div').add('add class before').cls2('important');
e6.write();

var e7 = E('div').add('add class after');
e7.write();
e7.cls2('important');

E('div').add('dynamic class with value').cls2(function(i) { return i%2 ? 'important' : null; }.on$(X, timer.second$)).write();
E('div').add('dynamic class with fn').cls2(function() { return timer.second%2 ? 'important' : null; }).write();

E('div').add('dynamic class with fn (hidden)').style({display:'block'}).cls2(function(i) { return timer.second%3 && 'hidden'; }).write();

var e8 = E('input');
e8.write();
var v8 = e8.attrValue();
v8.set('foobar');
// Will update on submit
v8.addListener(function() { console.log('**change: ', arguments); });
// Will update on the keystroke
e8.attrValue(null, 'input').addListener(function() { console.log('**input: ', arguments); });

var e9 = E('input');
e9.write();
timer.i$ = e9.attrValue();

var e10 = E('font').add(E('br'), 'set attr before').attrs({color: 'red'});
e10.write();

var e11 = E('font').add(E('br'), 'set attr after',E('br'));
e11.write();
e11.attrs({color: 'red'});

var e12 = E('div').add('dynamic style');
e12.write();
e12.style({
  background: '#ccc',
  width: 200,
  visibility: function() { return Math.floor(timer.i/30) % 2 ? 'hidden' : 'visible'; },
  color: function() { return Math.floor(timer.i/20) % 2 ? 'black' : 'yellow'; }
});

var e14 = E('font').style({height: '80px', display: 'block'}).add('dynamic attribute');
var v = SimpleValue.create();
v.set('pink');
e14.write();
e14.attrs({
  size: function() { return Math.floor(timer.i/20) % 9; },
  color: v
});
setTimeout(function() { v.set('black'); }, 2000);

E('div').style({height: '30px'}).write();

MODEL({name: 'Person', properties: ['firstName', 'lastName', 'age']});
var dd = Person.create({firstName: 'Donald', lastName: 'Duck', age: 83});

foam.u2.DetailView.create({data:dd}).write();

var dv = foam.u2.DetailView.create().write();



setTimeout(function() { dv.data = dd; }, 2000);
// setTimeout(function() { dv.properties = [dv.model_.PROPERTIES, dv.model_.MODEL, dv.model_.DATA]; }, 5000);
setTimeout(function() { dv.title = 'New Title'; }, 7000);

var e15 = foam.u2.Input.create().write();
e15.data$ = timer.i$;

var e15b = E('input').write();
e15b.data$ = timer.i$;

E('div').style({height: '30px'}).write();

foam.u2.Input.create().write().data$ = foam.u2.Input.create().write().data$;

foam.u2.OnKeyInput.create().write().data$ = foam.u2.OnKeyInput.create().write().data$;

E('div').style({height: '30px'}).write();

foam.u2.TextArea.create().write().data$ = foam.u2.TextArea.create().write().data$;
foam.u2.OnKeyTextArea.create().write().data$ = foam.u2.OnKeyTextArea.create().write().data$;

E('div').style({height: '30px'}).write();
var e16 = foam.u2.Select.create({placeholder: 'Pick a Colour:', options: [['r', 'Red'],['g', 'Green'], ['b', 'Blue'], 'Pink']}).write();
var e17 = foam.u2.Select.create({options: [['r', 'Red'],['g', 'Green'], ['b', 'Blue'], 'Pink']}).write();

e16.data$ = e17.data$;

setTimeout(function() {
  e17.options = [['b', 'Bert'], ['e', 'Ernie']];
}, 5000);

//timer.stop();


MODEL({
  name: 'AllViews',
  properties: [
    {
      name: 'default'
    },
    {
      model_: 'StringProperty',
      name: 'string'
    },
    {
      model_: 'StringProperty',
      name: 'displayWidth',
      displayWidth: 60
    },
    {
      model_: 'StringProperty',
      name: 'displayHeight',
      displayHeight: 3
    },
    {
      model_: 'BooleanProperty',
      name: 'boolean'
    },
    {
      model_: 'BooleanProperty',
      name: 'defaultValueTrue',
      defaultValue: true
    },
    {
      model_: 'DateProperty',
      name: 'date'
    },
    {
      model_: 'DateTimeProperty',
      name: 'dateTime'
    },
    {
      model_: 'IntProperty',
      name: 'int'
    },
    {
      model_: 'LongProperty',
      name: 'long'
    },
    {
      model_: 'FloatProperty',
      name: 'float'
    },
    {
      model_: 'IntProperty',
      name: 'withUnits',
      units: 'ms'
    },
    {
      model_: 'FunctionProperty',
      name: 'function'
    },
    {
      model_: 'TemplateProperty',
      name: 'template'
    },
    {
      model_: 'ArrayProperty',
      name: 'array'
    },
    // ReferenceProperty
    {
      model_: 'StringArrayProperty',
      name: 'stringArray'
    },
    {
      model_: 'EMailProperty',
      name: 'email'
    },
    {
      model_: 'ImageProperty',
      name: 'image'
    },
    {
      model_: 'URLProperty',
      name: 'url'
    },
    {
      model_: 'ColorProperty',
      name: 'color'
    },
    {
      model_: 'PasswordProperty',
      name: 'password'
    },
    {
      model_: 'PhoneNumberProperty',
      name: 'phoneNumber'
    }
  ]
});

E('div').style({height: '30px'}).write();

 var e = E('div').add(
   E('span').add("hello "),
   E('span').add("!")).write();
 e.insertBefore(E('span').add('world'), e.children[1]);

var e = E('div').add(
  E('span').add("hello "),
  E('span').add("!"));
e.insertBefore(E('span').add('world'), e.children[1]);
e.write();

var e = E('div').add(
  E('span').add("hello "),
  E('span').add("!")).write();
e.insertAfter(E('span').add('world'), e.children[0]);

var e = E('div').add(
  E('span').add("hello "),
  E('span').add("!"));
e.insertAfter(E('span').add('world'), e.children[0]);
e.write();

var e = E('div').add(
  E('span').add("hello "),
  E('span').add("!"));
e.addBefore(e.children[1], E('span').add('there '), E('span').add('world'));
e.write();

var dv2 = foam.u2.DetailView.create({data: AllViews.create()}).write();
var dv3 = foam.u2.DetailView.create({data: dv2.data}).write();

CLASS({
  name: 'TestObject',
  properties: [
    'id',
    'a',
    'b'
  ]
});

var dao = [];
var text = [
  'hello',
  'world',
  'this',
  'is',
  'some',
  'random',
  'text',
  'options'
];

for ( var i = 0 ; i < 50; i++ ) {
  dao.push({
    id: i,
    a: text[Math.floor(Math.random() * text.length)],
    b: text[Math.floor(Math.random() * text.length)]
  });
}

dao = JSONUtil.arrayToObjArray(X, dao, TestObject);

var count = COUNT();
dao.pipe(count);

var scroll = E('input').attrs({
  type: 'range',
  min: 0,
  max: count.count$,
  step: 1
});

E('div').add("Scroll amount").add(scroll).write();

/*
foam.u2.DAOListView.create({
  data: foam.dao.ScrollDAO.create({
    src: dao,
    scrollValue$: scroll.attrValue(),
    scrollSize: 5,
    model: TestObject
  })
}).write();
*/

setInterval((function() {
  var i = 0;
  var j = 50;
  return function() {
    dao.remove(i++);
    dao.put(TestObject.create({
      id: j++,
      a: text[Math.floor(Math.random() * text.length)],
      b: text[Math.floor(Math.random() * text.length)]
    }));
  };
})(), 5000);

E().add(
  ' rw: ', foam.u2.Input.create({mode: 'rw', data: 'value'}),
  ' disabled: ', foam.u2.Input.create({mode: 'disabled', data: 'value'}),
  ' ro: ', foam.u2.Input.create({mode: 'ro', data: 'value'}),
  ' hidden: ', foam.u2.Input.create({mode: 'hidden', data: 'value'})).write();

E().add(
  ' rw: ', foam.u2.Checkbox.create({mode: 'rw', data: true}),
  ' disabled: ', foam.u2.Checkbox.create({mode: 'disabled', data: true}),
  ' ro: ', foam.u2.Checkbox.create({mode: 'ro', data: true}),
  ' hidden: ', foam.u2.Checkbox.create({mode: 'hidden', data: true})).write();



MODEL({
  name: 'VisibilityTest',
  properties: [
    {
      name: 'final',
      visibility: 'final'
    },
    {
      name: 'rw',
      visibility: 'rw'
    },
    {
      name: 'ro',
      visibility: 'ro'
    },
    {
      name: 'hidden',
      visibility: 'hidden'
    }
  ]
});
var vt = VisibilityTest.create({final: 'final', rw: 'rw', ro: 'ro'});
E().add(
  E('br'),
  E('br'),
  foam.u2.DetailView.create({title: 'default', data: vt}),
  foam.u2.DetailView.create({title: 'Create',  data: vt, controllerMode: 'create'}),
  foam.u2.DetailView.create({title: 'Modify',  data: vt, controllerMode: 'modify'}),
  foam.u2.DetailView.create({title: 'View',    data: vt, controllerMode: 'view'})
).write();

E().x({data: timer}).add(
  E('br'),
  E('br'),
  foam.u2.DetailView.create({data: timer}),
  E('br'),
  timer.STEP,
  ' : ',
  timer.model_.actions
).write();

E('br').write();

foam.u2.ElementParser.create();
var p = foam.u2.ElementParser.parser__.create();
// console.log(p.parseString('hello'));
console.log(p.parseString('<input readonly>'));
console.log(p.parseString('<input disabled="disabled">'));
console.log(p.parseString('<div id="foo" onclick="foo"><input readonly type="color"><i>italic</i>(( if ( true ) { ))<b>bold   </b>(( } ))<span>span</span></div>'));

console.log(p.parseString('<div><b if={{true}}></b></div>'));

console.log(p.parseString(multiline(function(){/*
  <div id="foo" onclick="foo" class="fooClass barClass" style="color:red;padding:5px;">
      <b if={{true}}>bold*************************</b>
    <!-- A Comment -->
    <input readonly type="color">
    <i>italic</i>
    {{this.fname}}
    {{this.fname$}}
    (( if ( true ) { ))
      <b>bold</b>
    (( } ))
      <b if={{true}}>bold</b>
      <b if="true">bold2   </b>
      <!--
      <b repeat="i in 1 to 10">i: {{i}}</b>
      <i repeat="j in this.dao">j: {{j}}</i>
      -->
    <span>span</span>
  </div>
*/})));

MODEL({
  name: 'RedElement',
  extends: 'foam.u2.Element',
  methods: [ function init() { this.SUPER(); this.style({color: 'red'}); } ]
});

MODEL({
  name: 'PersonWithTemplate',
  properties: ['firstName', 'lastName', 'age', 'brother'],
  actions: [
    {
      name: 'go',
      code: function() { console.log('Go!' + this.firstName); }
    }
  ],
  listeners: [
    { name: 'click', code: function() { console.log('click'); } }
  ],
  methods: [
    function toEMethod() { return E('b').add(E('br'),'from method'); }
  ],
  templates: [
    function toE() {/*#U2
    <div as="top" id="special" class="c1 c2" x:brother={{this.brother}} x:data={{this}} x:timer={{timer}} foo="bar" bar={{'foo'}} onClick="click"
      style="
        background: #f9f9f9;
        color: gray;
        margin: 6px;
        padding: 12px;
      ">
      (( if ( true ) { ))
        <h1>Person With Template</h1>
        <br>
      (( } ))
      <div><b>First Name: </b>{{this.firstName}}</div>
      <div><b>First Name: </b>{{this.firstName$}}</div>
      <br/>

      Brother: <brother:firstName/> <brother:go/>       <!-- A Property           -->
      <:firstName/>        <!-- A Property           -->
      <:go/>               <!-- An Action            -->
      <:toEMethod/>        <!-- A Method             -->
      <:toE2/>             <!-- Another Template     -->

      {{this.FIRST_NAME}}  <!-- Same result as above -->
      {{this.GO}}          <!-- Same result as above -->
      {{this.toEMethod()}} <!-- Same result as above -->
      {{this.toE2()}}      <!-- Same result as above -->

      <br>
      <b>timer: </b> <timer:SECOND/> <timer:STOP/> <timer:START/> <br/>

      <br>
      {{ E('i').add('italic') }}
      <br/>
      <h2>Custom Elements</h2>
      <red>not red</red>
      <p as="p">
        (( p.X.registerE('red', RedElement); ))
        <red>red</red>
      </p>
      <red>not red again</red>
      <br>
      (( if ( true ) { ))
        <b>condition: style 1 true</b>
      (( } ))
      (( if ( false ) { ))
        <b>condition: style 1 false</b>
      (( } ))
      <br>
      <b if={{true}}>condition: style 2 true</b>
      <b if={{false}}>condition: style 2 false</b>
      <br>
      <b if="true">condition: style 3 true</b>
      <b if="false">condition: style 3 false</b>
      <br>
      <b class="important">static class</b>
      <br>
      <b class={{function(i) { return i%2 && 'important'; }.on$(X, timer.second$)}}>dynamic class</b>
    </div>
    */},
    function toE2() {/*#U2
    <blockquote style="color:red">
      sub template
    </blockquote>
    */}
  ]
});

var p  = PersonWithTemplate.create({firstName: 'Sebastian', lastName: 'Greer', age: 11});
var p2 = PersonWithTemplate.create({firstName: 'Alexey',    lastName: 'Greer', age: 19});
p.brother = p2;

var e = p.toE();
console.log(p.toE.toString());
e.write();

console.log(p.model_.templates[0].template.toString().length, p.toE.toString().length);
// 1238 861 -> 811 (tag) -> 790 (div br defaults) -> 742 (remove empty strings "")
