import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './AntdIcon.css'

/**
 * 语义化的矢量图形。更多图标类型，查看 [`Ant Design` 官网](https://3x.ant.design/components/icon-cn/)
 */
export const AntdIcon = ({ style, component, scriptUrl, ...props }) => {
    if (component) {
        // 自定义图标
        const CustomIcon = props => <Icon component={component} {...props} />;
        return (
            <CustomIcon style={style} />
        );
    } else if (scriptUrl) {
        // 已有项目图标
        const IconFont = Icon.createFromIconfontCN({
            scriptUrl
        });

        return (
            <IconFont {...props} />
        );
    } else {
        return (
            <Icon {...props} style={style} />
        );
    }
};


AntdIcon.propTypes = {
    /**
     * 图标类型。遵循图标的命名规范。
     */
    type: PropTypes.string,

    /**
     * 设置图标的样式，例如 `fontSize` 和 `color`
     */
    style: PropTypes.any,

    /**
     * 图标主题风格。可选实心、描线、双色等主题风格，适用于官方图标
     */
    theme: PropTypes.oneOf(['filled', 'outlined', 'twoTone']),

    /**
     * 是否有旋转动画
     */
    spin: PropTypes.bool,

    /**
     * 图标旋转角度（`3.13.0` 后新增，`IE9` 无效）
     */
    rotate: PropTypes.number,

    /**
     * 仅适用双色图标。设置双色图标的主要颜色 (十六进制颜色)
     */
    twoToneColor: PropTypes.string,

    /**
     * `iconfont.cn` 项目在线生成的 `js` 地址
     */
    scriptUrl: PropTypes.string,

    /**
     * Optional click handler
     */
    onClick: PropTypes.func,

    /**
     * 利用 `Icon` 组件封装一个可复用的自定义图标。可以通过 `component` 属性传入一个组件来渲染最终的图标，以满足特定的需求。
     */
    component: PropTypes.any,

    /**
     * Icon 中的 component 组件的接受的属性如下： `svg` 元素宽度
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Icon 中的 component 组件的接受的属性如下： `svg` 元素高度
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Icon 中的 component 组件的接受的属性如下：`svg` 元素填充的颜色
     */
    fill: PropTypes.string,

    /**
     * Icon 中的 component 组件的接受的属性如下：计算后的 `svg` 类名
     */
    className: PropTypes.string,

    /**
     * Icon 中的 component 组件的接受的属性如下：计算后的 `svg` 元素样式  `style`
     */
};



AntdIcon.defaultProps = {
    theme: 'outlined',
    spin: false
};
