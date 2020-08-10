import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {

    private timerIds: any[];

    constructor(props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.timerIds = [];
    }

    static defaultProps = {
        timer: 0,
        action: () => {},
        onMouseEnter: () => {},
        onMouseLeave: () => {}
    };

    static propTypes = {
        timer: PropTypes.number.isRequired,
        action: PropTypes.func.isRequired,
        className: PropTypes.string,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
    };

    static displayName = 'HoverComponent';

    onMouseEnter() {
        this.props.onMouseEnter()
        this.setIsHover()
    }

    onMouseLeave() {
        this.props.onMouseLeave()
        this.clearTimers()
    }

    setIsHover() {
        this.clearTimers();
        const hoverScheduleId = setTimeout(() => {
            this.props.action();
        }, this.props.timer);
        this.timerIds.push(hoverScheduleId);
    }

    clearTimers() {
        const ids = this.timerIds;
        while (ids.length) {
            clearTimeout(ids.pop());
        }
    }

    render() {
        const {children, className} = this.props;
        return <div{...{
            className,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
        }}>
            {children}
        </div>
    }
}
