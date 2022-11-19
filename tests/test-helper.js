import Application from 'ember-automated-visual-testing/app';
import config from 'ember-automated-visual-testing/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

// Add a checkbox in the QUnit toolbar to easily toggle Polly recording and replay mode
QUnit.config.urlConfig.push({
  id: 'pollyRecord',
  label: 'Record with Polly',
  tooltip: 'Record HTTP requests using Polly and saves them to a file',
});

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
