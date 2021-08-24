import React from 'react';

import { AntdButtonGroup } from './AntdButtonGroup';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Ant Design/genneral/ButtonGroup',
  component: AntdButtonGroup,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <AntdButtonGroup {...args} />;

export const WithIcon = Template.bind({});
WithIcon.args = {
    buttons: [
        { 
            id: '1', 
            label: "Go back", 
            type: 'primary', 
            onClick: action('pre'),
            iconOut: {
                prefix: 'prefix', 
                type: 'left'
            } 
        },
        { 
            id: '2', 
            label: "Go forward", 
            type: 'primary', 
            onClick: action('next'),
            iconOut: {
                suffix: 'suffix', 
                type: 'right'
            } 
        }
    ]
};
