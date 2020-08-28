import React from 'react';

type HoverComponentProps = {
    timer: number,
    action: any,
    className?: string | undefined,
    onMouseEnter?: any,
    onMouseLeave?: any,
}

export default class extends React.Component<HoverComponentProps, {}> {

    static displayName = 'HoverComponent';

    private timerIds: any[];

    constructor(props: HoverComponentProps) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.timerIds = [];
    }

    static defaultProps = {
        onMouseEnter: () => {},
        onMouseLeave: () => {}
    };

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
