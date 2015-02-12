/**
 * @license
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

CLASS({
  name: 'View',
  package: 'foam.ui',

  traits: ['foam.patterns.ChildTreeTrait',
           'foam.ui.SimpleViewTrait',
           'foam.ui.HTMLViewTrait',
           'foam.ui.ViewActionsTrait',
           'foam.ui.TemplateSupportTrait'],
  
  requires: ['Property'],
           
  exports: [ 'propertyViewProperty' ],

  documentation: function() {/*
    When a default view based on $$DOC{ref:'Property'} values is desired, $$DOC{ref:'DetailView'}
    is the place to start. Either using $$DOC{ref:'DetailView'} directly, implementing
    a .toDetailHTML() $$DOC{ref:'Method'} in your model, or extending
    $$DOC{ref:'DetailView'} to add custom formatting.
    </p>
    <p>Set the $$DOC{ref:'.data'} $$DOC{ref:'Property'} to the $$DOC{ref:'Model'} instance
    you want to display. $$DOC{ref:'DetailView'} will extract the $$DOC{ref:'Model'}
    definition, create editors for the $$DOC{ref:'Property',usePlural:true}, and
    display the current values of your instance. Set $$DOC{ref:'.mode',usePlural:true}
    to indicate read-only if desired.
    </p>
    <p>$$DOC{ref:'Model',usePlural:true} may specify a .toDetailHTML() $$DOC{ref:'Method'} or
    $$DOC{ref:'Template'} to render their contents instead of
    $$DOC{ref:'DetailView.defaultToHTML'}.
    </p>
    <p>For each $$DOC{ref:'Property'} in the $$DOC{ref:'.data'} instance specified,
    a $$DOC{ref:'PropertyView'} is created that selects the appropriate $$DOC{ref:'View'}
    to construct.
  */},

  properties: [
    {
      name: 'propertyViewProperty',
      type: 'Property',
      defaultValueFn: function() { return this.Property.DETAIL_VIEW; }
    }
  ]
});


