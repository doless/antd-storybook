import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import { AntdIcon } from './AntdIcon';

/**
 * Primary UI component for user interaction
 */
export const AntdButton = ({ iconOut, label, backgroundColor, ...props }) => {
    return (
        <Button
            style={{ background: backgroundColor }}
            {...props}
        >
            {iconOut?.prefix ? (<AntdIcon {...iconOut} />) : null}
            {label}
            {iconOut?.suffix ? (<AntdIcon {...iconOut} />) : null}
        </Button>
    );
    
};


AntdButton.propTypes = {
    /**
     * 按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
     */
    type: PropTypes.oneOf(['default', 'primary', 'ghost', 'dashed', 'link', 'text']),

    /**
     * 按钮形状，默认为方形，圆角, `circle`为圆形按钮， `round`: 两侧圆形边。
     */
    shape: PropTypes.oneOf(['circle', 'round', 'square']),

    /**
     * 当需要在 `Button` 内嵌入 `Icon` 时，可以设置 `icon` 属性，或者直接在 `Button` 内使用 `Icon` 组件。
     * 如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性。
     */
    icon: PropTypes.string,

    /**
     * 如果想控制 `Icon` 具体的位置，只能直接使用 `Icon` 组件，而非 `icon` 属性, 通过属性`iconOut`设置图标类型。
     * `iconOut.prefix`对应按钮左侧图标类型；`iconOut.suffix`对应按钮右侧图标类型
     */
    iconOut: PropTypes.shape({
        prefix: PropTypes.string, 
        suffix: PropTypes.string
    }),

    /**
     * 按钮有大、中、小三种尺寸。
     * 通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
     */
    size: PropTypes.oneOf(['small', 'default', 'large']),

    /**
     * Button contents
     */
    label: PropTypes.string.isRequired,

    /**
     * 添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。
     */
    disabled: PropTypes.bool,

    /**
     * `block`属性将使按钮适合其父宽度。
     */
    block: PropTypes.bool,

    /**
     * 幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。
     */
    ghost: PropTypes.bool,

    /**
     * 添加 `loading` 属性即可让按钮处于加载状态，最后两个按钮演示点击后进入加载状态。
     */
    loading: PropTypes.bool,

    /**
     * Optional click handler
     */
    onClick: PropTypes.func,
};

AntdIcon.defaultProps = {
    theme: 'outlined'
};
