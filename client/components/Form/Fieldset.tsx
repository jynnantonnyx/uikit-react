import * as React from 'react';
import * as classNames from 'classnames';

declare interface props {
}

export class Fieldset extends React.Component<props, any> {
    render() {
        return (
            <fieldset
                className={this.setClassNames()}>
                {this.props.children}
            </fieldset>
        );
    }

    private setClassNames(): string {
        return classNames({
            [`uk-fieldset`]: true
        });
    }
}