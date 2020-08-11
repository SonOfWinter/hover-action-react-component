# react-hover-action-delay

React component to do action on hover after delay.

## Installation

With npm :

```
npm install react-hover-action-delay
```

With yarn :

```
yarn add react-hover-action-delay
```

## Usage

```javascript
<HoverComponent
    timer={2000}
    action={yourAction}
    onMouseLeave={onMouseLeave}
    onMouseEnter={onMouseEnter}
>
    <button>click</button>
</HoverComponent>
```

with :

* timer = time in ms (required)

* action = function to call when timer ended (required)

* onMouseEnter = function to call on mouse enter on the component

* onMouseLeave = function to call on mouse leave the component
