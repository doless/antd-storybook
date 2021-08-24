import React from 'react';
import { AntdButton } from './AntdButton'
import { Button } from 'antd'
import PropTypes from 'prop-types';

export const AntdButtonGroup = ({ buttons }) => {
    const ButtonGroup = Button.Group;

    return (
        <ButtonGroup>
            { buttons.map(button => (
                <AntdButton 
                    key={button.id} 
                    {...button}/>
                )
            ) }
        </ButtonGroup>
    );
};

AntdButtonGroup.propTypes = {
    /**
     * button属性数组
     */
    buttons: PropTypes.arrayOf(PropTypes.shape(AntdButton.propTypes))
};
