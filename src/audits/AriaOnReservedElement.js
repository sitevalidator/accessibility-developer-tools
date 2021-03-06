// Copyright 2014 Google Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.require('axs.AuditRules');
goog.require('axs.constants.Severity');
goog.require('axs.properties');

/**
 * Based on recommendations in document: http://www.w3.org/TR/aria-in-html/
 */
axs.AuditRules.addRule({
    name: 'ariaOnReservedElement',
    heading: 'This element does not support ARIA roles, states and properties',
    url: 'https://github.com/GoogleChrome/accessibility-developer-tools/wiki/Audit-Rules#-ax_aria_12--this-element-does-not-support-aria-roles-states-and-properties',
    severity: axs.constants.Severity.WARNING,
    relevantElementMatcher: function(element) {
        return !axs.properties.canTakeAriaAttributes(element);
    },
    test: function(element) {
        return axs.properties.getAriaProperties(element) !== null;
    },
    code: 'AX_ARIA_12'
});
