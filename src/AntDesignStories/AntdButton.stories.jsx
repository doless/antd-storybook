import React from 'react';

import { AntdButton } from './AntdButton';

export default {
  title: 'Ant Design/genneral/Button',
  component: AntdButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <AntdButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "primary",
    className: "primary-button"
};

export const Secondary = Template.bind({});
Secondary.args = {
    ...Primary.args,
    disabled: true,
    label: 'disabled',
    size: 'large'
};
