import React from 'react/addons';
import test from 'tape';

import createStamp from '../src';
import { isComposable } from '../src/utils';

const TestUtils = React.addons.TestUtils;

test('createStamp()', (t) => {
  t.plan(1);

  t.ok(
    isComposable(createStamp()),
    'should return a stamp'
  );
});

test('createStamp(React, props)', (t) => {
  t.plan(1);

  const stamp = createStamp(React, {});

  t.ok(
    isComposable(stamp),
    'should return a stamp'
  );
});

test('createStamp(React)', (t) => {
  t.plan(1);

  const stamp = createStamp(React);

  t.ok(
    isComposable(stamp),
    'should return a stamp'
  );
});

test('createStamp(null, props)', (t) => {
  t.plan(1);

  const stamp = createStamp(null, {});

  t.ok(
    isComposable(stamp),
    'should return a stamp'
  );
});

test('createStamp(React, { render() })()', (t) => {
  t.plan(1);

  const stamp = createStamp(React, {
    render() {},
  });

  t.ok(
    TestUtils.isCompositeComponent(stamp()),
    'should return a React component'
  );
});

test('createStamp(React, props).compose', (t) => {
  t.plan(1);

  t.equal(
    typeof createStamp(React).compose, 'function',
    'should be a function'
  );
});