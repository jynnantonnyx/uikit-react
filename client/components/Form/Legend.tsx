import * as React from 'react';
import * as classNames from 'classnames';

declare interface props {
}

export class Legend extends React.Component<props, any> {
    render() {
        return (
            <legend
                className={this.setClassNames()}>
                {this.props.children}
            </legend>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-legend`]: true
        });
    }
}