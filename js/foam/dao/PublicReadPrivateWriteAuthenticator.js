/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
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
  package: 'foam.dao',
  name: 'PublicReadPrivateWriteAuthenticator',
  implements: ['foam.dao.Authenticator'],

  documentation: function() {/*
    <p>$$DOC{ref:'foam.dao.Authenticator'} for the common case where each user
    of the service can only write their own data, but all data is
    world-readable. (Eg. Twitter, to a first approximation.)</p>
  */},

  properties: [
    {
      name: 'ownerProp',
    },
  ],

  methods: [
    function massageForPut(ret, principal, old, nu) {
      // If old exists and old.owner != principal, fail: trying to write someone
      // else's data.
      if (old && NEQ(this.ownerProp, principal).f(old)) {
        ret(null);
        return;
      }

      // Now either old exists but is owned by me, or this is a new put.
      // Either way, clone nu and set its owner to the principal.
      var clone = nu.clone();
      clone[this.ownerProp.name] = principal;
      ret(clone);
    },
    function massageForRead(ret, principal, obj) {
      ret(obj);
    },
    function shouldAllowRemove(ret, principal, obj) {
      ret(!obj || EQ(this.ownerProp, principal).f(obj));
    },
    function decorateForSelect(ret, principal, dao) {
      ret(dao);
    },
  ]
});