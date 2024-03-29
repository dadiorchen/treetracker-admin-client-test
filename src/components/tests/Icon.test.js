import React from 'react';
import { render } from '@testing-library/react';
import Icon from '../Icon';

describe('Icon component', () => {
  test('path class value contains "Icon-active" when <Icon active="not_empty" />', () => {
    const component = render(<Icon active="not_empty" />);
    const path = component.container.querySelector('path');
    const path_class_value = path.attributes.getNamedItem('class').value;
    expect(path_class_value).toMatch('Icon-active');
  });
  test('path class value contains "Icon-default" when <Icon active="" /> or <Icon />', () => {
    const component = render(<Icon active="" />);
    const path = component.container.querySelector('path');
    const path_class_value = path.attributes.getNamedItem('class').value;
    console.log(path_class_value);
    expect(path_class_value).toMatch('Icon-default');
  });
});
