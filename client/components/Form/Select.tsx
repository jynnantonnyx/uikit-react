import * as React from 'react';
import * as classNames from 'classnames';

declare interface props extends React.HTMLProps<HTMLSelectElement> {
    color?: 'danger' | 'success' | 'blank';
    layout?: 'small' | 'large';
    width?: 'large' | 'medium' | 'small' | 'xsmall';
}

export class Select extends React.Component<props, any> {
    render() {
        return (
            <select
                id={this.props.id}
                className={this.setClassNames()}
                value={this.props.value}
                onChange={this.props.onChange}>
                {this.props.children}
            </select>
        );
    }

    private  setClassNames(): string {
        return classNames({
            [`uk-select`]: true,
            [`uk-form-${this.props.color}`]: !!this.props.color,
            [`uk-form-${this.props.width}`]: !!this.props.width,
            [`uk-form-${this.props.layout}`]: !!this.props.layout
        });
    }
}