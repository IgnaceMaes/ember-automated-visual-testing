import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupVisualTest } from 'ember-automated-visual-testing/tests/helpers';
import percySnapshot from '@percy/ember';
import MockDate from 'mockdate';

module('Visual | application', function (hooks) {
  setupVisualTest(hooks);

  test('visiting calendar', async function (assert) {
    MockDate.set('2022-09-22');
    await visit('/?month=2022-09');

    assert.strictEqual(currentURL(), '/?month=2022-09');
    await percySnapshot('Calendar');
  });
});
